import styled from "styled-components";

export interface TypographyProps {
  weight?: "400" | "600" | "700" | "800";
  color?: string;
  size?: number;
  opacity?: number;
}

export const Typography = styled.span<TypographyProps>`
  font-weight: ${({ weight }) => weight ?? "400"};
  color: ${({ color, theme }) => color ?? theme.colors.text10};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  opacity: ${({ opacity }) => opacity ?? 1};
`;
