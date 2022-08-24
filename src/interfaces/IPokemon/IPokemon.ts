export default interface IPokemon {
  index: number;
  name: string;
  image: string;
  color: string;
  types: IPokemonType[];
}

export interface IPokemonType {
  name: string;
  color: string;
}

export const typesColor : types = {
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
  eletric: " #ba9a22",
  psychic: " #452a8d",
  ice: "#659dba",
  dragon: "#d57931",
  dark: "#232424",
  fairy: "#ba65a0",
};

type types = {
  [key: string]: string;
}