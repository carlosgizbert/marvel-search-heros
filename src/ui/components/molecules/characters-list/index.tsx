import { Character as CharacterDTO } from "@/services/characters/dto";
import Character from "./character/caracter";

import * as S from './styles'

interface CharactersListProps {
  data: CharacterDTO[];
}

export function CharactersList({ data }: Readonly<CharactersListProps>) {
  return (
    <S.Wrapper>
      {
        data.map((character) => {
          return (
            <Character key={character.id} data={character} />
          );
        })
      }
    </S.Wrapper>
  );
}
