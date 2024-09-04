import { useState, useEffect, MouseEvent } from "react";
import { Box } from "@/ui/components/atoms/box";
import { Character as CharacterDTO } from "@/services/characters/dto/characters";
import { HearthFilledIcon, HearthIcon } from "@/ui/components/atoms/icons";
import { Typography } from "@/ui/components/atoms/typography";
import { getFavoritesIds, handleFavoritesIds, setFavoritesIds } from "@/ui/utils/favorites";

import * as S from "./styles";

interface CharacterProps {
  data: CharacterDTO;
}

const MAX_ALLOWED_FAVORITES = 5;

export function Character({ data }: Readonly<CharacterProps>) {
  const { id, name, thumbnail } = data;
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const favorites = getFavoritesIds();
    setLiked(favorites.includes(id));
  }, [id]);

  const handleFavorite = (e: MouseEvent<SVGSVGElement>, heroId: number) => {
    e.preventDefault();

    const favorites = getFavoritesIds();
    const updatedFavorites = handleFavoritesIds(favorites, heroId);

    if (updatedFavorites.length > MAX_ALLOWED_FAVORITES) {
      return window.alert(
        `Não é possível ter mais que ${MAX_ALLOWED_FAVORITES} favoritos`
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
          <S.ButtonFavorite>
            {liked ? (
              <HearthFilledIcon
                color="#ED1D24"
                onClick={(e) => handleFavorite(e, id)}
              />
            ) : (
              <HearthIcon
                color="#ED1D24"
                onClick={(e) => handleFavorite(e, id)}
              />
            )}
          </S.ButtonFavorite>
        </div>
      </Box>
    </S.CharacterWrapper>
  );
}
