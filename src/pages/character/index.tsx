import { Box } from "@/ui/components/atoms/box";
import { useParams } from "react-router-dom";
// import { CharactersList } from "@/ui/components/molecules/characters-list";
// import { Character as CharacterDTO } from "@/services/characters/dto";

export function Character() {

  // const {
  //   data: response,
  //   isLoading,
  //   isRefetching,
  //   refetch,
  // } = useGetCharacter();

  const { characterId } = useParams();

  return (
      <Box $gap={2}>
        Pesonagem
        {characterId}
      </Box>
  );
}
