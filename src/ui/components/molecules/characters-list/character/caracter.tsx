import { Character as CharacterDTO } from "@/services/characters/dto";
import { Box } from "@/ui/components/atoms/box";
import { Typography } from "@/ui/components/atoms/typography";

import * as S from "./styles";

interface CharacterProps {
  data: CharacterDTO;
}

export function Character({ data }: Readonly<CharacterProps>) {
  const { name, thumbnail } = data;

  return (
    <S.CharacterWrapper>
      <S.Character>
        <S.Image
          height={180}
          src={`${thumbnail.path}.${thumbnail.extension}`}
        />
      </S.Character>
      <Box $direction="row" $justify="space-between">
        <Typography $weight={600}>{name}</Typography>
        <div>Like</div>
      </Box>
    </S.CharacterWrapper>
  );
}
