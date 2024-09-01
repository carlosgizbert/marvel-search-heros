import { KeyboardEvent, useEffect, useState } from "react";
import { Box } from "@/ui/components/atoms/box";
import { useGetCharacters } from "@/services/characters";
import { Character, OrderBy } from "@/services/characters/dto";
import { CharactersList } from "@/ui/components/molecules/characters-list";
import { Toggle } from "@/ui/components/atoms/toggle";

export function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [orderBy, setOrderBy] = useState<OrderBy>("name");

  const {
    data: response,
    isLoading,
    isRefetching,
    refetch,
  } = useGetCharacters(
    searchTerm
      ? {
          nameStartsWith: searchTerm.toLowerCase(),
          ...(searchTerm.length > 0 && { orderBy: orderBy }),
        }
      : undefined
  );

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const enterWasPressed = event.key === "Enter"
    if (enterWasPressed) {
      event.preventDefault();
      refetch();
    }
  };

  function handleOrderBy() {
    setOrderBy(orderBy === "name" ? "-name" : "name");
  }

  useEffect(() => {
    const hasResults = response?.data.results
    if (hasResults) {
      setCharacters(response.data.results);
    }
  }, [response]);

  const isLoadingOrRefetching = isLoading || isRefetching;
  const orderIsDisabled = searchTerm.length === 0;

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
        <Box $gap={1} $direction="row" $justify="space-between" $align="center">
          <div>Encontrados {characters.length} heróis</div>
          <div>
            <Box $direction="row" $align="center" $gap={1}>
              <span>Ordenar por nome - A/Z</span>
              <Toggle
                id="orderBy"
                checked={false}
                disabled={orderIsDisabled}
                onChange={() => handleOrderBy()}
              />
              <span>Somente favoritos</span>
            </Box>
          </div>
        </Box>
        {isLoadingOrRefetching && <div>Carregando ...</div>}
        {!isLoadingOrRefetching && characters.length === 0 && (
          <div>Nenhum herói encontrado</div>
        )}
        {!isLoadingOrRefetching && characters.length > 0 && (
          <CharactersList data={characters} />
        )}
      </Box>
    </Box>
  );
}
