import { useTheme } from "styled-components";
import SkeletonCore, {
  SkeletonProps as SkeletonCoreProps,
} from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import * as S from "./styles";

export interface SkeletonProps extends SkeletonCoreProps {
  dataTestId?: string;
}

export function Skeleton({ dataTestId, ...props }: Readonly<SkeletonProps>) {
  const { colors } = useTheme();

  return (
    <S.Wrapper data-testid={dataTestId}>
      <SkeletonCore
        baseColor={colors.gray10}
        highlightColor={colors.gray20}
        {...props}
      />
    </S.Wrapper>
  );
}
