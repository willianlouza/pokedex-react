export default interface IPokemon {
  index: number;
  name: string;
  image: string;
  color: string;
  types: IPokemonType[];
}

export interface IPokemonType {
  name: string;
  image: string;
}
