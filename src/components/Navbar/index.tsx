import React from "react";
import { Nav, SearchBar } from "./style";
import Pokeball from "../Pokeball";

interface IProps {
  expanded?: boolean;
  onExpanded: Function;
}
interface IState {
  expanded: boolean;
}
export default class Navbar extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      expanded: props.expanded || false,
    };
  }

  openNavbar() {
    this.setState({ expanded: true });
    this.props.onExpanded();
  }

  render() {
    return (
      <Nav collapsed={this.state.expanded}>
        {this.state.expanded && (
          <SearchBar type="search" placeholder="Search for a pokemon..." />
        )}
        <Pokeball minimized={this.state.expanded} onClick={() => this.openNavbar()} />
      </Nav>
    );
  }
}
