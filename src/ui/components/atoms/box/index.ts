import styled from "styled-components";

export const Box = styled.div<{
  $marginY?: number;
  $marginX?: number;
  $gap?: number;
  $marginBottom?: number;
  $maxWidth?: string;
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
  max-width: ${({ $maxWidth = '100%' }) => $maxWidth};
  height: auto;
  display: flex;
  flex-direction: ${({ $direction = "column" }) => $direction};
  justify-content: ${({ $justify = "initial" }) => $justify};
  align-items: ${({ $align = "flex-start" }) => $align};
  margin: ${({ $marginY = 0, $marginX = 0 }) => `${$marginY}rem ${$marginX}rem`};
  margin-bottom: ${({ $marginBottom = 0 }) => `${$marginBottom}rem`};
  gap: ${({ $gap = 1 }) => `${$gap}rem`};
`;
