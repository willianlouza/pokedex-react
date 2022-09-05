import styled from "styled-components";
import PokeballBG from "../../assets/pokeball-white.png";

interface CardProps {
  color: string;
  width: number;
  height: number;
}
export const Card = styled.div<CardProps>`
  position: relative;
  border-radius: 4px;
  background-color: ${(props: CardProps) => props.color};
  width: ${(props: CardProps) => props.width}px;
  height: ${(props: CardProps) => props.height}px;
  box-shadow: inset 0 -50px 2px #0003;
  z-index: 2;
  cursor: pointer;

  transition: all ease-in-out 0.1s;

  :hover {
    transform: scale(1.02);
    filter: brightness(1.1);
  }
`;

export const Mask = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 5px;
  overflow: hidden;
  z-index: 2;
`;

interface ImageProps {
  width: number;
  height: number;
}
export const PokeImage = styled.img.attrs(props =>{
  src: props.src
})<ImageProps>`
  position: absolute;
  width: ${(props: ImageProps) => props.width} px;
  height: ${(props: ImageProps) => props.height}px;
  left: 50%;
  top: -30px;
  filter: drop-shadow(2px -2px 2px #0007);
  z-index: 9;
`;

export const BackgroundPokeball = styled.img.attrs({
  src: PokeballBG,
})`
  position: absolute;
  width: 150px;
  height: 150px;
  left: 60%;
  top: 10px;
  z-index: -1;
  opacity: 0.3;
`;
