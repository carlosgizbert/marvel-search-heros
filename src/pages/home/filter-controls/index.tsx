import { OrderBy } from "@/services/characters/dto/characters";
import { Box } from "@/ui/components/atoms/box";
import { HearthFilledIcon, HearthIcon } from "@/ui/components/atoms/icons";
import { Toggle } from "@/ui/components/atoms/toggle";
import { Typography } from "@/ui/components/atoms/typography";
import { ReactNode } from "react";

import * as S from "./styles";

interface FilterControlsProps {
  orderBy: OrderBy;
  toggleOrderBy: () => void;
  onlyLiked: boolean;
  disableToggleButton: boolean;
  counterElement: ReactNode;
}

export function FilterControls({
  toggleOrderBy,
  counterElement,
  onlyLiked,
  disableToggleButton,
}: Readonly<FilterControlsProps>) {
  return (
    <S.Wrapper>
      {counterElement}
      <S.EndContent>
        <div>
          <Box $direction="row" $align="center" $gap={0.5}>
            <Typography color={disableToggleButton ? "gray20" : "primary10"}>
              Ordenar por nome - A/Z
            </Typography>
            <Toggle
              id="orderBy"
              checked={!disableToggleButton}
              disabled={disableToggleButton}
              onChange={toggleOrderBy}
            />
          </Box>
        </div>
        <div>
          <S.ButtonFavorite>
            <Box $direction="row" $align="center" $gap={0.5}>
              {onlyLiked ? (
                <HearthFilledIcon color="#ED1D24" />
              ) : (
                <HearthIcon color="#ED1D24" />
              )}
              <Typography color="primary10">Somente favoritos</Typography>
            </Box>
          </S.ButtonFavorite>
        </div>
      </S.EndContent>
    </S.Wrapper>
  );
}
