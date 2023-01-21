export default interface IPokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprite: string;
  abilities: string[];
  stats: [{ name: string; value: number }];
  types: string[];
}