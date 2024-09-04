import { Link } from "react-router-dom";
import { Character as CharacterDTO } from "@/services/characters/dto/characters";
import { Box } from "@/ui/components/atoms/box";
import { Typography } from "@/ui/components/atoms/typography";
import { Character } from "./character/caracter";
import { CharactersListSkeletons } from "./character-list-skeleton";
import { Paths } from "@/routes/paths";

import * as S from "./styles";

interface CharactersListProps {
  data: CharacterDTO[];
  isLoading: boolean;
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
        {showSkeletons && <CharactersListSkeletons />}
        {showList &&
          data.map((character) => {
            return (
              <Link
                key={character.id}
                to={`${Paths.CHARACTER_DETAILS}/${character.id}`}
                style={{ textDecoration: "none" }}
              >
                <Character key={character.id} data={character} />;
              </Link>
            );
          })}
      </S.List>
      {hasMoreThanOne && <Typography color="text20">Final da lista</Typography>}
      {showNotFound && (
        <Box $align="center" $gap={0.5}>
          <Typography color="text10">Nenhum herói encontrado</Typography>
          <Typography color="text10" $weight={600}>Verifique os filtros ou busque novamente.</Typography>
        </Box>
      )}
    </Box>
  );
}
