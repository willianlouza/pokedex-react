import IPokemon, { IPokemonType } from "../src/interfaces/IPokemon";
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

export async function getPokemonById(id: number): Promise<IPokemon | null> {
  const pokemon = await getPokemon(`${sourceURL}pokemon/${id}`);
  return pokemon;
}

export async function getPokemon(url: string): Promise<IPokemon> {
  const data: Response = await fetch(url);
  const json: any = await data.json();
  const pokemonType: IPokemonType[] = [];
  json.types.map((poke: any) => {
    pokemonType.push({
      name: capitalizeLetter(poke.type.name),
      color: typesColor[poke.type.name],
    });
  });

  const transformedPokemon: IPokemon = {
    index: json.id,
    name: capitalizeLetter(json.name),
    color: pokemonType[0].color,
    image: `${json.sprites.other["official-artwork"].front_default}`,
    types: pokemonType,
  };

  return transformedPokemon;
}

export function capitalizeLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export const typesColor: types = {
  normal: "#B1B1B1",
  fighting: "#b64d19",
  flying: "#277ba1",
  poison: "#823ec3",
  ground: "#8a8331",
  rock: "#715c3d",
  bug: "#2f9651",
  ghost: "#83417a",
  steel: "#6c6c6c",
  fire: "#a8282b",
  water: "#145eab",
  grass: "#7d8545",
  electric: " #ba9a22",
  psychic: " #452a8d",
  ice: "#659dba",
  dragon: "#d57931",
  dark: "#232424",
  fairy: "#ba65a0",
};

type types = {
  [key: string]: string;
};
