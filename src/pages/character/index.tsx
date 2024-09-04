import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { useGetCharacter, useGetComics } from "@/services/characters/hooks";
import { Character as CharacterDTO } from "@/services/characters/dto/characters";

import { Box } from "@/ui/components/atoms/box";
import { Comic } from "@/services/characters/dto/comics";
import { ComicsList } from "@/ui/components/molecules/comics-list";
import { HearthFilledIcon, HearthIcon } from "@/ui/components/atoms/icons";
import { Skeleton } from "@/ui/components/atoms/skeleton";
import { Typography } from "@/ui/components/atoms/typography";
import { HeroSkeletons } from "./hero-skeletons";
import { Navbar } from "./navbar";

import { formatDate } from "@/ui/utils";
import {
  getFavoritesIds,
  handleFavoritesIds,
  setFavoritesIds,
  MAX_ALLOWED_FAVORITES,
} from "@/ui/utils/favorites";

import * as S from "./styles";
import { ButtonIcon } from "@/ui/components/atoms/button-icon";

export function Character() {
  const [character, setCharacter] = useState<CharacterDTO>();
  const [comics, setComics] = useState<Comic[]>([]);
  const [lastComicDate, setLastComicDate] = useState<string>("N/D");

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

  const hasComics = useMemo(() => comics.length > 1, [comics]);
  const comicsQuantity = useMemo(() => comics.length, [comics]);
  const moviesQuantity = useMemo(
    () => character?.series.items.length,
    [character]
  );
  const description = useMemo(() => {
    return character?.description
      ? character.description
      : "Esse herói não possui descrição.";
  }, [character]);

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const favorites = getFavoritesIds();
    setLiked(favorites.includes(Number(id)));
  }, [id]);

  const handleFavorite = (heroId: number) => {
    const favorites = getFavoritesIds();
    const updatedFavorites = handleFavoritesIds(favorites, heroId);

    if (updatedFavorites.length > MAX_ALLOWED_FAVORITES) {
      return window.alert(
        `Você possui ${MAX_ALLOWED_FAVORITES} heróis favoritados, não é possível favoritar mais heróis.`
      );
    }

    if (updatedFavorites) {
      setFavoritesIds(updatedFavorites);
    }

    setLiked(!liked);
  };

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

      const lastComicDate = comics[0]?.dates[0].date;
      if (lastComicDate !== undefined) {
        setLastComicDate(formatDate(lastComicDate));
      }
    }
  }, [comics, comicsData]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

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
      {!characterIsLoading && character && (
        <S.Hero>
          <S.HeroStartContentContainer>
            <div>
              <Box $direction="row" $align="center" $justify="space-between">
                <Typography $size={24} $weight={700}>
                  {character.name}
                </Typography>
                <ButtonIcon onClick={() => handleFavorite(character.id)}>
                  {liked ? (
                    <HearthFilledIcon color="#ED1D24" />
                  ) : (
                    <HearthIcon color="#ED1D24" />
                  )}
                </ButtonIcon>
              </Box>
            </div>
            <Typography $lineHeight={1.75} color="text20">
              {description}
            </Typography>
            <Box $direction="row">
              <Box $borderColor="gray10" $paddingX={0.5} $paddingY={0.5}>
                <Typography color="text20">Quadrinhos</Typography>
                {comicsIsLoading && <Skeleton width="100%" height={24} />}
                {!comicsIsLoading && (
                  <Typography $weight={600}>{comicsQuantity}</Typography>
                )}
              </Box>
              <Box $borderColor="gray10" $paddingX={0.5} $paddingY={0.5}>
                <Typography color="text20">Filmes</Typography>
                <Typography $weight={600}>{moviesQuantity}</Typography>
              </Box>
            </Box>
            <Box
              $gap={0.5}
              $borderColor="gray10"
              $paddingX={0.5}
              $paddingY={0.5}
            >
              <Box $direction="row" $align="center">
                <Typography color="text20">Rating:</Typography> X X X X X
              </Box>
              <Box $direction="row" $align="center">
                <Typography color="text20">Último quadrinho:</Typography>
                {comicsIsLoading && <Skeleton width="100%" height={24} />}
                {!comicsIsLoading && (
                  <Typography $weight={600}>{lastComicDate}</Typography>
                )}
              </Box>
            </Box>
          </S.HeroStartContentContainer>
          <S.Image
            src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
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
