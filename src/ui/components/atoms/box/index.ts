import { Colors } from "@/ui/styles/tokens";
import { getColorValue } from "@/ui/utils";
import styled from "styled-components";

export const Box = styled.div<{
  $marginY?: number;
  $marginX?: number;
  $paddingY?: number;
  $paddingX?: number;
  $gap?: number;
  $borderColor?: keyof Colors
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
  padding: ${({ $paddingY = 0, $paddingX = 0 }) => `${$paddingY}rem ${$paddingX}rem`};
  margin-bottom: ${({ $marginBottom = 0 }) => `${$marginBottom}rem`};
  gap: ${({ $gap = 1 }) => `${$gap}rem`};
  border: 1px solid ${({ theme, $borderColor = "transparent" }) => getColorValue(theme, $borderColor)}
`;
