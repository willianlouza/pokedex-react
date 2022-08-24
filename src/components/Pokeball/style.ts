import styled from "styled-components";
import pokeImg from "../../assets/Pokeball.png";

interface IProps {
  minimized: boolean;
}
export const PokeballImage = styled.img.attrs<IProps>({
  src: pokeImg,
})`
  z-index: 1;
  position: absolute;
  ${(props: IProps) => {
    if (!props.minimized) {
      return `
      width: 100px;
      height: 100px;
      top: calc(50% - 50px);
      left: calc(50% - 50px);
      `;
    } else {
      return `
      width: 30px;
      height: 30px;
      top: 5px;
      left: 15px;
      transform: rotateZ(30deg);
        `;
    }
  }}
  cursor: pointer;
  transition: all ease-in-out 0.2s;

  :hover {
    transform: rotateZ(30deg);
  }
`;
