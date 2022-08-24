import React from "react";
import { Tag } from "./style";

interface IProps {
  color: string;
  content: string;
  width: number;
  height: number;
  pointer?: boolean;
  onClick?: () => void;
}
export default class TypeTag extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Tag
        color={this.props.color}
        content={this.props.content}
        width={this.props.width}
        height={this.props.height}
        pointer={this.props.pointer}
        onClick={() => this.props.onClick?.()}
      />
    );
  }
}
