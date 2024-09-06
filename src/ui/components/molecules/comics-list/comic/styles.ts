import styled from "styled-components";

export const Image = styled.span<{
  src: string;
  height?: number;
  width?: string;
}>`
  height: ${({ height = 120 }) => `${height}px`};
  width: ${({ width = "100%" }) => width};
  background-image: ${({ src }) => `url('${src}')`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: ${({ theme }) => theme.rounded.small};

  transition: box-shadow ease 0.4s;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadowLevel.small};
  }
`;

export const ComicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: auto;

  cursor: pointer;
`;

export const Comic = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
`;
