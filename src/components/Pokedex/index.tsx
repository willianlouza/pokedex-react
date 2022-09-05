import React from "react";
import {Grid} from './style';

interface IProps{
  children: React.ReactNode;
}
export default class Pokedex extends React.Component<IProps>{
  constructor(props: IProps) {
    super(props);
  }
  render(): React.ReactNode {
      return(
        <Grid>
          {this.props.children}
        </Grid>        
      )
  }
}