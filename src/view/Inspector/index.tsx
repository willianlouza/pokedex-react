import React from 'react';
import { useParams } from 'react-router-dom';
import IPokemon from '../../interfaces/IPokemon';
import {getPokemonById} from "../../scripts/Pokeapi";

function Inspector() {
  const { id } = useParams();

  const pokemon = async () => {
    if(typeof(id) === 'string'){
      const r = await getPokemonById(id);
    }
  }

  return (
    <>
    {id}
    </>
  )
}



export default Inspector;