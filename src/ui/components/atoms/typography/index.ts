import { Colors } from "@/ui/styles/tokens";
import { getColorValue } from "@/ui/utils";
import styled from "styled-components";

export interface TypographyProps {
  $weight?: 400 | 600 | 700 | 800;
  color?: keyof Colors;
  size?: number;
  opacity?: number;
}

export const Typography = styled.span<TypographyProps>`
  font-weight: ${({ $weight }) => $weight ?? "400"};
  color: ${({ color = 'text10', theme }) => getColorValue(theme, color) ?? theme.colors.text10};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  opacity: ${({ opacity }) => opacity ?? 1};
`;
