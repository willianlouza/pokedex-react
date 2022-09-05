import React from "react";
import icon from "../../assets/pokeball-black.png";
import { Row, Line } from "./style";

export default class Divider extends React.Component {
  render(): React.ReactNode {
    return (
      <Row>
        <Line />
        <img src={icon} width={30} height={30} style={{ opacity: 0.8 }} />
        <Line />
      </Row>
    );
  }
}
