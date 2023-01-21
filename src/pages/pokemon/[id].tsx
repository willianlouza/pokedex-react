import api from "@/api/api";
import PokemonDataInspector from "@/components/data-inspector";
import MainLayout from "@/components/layout/main";
import StatsGroup from "@/components/stats-group";
import IPokemon from "@/interfaces/pokemon";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MdArrowLeft, MdArrowRight } from "react-icons/md";

type Data = {
  pokemon: IPokemon | null;
};
export const getServerSideProps: GetServerSideProps<Data> = async (
  context: any
) => {
  const id = context.query.id;
  const pokemon = await api.getPokemonById(id);
  return {
    props: {
      pokemon,
    },
  };
};

export default function PokemonInspector(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { pokemon } = props;
  const router = useRouter();

  if (!pokemon) {
    return router.push("/");
  }

  const loadNext = () => {
    router.push(`/pokemon/${pokemon.id + 1}`);
  };
  const loadPrev = () => {
    if (pokemon.id <= 1) {
      return;
    }
    router.push(`/pokemon/${pokemon.id - 1}`);
  };

  return (
    <>
      <Head>
        <title>{pokemon.name}</title>
        <meta
          name="description"
          content="A Pokédex application made with Next JS"
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout pokemonType={pokemon.types[0]}>
        <main className="my-32">
          <h1 className="font-medium text-6xl">{pokemon.name}</h1>
          <div className="py-24 flex flex-col place-items-center place-content-evenly lg:flex-row gap-16">
            <div className="max-w-2xl relative">
              <div className="absolute rounded-full scale-x-150 bg-black/25 blur-lg w-48 h-32 bottom-4 left-[calc(50%-5rem)] -z-10"></div>
              <Image
                className="w-full h-full object-cover"
                src={pokemon.sprite || ""}
                alt={pokemon.name || ""}
                width={500}
                height={500}
              />
            </div>
            <PokemonDataInspector pokemon={pokemon} />

            <StatsGroup stats={pokemon.stats} />
          </div>

          <div className="flex flex-row gap-32">
            <button
              className="disabled:bg-blue-300 bg-blue-700 text-white font-medium hover:bg-blue-800 py-2 px-4 rounded-sm"
              onClick={() => loadPrev()}
              disabled={pokemon.id === 1}
            >
              <MdArrowLeft className="w-8 h-8" />
            </button>
            <button
              className="disabled:bg-blue-300 bg-blue-700 text-white font-medium hover:bg-blue-800 py-2 px-4 rounded-sm"
              onClick={() => loadNext()}
              disabled={pokemon.id === 905}
            >
              <MdArrowRight className="w-8 h-8" />
            </button>
          </div>
        </main>
      </MainLayout>
    </>
  );
}
