import { Character as CharacterDTO } from "@/services/characters/dto";
import { Box } from "@/ui/components/atoms/box";
import { Typography } from "@/ui/components/atoms/typography";
import { Character } from "./character/caracter";
import { CharacterSkeleton } from "./character-skeleton/caracter";

import * as S from "./styles";

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
            return <Character key={character.id} data={character} />;
          })}
      </S.List>
      {hasMoreThanOne && <Typography>Final da lista</Typography>}
      {showNotFound && <div>Nenhum herói encontrado</div>}
    </Box>
  );
}
