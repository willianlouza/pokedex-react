import React, { ReactElement } from "react";
import IPokemon from "../../interfaces/IPokemon";
import { Card, PokeImage, Mask, BackgroundPokeball } from "./style";
import Tag from "../Tag";

interface IProps {
  pokemon: IPokemon;
}
export default class PokemonCard extends React.Component<IProps> {
  tags: ReactElement[] = [];
  constructor(props: IProps) {
    super(props);
  }
  render(): React.ReactNode {
    if (!this.props.pokemon) return null;

    this.tags = [];
    this.props.pokemon.types.forEach((type, key) => {
      this.tags.push(
        <Tag
          key={key}
          color={type.color}
          width={50}
          height={20}
          content={type.name}
        />
      );
    });
    return (
      <Card color={this.props.pokemon.color} width={320} height={120}>
        <Mask>
          <BackgroundPokeball />
          <h1
            style={{
              margin: 2,
              color: "white",
            }}
          >
            {this.props.pokemon.name}
          </h1>
          <div
            style={{
              display: "flex",
              float: "left",
              width: "10em",
              height: "3em",
              alignItems: "flex-end",
              justifyContent: "flex-start",
            }}
          >
            {this.tags}
          </div>
        </Mask>
        <PokeImage src={this.props.pokemon.image} width={150} height={150} />
      </Card>
    );
  }
}
