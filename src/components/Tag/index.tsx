import React from "react";
import { StyledTag } from "./style";

interface IProps {
  image: string;
  width: number;
  height: number;
  class: string;
}
export default class Tag extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <StyledTag
        className={`icon ${this.props.class}`}
        width={this.props.width}
        height={this.props.height}
      >
        <img src={this.props.image} />
      </StyledTag>
    );
  }
}
