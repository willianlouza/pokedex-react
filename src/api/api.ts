import { toPokemon } from "@/utils/transformer";

const API_URL = "https://pokeapi.co/api/v2/";

async function getPokemonById(id: number) {
  try {
    const res = await (await fetch(`${API_URL}pokemon/${id}`)).json();
    const pokemon = toPokemon(res);
    return pokemon;
  } catch (err) {
    return null;
  }
}

async function getPokemonByName(name: string) {
  try {
    const res = await (await fetch(`${API_URL}pokemon/${name}`)).json();
    const pokemon = toPokemon(res);
    return pokemon;
  } catch (err) {
    return null;
  }
}

const api = {
  getPokemonById,
  getPokemonByName,
};

export default api;
