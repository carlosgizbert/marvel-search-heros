import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-width: 90dvw;
  
  @media screen and (max-width: 1200px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`