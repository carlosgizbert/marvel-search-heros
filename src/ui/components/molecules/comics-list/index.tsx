import { Link } from "react-router-dom";
import { Character as CharacterDTO } from "@/services/characters/dto";
import { Box } from "@/ui/components/atoms/box";
import { Typography } from "@/ui/components/atoms/typography";
import { Character } from "./comic/comic";
import { CharacterSkeleton } from "./character-skeleton/caracter";

import { Paths } from "@/routes/paths";

import * as S from "./styles";

interface ComicsSkeletonsProps {
  data: CharacterDTO[];
  isLoading: boolean;
}

function ComicsSkeletons() {
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

export function ComicsList({
  data,
  isLoading,
}: Readonly<ComicsSkeletonsProps>) {
  const showList = !isLoading && data;
  const showSkeletons = isLoading;
  const hasMoreThanOne = !isLoading && data.length > 1;
  const showNotFound = !isLoading && data.length === 0;

  return (
    <Box $gap={3} $justify="center" $align="center">
      <S.List>
        {showSkeletons && <ComicsSkeletons />}
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
      {hasMoreThanOne && <Typography>Final da lista</Typography>}
      {showNotFound && <div>Nenhum lançamento</div>}
    </Box>
  );
}
