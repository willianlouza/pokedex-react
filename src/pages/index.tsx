import MainLayout from "@/components/layout/main";
import PokemonCard from "@/components/card/pokemon";
import SearchBar from "@/components/search-bar";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [pokemons, setPokemons] = useState<number[]>(
    Array.from(Array(21).keys())
  );
  const loadPokemons = async () => {
    const aux: any = [];
    let start = pokemons[pokemons.length - 1];
    let additional = 21;
    let lastIndex = 903;
    if (start >= lastIndex) return;
    if (start + additional >= lastIndex) {
      for (let i = start; i < lastIndex; i++) {
        aux.push(i);
      }
    } else {
      for (let i = start; i < start + additional; i++) {
        aux.push(i);
      }
    }
    setPokemons((prev) => [...prev, ...aux]);
  };
  return (
    <>
      <Head>
        <title>Pokédex</title>
        <meta
          name="description"
          content="A Pokédex application made with Next JS"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout>
        <div className="pt-24 flex flex-col gap-16">
          <SearchBar className="m-auto" />
          <div className="flex flex-wrap place-content-center gap-4 place-items-center">
            {pokemons.map((pokemon, i) => {
              return <PokemonCard key={i} id={i + 1} />;
            })}
          </div>

          <button
            onClick={() => loadPokemons()}
            className="hover:bg-blue-800 mb-14 m-auto py-2 px-4 rounded-sm text-xl text-white bg-blue-700"
          >
            Load more
          </button>
        </div>
      </MainLayout>
    </>
  );
}
