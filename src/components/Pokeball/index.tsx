import React from "react";
import { PokeballImage } from "./style";

interface IProps {
  minimized?: boolean;
  onClick: Function;
}
interface IState {
  minimized: boolean;
}
export default class Pokeball extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      minimized: props.minimized || false,
    };
  }
  render(): React.ReactNode {
    return (
      <PokeballImage
        minimized={this.state.minimized}
        onClick={() => {
          this.setState({ minimized: true });
          this.props.onClick();
        }}
      />
    );
  }
}
