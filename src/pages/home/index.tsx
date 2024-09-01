import { KeyboardEvent, useEffect, useState } from "react";
import { Box } from "@/ui/components/atoms/box";
import { useGetCharacters } from "@/services/characters";
import { Character } from "@/services/characters/dto";
import { CharactersList } from "@/ui/components/molecules/characters-list";

export function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const {
    data: response,
    isLoading,
    isRefetching,
    refetch,
  } = useGetCharacters(searchTerm ? { name: searchTerm } : undefined);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      refetch();
    }
  };

  useEffect(() => {
    if (response?.data.results) {
      setCharacters(response.data.results);
    }
  }, [response]);

  const isLoadingOrRefetching = isLoading || isRefetching

  return (
      <Box $gap={2}>
        <Box $gap={1} $align="center">
          <div>
            <span>Logo</span>
            <span>Search heroes</span>
          </div>
          <Box $marginY={0} $gap={0.5} $align="center">
            <h1>Explore o universo</h1>
            <span className="subtitle">
              Mergulhe no domínio deslumbrante de todos os personagens clássicos
              que você ama - e aqueles que você descobrirá em breve!
            </span>
          </Box>
          <input
            placeholder="Procurar heróis"
            value={searchTerm}
            onChange={({ target: { value } }) => setSearchTerm(value)}
            onKeyDown={handleKeyDown}
          />
        </Box>
        <Box $gap={2}>
          <Box
            $gap={1}
            $direction="row"
            $justify="space-between"
            $align="center"
          >
            <div>Encontrados {characters.length} heróis</div>
            <div>
              <span>Ordenar por nome - A/Z</span>
              <span>LIGAR / DESLIGAR</span>
              <span>Somente favoritos</span>
            </div>
          </Box>
          {isLoadingOrRefetching && <div>Carregando ...</div>}
          {!isLoadingOrRefetching && characters.length === 0 && (
            <div>Nenhum herói encontrado</div>
          )}
          {characters.length > 0 && <CharactersList data={characters} />}
        </Box>
      </Box>
  );
}
