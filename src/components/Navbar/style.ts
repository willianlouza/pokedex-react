import styled, {keyframes} from "styled-components";

interface INavProps {
  collapsed: boolean;
}

const fadeIn = keyframes`
from{
  opacity: 0;
}
to{
  opacity: 1;
}
`;

export const Nav = styled.div<INavProps>`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  background-color: #fc1414;
  transition: all ease-in-out 0.2s;
  z-index: 99;
  ${(props: INavProps) => {
    if (props.collapsed) {
      return `
      height: 50px;
      box-shadow: inset 0 -10px #303031`;
    } else {
      return `
      height: 100vh;
      `;
    }
  }}
`;

export const SearchBar = styled.input`
  margin-top: 5px;
  padding: 10px;
  width: 60vw;
  height: 30px;
  border-radius: 4px;
  border:none;
  background-color: #FFF5;
  animation: ${fadeIn} .2s linear;
`;
