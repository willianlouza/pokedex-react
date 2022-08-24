import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 100%;
  justify-content: center;
  box-sizing: border-box;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-self: center;
  justify-content: center;
`;

export const Line = styled.div`
  background-color: #0004;
  margin: 0 10px;
  height: 1px;
  width: 40%;
`;
