import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;

  @media screen and (max-width: 720px){
    flex-direction: column;
    gap: 1rem;
  }
`

export const EndContent = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: end;
  flex-wrap: nowrap;
  gap: 1rem;

  @media screen and (max-width: 720px){
    justify-content: start;
  }
`

export const ButtonFavorite = styled.button`
  background-color: transparent;
  border-radius: ${({ theme }) => theme.rounded.medium};
  padding: ${({ theme }) => theme.spacing.small};
  border: none;

  transition: background-color ease 0.4s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray10};
    cursor: pointer;
  }
`