import { Box } from "@/ui/components/atoms/box";
import { Character as CharacterDTO } from "@/services/characters/dto";
import { HearthFilledIcon, HearthIcon } from "@/ui/components/atoms/icons";
import { Typography } from "@/ui/components/atoms/typography";

import * as S from "./styles";

interface CharacterProps {
  data: CharacterDTO;
}

export function Character({ data }: Readonly<CharacterProps>) {
  const { name, thumbnail } = data;

  const liked = false

  return (
    <S.CharacterWrapper>
      <S.Character>
        <S.Image
          height={240}
          src={`${thumbnail.path}.${thumbnail.extension}`}
        />
      </S.Character>
      <Box $direction="row" $justify="space-between" $align="center">
        <Typography $weight={600}>{name}</Typography>
        {liked ? <HearthFilledIcon color="#ED1D24" /> : <HearthIcon color="#ED1D24" />}
      </Box>
    </S.CharacterWrapper>
  );
}
