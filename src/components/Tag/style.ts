import styled from "styled-components";

interface IProps {
  width: number;
  height: number;
}
export const StyledTag = styled.div<IProps>`
  width: ${(props: IProps) => props.width}px;
  height: ${(props: IProps) => props.height}px;
  margin-right: 6px;
`;
