import { Skeleton } from "@/ui/components/atoms/skeleton";

import * as S from "./styles";

export function CharacterSkeleton() {
  return (
    <S.CharacterWrapper>
      <Skeleton height={240} />
      <Skeleton height={24} />
    </S.CharacterWrapper>
  );
}
