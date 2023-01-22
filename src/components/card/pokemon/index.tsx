import api from "@/api/api";
import { withZeroBefore } from "@/utils/formatter";
import { toPokemon } from "@/utils/transformer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface IProps {
  id: number;
}
export default function PokemonCard(props: IProps) {
  const { id } = props;
  const [name, setName] = useState("");
  const [sprite, setSprite] = useState("");
  const [type, setType] = useState("");
  const [mounted, setMounted] = useState(false);

  const init = async () => {
    const pokemon = await api.getPokemonById(id);
    if (!pokemon) return;
    setName(pokemon.name);
    setSprite(pokemon.sprite);
    setType(pokemon.types[0]);
    setMounted(true);
  };

  useEffect(() => {
    init();
  }, []);
  if (!mounted)
    return (
      <div className="w-56 h-56 bg-gray-300 rounded-md overflow-hidden">
        <div className="h-full w-full gradient-animation"></div>
      </div>
    );

  return (
    <div className="max-w-fit">
      <Link href={`pokemon/${id}`} className="group relative">
        <h1 className="absolute z-20 text-4xl md:text-6xl text-white/40 font-black top-1 left-1">
          #{withZeroBefore(+id)}
        </h1>
        <div className="absolute top-0 left-0 w-full h-full rounded-lg bg-transparent z-10 group-hover:bg-black/25"></div>
        <div
          className={`${type.toLowerCase()} relative w-44 h-44 md:w-56 md:h-56 p-4 rounded-lg shadow-md shadow-gray-300 border border-white/25`}
        >
          <div className="absolute h-full w-full top-0 left-0 z-20 ">
            <div className="w-32 h-32 md:w-44 md:h-44 absolute md:top-[calc(50%-5.5rem)] md:left-[calc(50%-5.5rem)] top-[calc(50%-4rem)] left-[calc(50%-4rem)]">
              {sprite && (
                <Image
                  className="w-full h-full group-hover:drop-shadow-pk group-hover:-translate-y-10 group-hover:scale-125 transition-all duration-150"
                  src={sprite}
                  alt="pokemon"
                  width={500}
                  height={500}
                />
              )}
            </div>
          </div>
        </div>
        <div className=" z-20 overflow-hidden absolute w-full h-full top-0 left-0 flex flex-col place-content-end ">
          <span className="text-center translate-y-14 group-hover:-translate-y-2 transition-transform duration-150">
            <p className="text-lg font-medium text-white">{name}</p>
          </span>
        </div>
      </Link>
    </div>
  );
}
