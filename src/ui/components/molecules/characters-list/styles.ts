import styled from 'styled-components';

export const List = styled.div`
	width: 100%;
	display: grid;
	justify-content: center;
	align-items: center;
	gap: 2rem;
	grid-template-columns: repeat(4, 1fr);

	@media screen and (max-width: 720px) {
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
`;
