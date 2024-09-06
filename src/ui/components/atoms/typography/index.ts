import { Colors } from "@/ui/styles/tokens";
import { getColorValue } from "@/ui/utils";
import styled from "styled-components";

export interface TypographyProps {
  $weight?: 400 | 600 | 700 | 800;
  color?: keyof Colors;
  $size?: number;
  $opacity?: number;
  $lineHeight?: number;
  $align?: "start" | "center" | "end";
}

export const Typography = styled.p<TypographyProps>`
  font-weight: ${({ $weight }) => $weight ?? "400"};
  color: ${({ color = "text10", theme }) =>
    getColorValue(theme, color) ?? theme.colors.text10};
  font-size: ${({ $size }) => ($size ? `${$size}px` : "16px")};
  opacity: ${({ $opacity }) => $opacity ?? 1};
  text-align: ${({ $align = "start" }) => $align};
  line-height: ${({ $lineHeight = 1.5 }) => `${$lineHeight}rem`};
`;
