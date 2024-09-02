import styled from 'styled-components'

export const Hero = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 6rem;
  width: 100%;
`

export const HeroStartContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const Image = styled.span<{
  src: string;
}>`
  height: 60dvh;
  width: 100%;
  background-image: ${({ src }) => `url('${src}')`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => `${theme.rounded.small} ${theme.rounded.small} 0 0`};
`;