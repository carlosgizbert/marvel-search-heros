import { Box } from "@/ui/components/atoms/box";
import { Typography } from "@/ui/components/atoms/typography";
import { Comic as ComicDTO } from "@/services/characters/dto/comics";

import * as S from "./styles";

interface ComicProps {
  data: ComicDTO;
}

export function Comic({ data }: Readonly<ComicProps>) {
  const { title, thumbnail } = data;

  return (
    <S.ComicWrapper onClick={() => window.alert("Em breve (:")}>
      <S.Comic>
        <S.Image
          height={240}
          src={`${thumbnail.path}.${thumbnail.extension}`}
        />
      </S.Comic>
      <Box $direction="row" $justify="space-between" $align="center">
        <Typography $weight={600} $size={14} className="two-line-text">
          {title}
        </Typography>
      </Box>
    </S.ComicWrapper>
  );
}
