import { DefaultTheme } from 'styled-components';
import { primary } from './themes';

import * as T from './tokens/types';

declare module 'styled-components' {
	export interface DefaultTheme {
		themeKey: string;
		colors: T.Colors;
		margin: T.Margin;
		spacing: T.Spacing;
		rounded: T.Rounded;
		shadowLevel: T.ShadowLevel;
		fontFamily: T.FontFamily;
		fontSize: T.FontSize;
		fontWeight: T.FontWeight;
		gridSpace: T.GridSpace;
	}
}

type ThemesOptions = {
	[key: string]: DefaultTheme;
};

const themes: ThemesOptions = {
	primary,
};

export { themes };
