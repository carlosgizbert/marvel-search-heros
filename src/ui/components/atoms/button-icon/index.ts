import styled from "styled-components";

export const ButtonIcon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: ${({ theme }) => theme.rounded.medium};
  padding: ${({ theme }) => theme.spacing.small};
  border: none;

  transition: background-color ease 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray10};
    cursor: pointer;
  }
`;
