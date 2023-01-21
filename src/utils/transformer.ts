import IPokemon from "@/interfaces/pokemon";
import { capitalize } from "./formatter";

export const toPokemon = (data: any): IPokemon => {
  return {
    id: data.id,
    name: capitalize(data.name),
    height: data.height,
    weight: data.weight,
    sprite: data.sprites.other["official-artwork"].front_default,
    abilities: extractAbilities(data.abilities),
    types: extractTypes(data.types),
    stats: extractStats(data.stats),
  };
};
function extractAbilities(abilities: any[]): string[] {
  let aux: string[] = [];
  abilities.forEach((el) => {
    aux.push(capitalize(el.ability.name));
  });
  return aux;
}
function extractTypes(types: any[]): any {
  let aux: any = [];
  types.forEach((el) => {
    aux.push(capitalize(el.type.name));
  });
  return aux;
}
function extractStats(stats: any[]): any {
  let aux: any = [];
  stats.forEach((el) => {
    aux.push({
      name: capitalize(el.stat.name),
      value: el.base_stat,
    });
  });
  return aux;
}
