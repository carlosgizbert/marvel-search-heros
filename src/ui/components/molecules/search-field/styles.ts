import { Colors } from "@/ui/styles/tokens";
import { getColorValue } from "@/ui/utils";
import styled from "styled-components";

export const Wrapper = styled.div<{
  $backgroundColor: keyof Colors;
  $placeholderColor: keyof Colors;
}>`
  display: flex;
  height: 100%;
  width: 100%;
  gap: 0.5rem;
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ theme }) => theme.rounded.full};
  height: 48px;
  background-color: ${({ theme, $backgroundColor }) =>
    getColorValue(theme, $backgroundColor)};
  padding-left: 16px;

  ::placeholder {
    color: ${({ theme, $placeholderColor }) =>
      getColorValue(theme, $placeholderColor)};
  }

  outline: 2px solid ${({ theme }) => theme.colors.primary20};
  transition: all ease 0.2s;

  &:hover {
    outline: 2px solid ${({ theme }) => theme.colors.primary10};
    background-color: ${({ theme }) => theme.colors.primary20};
  }
`;

export const Input = styled.input<{
  $textColor: keyof Colors;
}>`
  height: 100%;
  width: 100%;
  background-color: transparent;
  padding: 12px 1rem 12px 0;
  border: none;
  color: ${({ theme, $textColor }) => getColorValue(theme, $textColor)};
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
  font-size: ${({ theme }) => theme.fontSize.body.small};
`;
