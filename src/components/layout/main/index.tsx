import React from "react";
import Navbar from "../navbar";

interface IProps {
  children?: React.ReactNode;
  pokemonType?: string;
}
export default function MainLayout(props: IProps) {
  const { children, pokemonType = "none" } = props;

  return (
    <>
      <Navbar pokemonType={pokemonType.toLowerCase()} />
      <div>{children}</div>
    </>
  );
}
