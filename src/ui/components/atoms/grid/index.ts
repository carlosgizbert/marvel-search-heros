import styled from 'styled-components';

export const Grid = styled.div<{
	columns?: number;
	gap?: number;
	align?: 'start' | 'end' | 'center' | 'stretch';
	justify?:
		| 'start'
		| 'end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly';
	marginY?: number;
	marginX?: number;
}>`
	display: grid;
	grid-template-columns: repeat(${({ columns = 1 }) => columns}, 1fr);
	gap: ${({ gap = 0 }) => `${gap}rem`};
	align-items: ${({ align = 'stretch' }) => align};
	justify-content: ${({ justify = 'start' }) => justify};
	margin: ${({ marginY = 0, marginX = 0 }) => `${marginY}px ${marginX}px`};
`;
