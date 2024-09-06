import { useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";

import { useGetCharacter, useGetComics } from "@/services/characters/hooks";
import { Character as CharacterDTO } from "@/services/characters/dto/characters";

import { Box } from "@/ui/components/atoms/box";
import { Comic } from "@/services/characters/dto/comics";
import { ComicsList } from "@/ui/components/molecules/comics-list";
import { ComicIcon, HearthFilledIcon, HearthIcon, TrailerIcon } from "@/ui/components/atoms/icons";
import { Skeleton } from "@/ui/components/atoms/skeleton";
import { Typography } from "@/ui/components/atoms/typography";
import { HeroSkeletons } from "./character-hero-skeletons";
import { Navbar } from "./character-navbar";

import { formatDate } from "@/ui/utils";
import {
  getFavoritesIds,
  handleFavoritesIds,
  setFavoritesIds,
  MAX_ALLOWED_FAVORITES,
} from "@/ui/utils/favorites";

import { ButtonIcon } from "@/ui/components/atoms/button-icon";
import { RatingStars } from "@/ui/components/molecules/rating-stars";

import { getRatings, handleRatings, setRatings } from "@/ui/utils/ratings";

import * as S from "./styles";

export function Character() {
  const [character, setCharacter] = useState<CharacterDTO>();
  const [comics, setComics] = useState<Comic[]>([]);
  const [lastComicDate, setLastComicDate] = useState<string>("N/D");
  const [liked, setLiked] = useState<boolean>(false);
  const [rating, setRating] = useState<number>(0);

  const { id } = useParams();

  const { data: characterData, isLoading: characterIsLoading } =
    useGetCharacter({
      id,
    });

  const { data: comicsData, isLoading: comicsIsLoading } = useGetComics({
    characterId: id,
    orderBy: "-onsaleDate",
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

  useEffect(() => {
    const favorites = getFavoritesIds();
    setLiked(favorites.includes(Number(id)));
  }, [id]);

  useEffect(() => {
    if (character) {
      const ratings = getRatings();
      if (ratings) {
        const characterRating = ratings.find(
          (rating) => rating.id === character?.id
        );
        if (characterRating) {
          setRating(characterRating.rating);
        }
      }
    }
  }, [character]);

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

  const handleRating = (rating: number) => {
    const ratings = getRatings();
    const updatedRatings = handleRatings(ratings, {
      id: Number(character?.id),
      rating,
    });
    if (updatedRatings) {
      setRatings(updatedRatings);
      setRating(rating);
    }
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
                <Typography id="character-name" $size={24} $weight={700} $lineHeight={2.25}>
                  {character.name}
                </Typography>
                <ButtonIcon id="character-like-button" onClick={() => handleFavorite(character.id)}>
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
              <Box $paddingX={0.5} $paddingY={0.5}>
                <Typography color="text20">Quadrinhos</Typography>
                {comicsIsLoading && <Skeleton width="100%" height={24} />}
                {!comicsIsLoading && (
                  <Box $direction="row" $align="center" $gap={1}>
                    <ComicIcon height={32} />
                    <Typography $weight={600}>{comicsQuantity}</Typography>
                  </Box>
                )}
              </Box>
              <Box $paddingX={0.5} $paddingY={0.5}>
                <Typography color="text20">Filmes</Typography>
                <Box $direction="row" $align="center" $gap={1}>
                  <TrailerIcon />
                  <Typography $weight={600}>{moviesQuantity}</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              $gap={0.5}
              $paddingX={0.5}
              $paddingY={0.5}
            >
              <Box $direction="row" $align="center" $gap={0.5}>
                <Typography color="text20">Rating:</Typography>
                <RatingStars id="character-rating-stars" rating={rating} setRating={handleRating} />
              </Box>
              <Box $direction="row" $align="center" $gap={0.5}>
                <Typography color="text20">Último quadrinho:</Typography>
                {comicsIsLoading && <Skeleton width="100%" height={24} />}
                {!comicsIsLoading && (
                  <Typography $weight={600}>{lastComicDate}</Typography>
                )}
              </Box>
            </Box>
          </S.HeroStartContentContainer>
          <S.Image src={`${character.thumbnail.path}.${character.thumbnail.extension}`} />
        </S.Hero>
      )}
      <Box $marginY={1}>
        {comicsIsLoading && <Skeleton width={200} height={24} />}
        {!comicsIsLoading && hasComics && (
          <Typography $weight={600} $size={18}>
            Últimos {comics.length} lançamentos
          </Typography>
        )}
        <ComicsList id="character-comic-list" data={comics} isLoading={comicsIsLoading} />
      </Box>
    </Box>
  );
}
