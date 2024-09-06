import styled from "styled-components";

export const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 10;
`;
