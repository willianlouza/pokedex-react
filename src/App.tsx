import React, { ReactElement } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";

interface IProps {}
interface IState {
  expanded: boolean;
}

class App extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      // expanded: false,
      expanded: true,
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar
          expanded={true}
          onExpanded={() => {
            this.setState({ expanded: true });
          }}
        />
        <Pokedex />
      </div>
    );
  }
}
export default App;
