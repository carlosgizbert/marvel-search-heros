import { DefaultTheme } from "styled-components";
import { Colors } from "../styles/tokens";

export const getColorValue = (theme: DefaultTheme, color: string) => {
  const colorKey = (c: string) => c as keyof Colors;
  return theme.colors[colorKey(color)] || color;
};

export const hexToRgba = (hex: string, opacity = 1) => {
  const bigint = parseInt(hex.slice(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;

  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};