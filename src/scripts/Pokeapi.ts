import IDictionary from "../interfaces/IDictionary";
import IPokemon, { IPokemonType } from "../interfaces/IPokemon";
import icons from "./Icons";
const sourceURL = "https://pokeapi.co/api/v2/";

export async function loadPokemons(offset: number): Promise<IPokemon[]> {
  const data: Response = await fetch(
    `${sourceURL}pokemon/?offset=${offset}&limit=20`
  );
  const json: any = await data.json();
  let pokemons: IPokemon[] = [];
  for (let i = 0; i < json.results.length; i++) {
    const pokemon = await getPokemon(json.results[i].url);
    pokemons.push(pokemon);
  }
  return pokemons;
}

export async function getPokemonById(id: number | string): Promise<IPokemon | null> {
  const pokemon = await getPokemon(`${sourceURL}pokemon/${id}`);
  return pokemon;
}

export async function getPokemon(url: string): Promise<IPokemon> {
  const data: Response = await fetch(url);
  const json: any = await data.json();
  const pokemonType: IPokemonType[] = [];
  json.types.map((poke: any) => {
    pokemonType.push({
      name: poke.type.name,
      image: icons(poke.type.name),
    });
  });

  const transformedPokemon: IPokemon = {
    index: json.id,
    name: capitalizeLetter(json.name),
    color: typesColor[pokemonType[0].name],
    image: `${json.sprites.other["official-artwork"].front_default}`,
    types: pokemonType,
  };

  return transformedPokemon;
}

export function capitalizeLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const typesColor: IDictionary = {
  normal: "#A0A29F",
  fighting: "#D3425F",
  flying: "#A1BBEC",
  poison: "#B763CF",
  ground: "#DA7C4D",
  rock: "#C9BB8A",
  bug: "#92BC2C",
  ghost: "#5F6DBC",
  steel: "#5695A3",
  fire: "#FBA54C",
  water: "#539DDF",
  grass: "#5FBD58",
  electric: " #F2D94E",
  psychic: " #FA8581",
  ice: "#75D0C1",
  dragon: "#0C69C8",
  dark: "#595761",
  fairy: "#EE90E6",
};
