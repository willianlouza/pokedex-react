import React, { ReactElement } from "react";
import PokebalIcon from "../../assets/pokeball-black.png";
import { typesColor } from "../../interfaces/IPokemon/IPokemon";
import capitalizeLetter from "../../Utils/CapitalizeLetter";
import TypeTag from "../TypeTag";
import { Container, Row, Line, Wrap } from "./style";

interface IProps {
  onChange: Function;
}
interface IState {
  current: string;
}
export default class Filter extends React.Component<IProps, IState> {
  types: ReactElement[] = [];
  constructor(props: IProps) {
    super(props);
    this.state = {
      current: "",
    };
    this.init = this.init.bind(this);
    this.selectType = this.selectType.bind(this);

    this.init();
  }

  init() {
    Object.keys(typesColor).forEach((key, id) => {
      this.types.push(
        <TypeTag
          key={id}
          color={typesColor[key]}
          width={80}
          height={40}
          pointer={true}
          content={capitalizeLetter(key)}
          onClick={() => this.selectType(key)}
        />
      );
    });
  }

  selectType(type: string) {
    if (this.state.current === type) {
      this.setState({ current: "" });
      this.props.onChange(null);
    } else {
      this.setState({ current: type });
      this.props.onChange(type);
    }
  }

  render() {
    return (
      <Container>
        <Wrap>{this.types}</Wrap>
        <Row>
          <Line />
          <Row>
            <img
              src={PokebalIcon}
              width={25}
              style={{ opacity: 0.7, marginBottom: 8 }}
            />
          </Row>
          <Line />
        </Row>
      </Container>
    );
  }
}
