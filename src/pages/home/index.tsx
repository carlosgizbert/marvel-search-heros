import { useEffect, useState } from "react";
import { Box } from "@/ui/components/atoms/box";
import { Character, OrderBy } from "@/services/characters/dto";
import { CharactersList } from "@/ui/components/molecules/characters-list";
import { SearchField } from "@/ui/components/molecules/search-field";
import { SearchIcon } from "@/ui/components/atoms/icons";
import { useGetCharacters } from "@/services/characters";
import { CharactersCounter } from "./characters-counter";
import { FilterControls } from "./filter-controls";
import { Header } from "./header";

export function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [orderBy, setOrderBy] = useState<OrderBy>("name");
  const [onlyLiked, setOnlyLiked] = useState<boolean>(false);

  const hasTermToSearch = searchTerm.length > 0;
  const userQueryParams = {
    nameStartsWith: searchTerm.toLowerCase(),
    ...(hasTermToSearch && { orderBy }),
  };

  const {
    data: response,
    isLoading,
    isRefetching,
    refetch,
  } = useGetCharacters(hasTermToSearch ? userQueryParams : undefined);

  const handleSearch = () => refetch();
  const toggleOrderBy = () => setOrderBy(orderBy === "name" ? "-name" : "name");
  const isFetchingData = isLoading || isRefetching;

  useEffect(() => {
    const hasResponseData = response?.data.results
    if (hasResponseData) {
      setCharacters(response.data.results);
    }
  }, [response]);

  return (
    <Box
      $justify="center"
      $align="center"
      $gap={2}
      $marginBottom={5}
      $maxWidth="998px"
    >
      <Header />
      <Box $marginY={1} $maxWidth="720px">
        <SearchField
          placeholder="Procurar heróis ..."
          value={searchTerm}
          onChange={({ target: { value } }) => setSearchTerm(value)}
          $onPressEnter={handleSearch}
          startElement={<SearchIcon color="#ED1D24" />}
        />
      </Box>
      <Box $marginY={1}>
        <FilterControls
          orderBy={orderBy}
          toggleOrderBy={toggleOrderBy}
          onlyLiked={onlyLiked}
          disableToggleButton={searchTerm.length === 0}
          counterElement={
            <CharactersCounter
              count={characters.length}
              isLoading={isLoading}
            />
          }
        />
        <CharactersList data={characters} isLoading={isFetchingData} />
      </Box>
    </Box>
  );
}
