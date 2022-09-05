import styled from "styled-components";

interface IProps {
  color: string;
  content: string;
  width: number;
  height: number;
}
export const StyledTag = styled.div<IProps>`
  background-color: ${(props: IProps) => props.color};
  width: ${(props: IProps) => props.width}px;
  height: ${(props: IProps) => props.height}px;
  border-radius: 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  font-size: 0.8em;
  color: #ffff;
  font-weight: 700;

  ::after {
    display: block;
    content: "${(props: IProps) => props.content}";
  }
`;
