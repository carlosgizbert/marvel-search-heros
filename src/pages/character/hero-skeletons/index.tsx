import { Box } from "@/ui/components/atoms/box";
import { Skeleton } from "@/ui/components/atoms/skeleton";

import * as S from "./styles";

export function HeroSkeletons() {
  return (
    <S.Hero>
      <S.HeroStartContentContainer>
        <div>
          <Box $direction="row" $align="center" $justify="space-between">
            <Skeleton width={300} height={40} />
            <Skeleton width={40} height={40} />
          </Box>
        </div>
        <Box $gap={0.25}>
          <Skeleton width={280} height={24} />
          <Skeleton width={260} height={24} />
          <Skeleton width={240} height={24} />
        </Box>
        <Box $direction="row">
          <Box>
            <Skeleton width="100%" height={60} />
          </Box>
          <Box>
            <Skeleton width="100%" height={60} />
          </Box>
        </Box>
        <Box $gap={1}>
          <Box $direction="row" $align="center">
            <Skeleton width={200} height={24} />
          </Box>
          <Box $direction="row" $align="center">
            <Skeleton width={200} height={24} />
          </Box>
        </Box>
      </S.HeroStartContentContainer>
      <Skeleton width="100%" height="100%" />
    </S.Hero>
  );
}
