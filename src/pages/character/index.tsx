import { useEffect, useState } from "react";
import { Box } from "@/ui/components/atoms/box";
import { Navbar } from "./navbar";
import { useParams } from "react-router-dom";
import { useGetCharacter, useGetComics } from "@/services/characters/hooks";
import { Typography } from "@/ui/components/atoms/typography";
import { Character as CharacterDTO } from "@/services/characters/dto/characters";
import { Comic } from "@/services/characters/dto/comics";
import { ComicsList } from "@/ui/components/molecules/comics-list";
import { Skeleton } from "@/ui/components/atoms/skeleton";

import { HeroSkeletons } from "./hero-skeletons";
import { HearthFilledIcon } from "@/ui/components/atoms/icons";

import * as S from "./styles";
import { formatDate } from "@/ui/utils";

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
    orderBy: "onsaleDate",
    limit: 10,
  });

  const hasComics = comics.length > 1;
  const comicsQuantity = comics.length;
  const moviesQuantity = character?.series.items.length;
  const lastComicReleaseDate = formatDate(comics[0]?.dates[0].date);

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
  }, [comics, comicsData]);

  return (
    <Box
      $justify="center"
      $align="center"
      $gap={2}
      $marginBottom={5}
      $maxWidth="998px"
    >
      <Navbar />
      {characterIsLoading && <HeroSkeletons />}
      {!characterIsLoading && (
        <S.Hero>
          <S.HeroStartContentContainer>
            <div>
              <Box $direction="row" $align="center" $justify="space-between">
                <Typography $size={24} $weight={700}>
                  {character?.name}
                </Typography>
                <HearthFilledIcon color="#ED1D24" />
              </Box>
            </div>
            <Typography $lineHeight={1.75} color="text20">
              {character?.description}
            </Typography>
            <Box $direction="row">
              <Box>
                <Typography color="text20">Quadrinhos</Typography>
                {comicsIsLoading && <Skeleton width={200} height={24} />}
                {!comicsIsLoading && (
                  <Typography $weight={600}>{comicsQuantity}</Typography>
                )}
              </Box>
              <Box>
                <Typography color="text20">Filmes</Typography>
                <Typography $weight={600}>{moviesQuantity}</Typography>
              </Box>
            </Box>
            <Box $direction="row" $align="center">
              <Typography color="text20">Rating:</Typography> X X X X X
            </Box>
            <Box $direction="row" $align="center">
              <Typography color="text20">Último quadrinho:</Typography>
              {comicsIsLoading && <Skeleton width={180} height={24} />}
              {!comicsIsLoading && !!comics[0] && (
                <Typography $weight={600}>{lastComicReleaseDate}</Typography>
              )}
            </Box>
          </S.HeroStartContentContainer>
          <S.Image
            src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
          />
        </S.Hero>
      )}
      <Box $marginY={1}>
        {comicsIsLoading && <Skeleton width={200} height={24} />}
        {!comicsIsLoading && hasComics && (
          <Typography $weight={600} $size={18}>
            Últimos {comics.length} lançamentos
          </Typography>
        )}
        <ComicsList data={comics} isLoading={comicsIsLoading} />
      </Box>
    </Box>
  );
}
