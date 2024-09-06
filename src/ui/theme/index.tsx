import { ReactNode } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';
import { primary } from '@/ui/styles/themes';

function ThemeProvider({ children }: Readonly<{ children: ReactNode }>) {
	return <StyledProvider theme={primary}>{children}</StyledProvider>;
}

export { ThemeProvider };
