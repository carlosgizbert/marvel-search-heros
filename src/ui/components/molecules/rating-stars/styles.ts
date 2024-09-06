import { Colors } from "@/ui/styles/tokens";
import { getColorValue } from "@/ui/utils";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
`;

export const Star = styled.button<{
  color: keyof Colors;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  color: ${({ theme, color }) => getColorValue(theme, color)};
  font-size: ${({ theme }) => theme.fontSize.title.medium};
  padding-bottom: 8px;

  cursor: pointer;
`;
