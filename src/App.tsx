import React from "react";
import "./App.css";
import Pokedex from "./components/Pokedex";
import { loadPokemons, getPokemonById } from "../scripts/Pokeapi";
import PokemonCard from "./components/PokemonCard";
import logo from "./assets/pokemon-logo.png";

interface IProps {}
interface IState {
  cards: React.ReactNode[];
}

class App extends React.Component<IProps, IState> {
  private offset: number = 0;
  constructor(props: IProps) {
    super(props);
    this.state = {
      cards: [],
    };
    this.init = this.init.bind(this);
    this.loadPokemons = this.loadPokemons.bind(this);
  }
  async componentDidMount() {
    await this.init();
  }

  async init() {
    let pokemons = await loadPokemons(0);
    let cards: React.ReactNode[] = [];
    for (let i = 0; i < pokemons.length; i++) {
      cards.push(<PokemonCard key={i} pokemon={pokemons[i]} />);
    }
    this.offset = 20;
    this.setState({ cards: cards });
  }

  loadPokemons() {
    loadPokemons(this.offset).then((pokemons) => {
      let cards: React.ReactNode[] = [];
      for (let i = 0; i < pokemons.length; i++) {
        cards.push(<PokemonCard key={this.offset} pokemon={pokemons[i]} />);
        this.offset++;
      }
      this.setState({ cards: [...this.state.cards, ...cards] });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="TopBar" />
        <div className="Container Header">
          <img src={logo} />
        </div>
        <div className="GridArea">
          <Pokedex>{this.state.cards}</Pokedex>
        </div>
        {this.state.cards.length > 0 && (
          <button className="LoadBtn" onClick={this.loadPokemons}>
            Carregar Mais
          </button>
        )}
      </div>
    );
  }
}
export default App;
