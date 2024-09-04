import { useState, useEffect, MouseEvent } from "react";
import { Box } from "@/ui/components/atoms/box";
import { Character as CharacterDTO } from "@/services/characters/dto/characters";
import { HearthFilledIcon, HearthIcon } from "@/ui/components/atoms/icons";
import { Typography } from "@/ui/components/atoms/typography";
import {
  getFavoritesIds,
  handleFavoritesIds,
  MAX_ALLOWED_FAVORITES,
  setFavoritesIds,
} from "@/ui/utils/favorites";

import * as S from "./styles";
import { ButtonIcon } from "@/ui/components/atoms/button-icon";

interface CharacterProps {
  data: CharacterDTO;
}

export function Character({ data }: Readonly<CharacterProps>) {
  const { id, name, thumbnail } = data;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const favorites = getFavoritesIds();
    setLiked(favorites.includes(id));
  }, [id]);

  const handleFavorite = (
    e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>,
    heroId: number
  ) => {
    e.preventDefault();

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

  return (
    <S.CharacterWrapper>
      <S.Character>
        <S.Image
          height={240}
          src={`${thumbnail.path}.${thumbnail.extension}`}
        />
      </S.Character>
      <Box $direction="row" $justify="space-between" $align="center">
        <Typography $weight={600} className="one-line-text">
          {name}
        </Typography>
        <div>
          <ButtonIcon onClick={(e) => handleFavorite(e, id)}>
            {liked ? (
              <HearthFilledIcon color="#ED1D24" />
            ) : (
              <HearthIcon color="#ED1D24" />
            )}
          </ButtonIcon>
        </div>
      </Box>
    </S.CharacterWrapper>
  );
}
