import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
`