import React, { ReactElement } from "react";
import IPokemon, {
  IPokemonType,
  typesColor,
} from "../../interfaces/IPokemon/IPokemon";
import capitalizeLetter from "../../Utils/CapitalizeLetter";
import Filter from "../Filter";
import PokedexGrid from "../PokedexGrid";
import PokemonCard from "../PokemonCard";

interface IProps {}
interface IState {
  pokemons: IPokemon[];
  cards: ReactElement[];
}

export default class Pokedex extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      pokemons: [],
      cards: [],
    };
    this.getPokemon = this.getPokemon.bind(this);
  }

  async componentDidMount() {
    this.init();
  }

  async init() {
    let pokemons: IPokemon[] = [];
    let cards: ReactElement[] = [];
    for (let i = 1; i < 21; i++) {
      const p = await this.getPokemon(i);
      pokemons.push(p);
      cards.push(<PokemonCard key={i} pokemon={p} />);
    }
    this.setState({ pokemons: pokemons, cards: cards });
  }

  async getByType(type: string | null) {
    if (type === null) {
      return await this.init();
    }
    let pokemons: IPokemon[] = [];
    let cards: ReactElement[] = [];
    for (let i = 1; i < 21; i++) {
      const p = await this.getPokemonByType(`type/${type}`, i);
      pokemons.push(p);
      cards.push(<PokemonCard key={i} pokemon={p} />);
    }
    this.setState({ pokemons: pokemons, cards: cards });
  }
  async getPokemonByType(query: string, id: number): Promise<IPokemon> {
    const data: Response = await fetch(`https://pokeapi.co/api/v2/${query}`);
    const type: any = await data.json();
    const pokemon = type.pokemon[id].pokemon;
    
    return await this.getPokemon(pokemon.url);
  }
  async getPokemon(query: number | string): Promise<IPokemon> {
    const url = (typeof query === "number") ?`https://pokeapi.co/api/v2/pokemon/${query}` : query; 
    const data: Response = await fetch(url);
    const pokemon: any = await data.json();
    const pokemonType: IPokemonType[] = [];
    pokemon.types.map((poke: any) => {
      pokemonType.push({
        name: capitalizeLetter(poke.type.name),
        color: colorFromType(poke.type.name),
      });
    });

    const transformedPokemon: IPokemon = {
      index: pokemon.id,
      name: capitalizeLetter(pokemon.name),
      color: pokemonType[0].color,
      image: `${pokemon.sprites.other["official-artwork"].front_default}`,
      types: pokemonType,
    };

    return transformedPokemon;
  }

  render(): React.ReactNode {
    return (
      <>
        <div className="Container">
          <Filter onChange={(type: string | null) => this.getByType(type)} />
        </div>
        <div className="Container">
          <PokedexGrid>{this.state.cards}</PokedexGrid>;
        </div>
      </>
    );
  }
}

function colorFromType(type: string): string {
  return typesColor[type];
}
