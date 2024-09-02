import { Character as CharacterDTO } from "@/services/characters/dto";
import { Box } from "@/ui/components/atoms/box";
import { Typography } from "@/ui/components/atoms/typography";
import { Character } from "./character/caracter";
import { CharacterSkeleton } from "./character-skeleton/caracter";

import * as S from "./styles";
import { Link } from "react-router-dom";
import { Paths } from "@/routes/paths";

interface CharactersListProps {
  data: CharacterDTO[];
  isLoading: boolean;
}

function CharactersSkeletons() {
  return (
    <>
      <CharacterSkeleton />
      <CharacterSkeleton />
      <CharacterSkeleton />
      <CharacterSkeleton />
      <CharacterSkeleton />
      <CharacterSkeleton />
    </>
  );
}

export function CharactersList({
  data,
  isLoading,
}: Readonly<CharactersListProps>) {
  const showList = !isLoading && data;
  const showSkeletons = isLoading;
  const hasMoreThanOne = !isLoading && data.length > 1;
  const showNotFound = !isLoading && data.length === 0;

  return (
    <Box $gap={3} $justify="center" $align="center">
      <S.List>
        {showSkeletons && <CharactersSkeletons />}
        {showList &&
          data.map((character) => {
            return (
              <Link
                key={character.id}
                to={`${Paths.CHARACTER_DETAILS}/${character.id}`}
                style={{ textDecoration: "none" }}
              >
                <Character data={character} />
              </Link>
            );
          })}
      </S.List>
      {hasMoreThanOne && <Typography color="text20">Final da lista</Typography>}
      {showNotFound && <Typography color="text20">Nenhum herói encontrado</Typography>}
    </Box>
  );
}
