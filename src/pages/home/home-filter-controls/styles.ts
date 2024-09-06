import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 720px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const EndContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  flex-wrap: nowrap;
  gap: 1rem;

  @media screen and (max-width: 720px) {
    justify-content: start;
  }
`;
