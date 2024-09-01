import styled from "styled-components";

export const Box = styled.div<{
  $marginY?: number;
  $marginX?: number;
  $gap?: number;
  $align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  $direction?: "row" | "row-reverse" | "column" | "column-reverse";
  $justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial";
}>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: ${({ $direction = "column" }) => $direction};
  justify-content: ${({ $justify = "initial" }) => $justify};
  align-items: ${({ $align = "flex-start" }) => $align};
  margin: ${({ $marginY = 0, $marginX = 0 }) => `${$marginY}px ${$marginX}px`};
  gap: ${({ $gap = 1 }) => `${$gap}rem`};
`;
