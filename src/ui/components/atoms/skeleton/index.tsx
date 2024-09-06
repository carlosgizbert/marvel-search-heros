import SkeletonCore, {
	SkeletonProps as SkeletonCoreProps,
} from 'react-loading-skeleton';
import { useTheme } from 'styled-components';

import 'react-loading-skeleton/dist/skeleton.css';

import * as S from './styles';

export interface SkeletonProps extends SkeletonCoreProps {
	dataTestId?: string;
}

export function Skeleton({ dataTestId, ...props }: Readonly<SkeletonProps>) {
	const { colors } = useTheme();

	return (
		<S.Wrapper data-testid={dataTestId}>
			<SkeletonCore
				className="orange-skeleton"
				baseColor={colors.gray10}
				highlightColor={colors.gray20}
				{...props}
			/>
		</S.Wrapper>
	);
}
