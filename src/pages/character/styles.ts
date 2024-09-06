import styled from 'styled-components';

export const Hero = styled.div`
	display: grid;
	grid-template-columns: 30% 1fr;
	align-items: center;
	gap: 2rem;
	width: 100%;

	@media screen and (max-width: 1200px) {
		display: flex;
		flex-direction: column;
		gap: 1rem;
	}
`;

export const HeroStartContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2rem;
	width: 100%;

	@media screen and (max-width: 720px) {
		gap: 1rem;
	}
`;

export const Image = styled.span<{
	src: string;
}>`
	height: 60dvh;
	width: 100%;
	background-image: ${({ src }) => `url('${src}')`};
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	border-radius: ${({ theme }) => theme.rounded.small};
`;
