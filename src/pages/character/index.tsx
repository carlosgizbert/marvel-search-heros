import { useEffect, useState } from "react";
import { Box } from "@/ui/components/atoms/box";
import { Header } from "./header";
import { useParams } from "react-router-dom";
import { useGetCharacter, useGetComics } from "@/services/characters";
import { Typography } from "@/ui/components/atoms/typography";
import { Character as CharacterDTO } from "@/services/characters/dto/characters";
import { Comic } from "@/services/characters/dto/comics";
import { ComicsList } from "@/ui/components/molecules/comics-list";

import * as S from "./styles";

export function Character() {
  const [character, setCharacter] = useState<CharacterDTO>();
  const [comics, setComics] = useState<Comic[]>([]);
  // const [searchTerm, setSearchTerm] = useState<string>("");

  const { id } = useParams();

  const { data: characterData, isLoading: characterIsLoading } =
    useGetCharacter({
      id,
    });

  const { data: comicsData, isLoading: comicsIsLoading } = useGetComics({
    characterId: id,
  });

  useEffect(() => {
    if (characterData) {
      const responseData = characterData?.data.results[0];
      setCharacter(responseData);
    }
  }, [characterData]);

  useEffect(() => {
    if (comicsData) {
      const responseData = comicsData?.data.results;
      setComics(responseData);
    }
  }, [comicsData]);

  return (
    <Box
      $justify="center"
      $align="center"
      $gap={2}
      $marginBottom={5}
      $maxWidth="998px"
    >
      <Header />
      <S.Hero>
        <S.HeroStartContentContainer>
          <div>
            <Box $direction="row" $align="center" $justify="space-between">
              <Typography $size={24} $weight={700}>
                {character?.name}
              </Typography>
              <div>coração</div>
            </Box>
          </div>
          <Typography $lineHeight={1.75} color="text20">
            {character?.description}
          </Typography>
          <Box $direction="row">
            <Box>
              <Typography color="text20">Quadrinhos</Typography>
              <Typography $weight={600}>3.000</Typography>
            </Box>
            <Box>
              <Typography color="text20">Filmes</Typography>
              <Typography $weight={600}>40</Typography>
            </Box>
          </Box>
          <Box $direction="row" $align="center">
            <Typography color="text20">Rating:</Typography> X X X X X
          </Box>
          <Box $direction="row" $align="center">
            <Typography color="text20">Último quadrinho:</Typography> 13 fev
            2000
          </Box>
        </S.HeroStartContentContainer>
        <S.Image
          src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
        />
      </S.Hero>
      <Box>
        <Typography $weight={600} $size={24}>Últimos lançamentos</Typography>
        <ComicsList data={comics} isLoading={comicsIsLoading} />
      </Box>
    </Box>
  );
}
