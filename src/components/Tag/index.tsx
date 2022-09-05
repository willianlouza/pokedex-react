import React from "react";
import { StyledTag } from "./style";

interface IProps {
  color: string;
  content: string;
  width: number;
  height: number;
  pointer?: boolean;
  onClick?: () => void;
}
export default class Tag extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <StyledTag
        color={this.props.color}
        content={this.props.content}
        width={this.props.width}
        height={this.props.height}
        onClick={() => this.props.onClick?.()}
      />
    );
  }
}
