import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Box } from "@/ui/components/atoms/box";
import { Character, OrderBy } from "@/services/characters/dto/characters";
import { CharactersList } from "@/ui/components/molecules/characters-list";
import { SearchField } from "@/ui/components/molecules/search-field";
import { SearchIcon } from "@/ui/components/atoms/icons";
import { useGetCharacters } from "@/services/characters/hooks";

import { CharactersCounter } from "./characters-counter";
import { FilterControls } from "./filter-controls";
import { Header } from "./header";

const ITEMS_LIMIT: number = 20;

export function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [fieldValue, setFieldValue] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [orderBy, setOrderBy] = useState<OrderBy>("name");

  const [searchParams, setSearchParams] = useSearchParams();

  const hasTermToSearch = searchTerm.length > 0;
  const userQueryParams = useMemo(() => ({
    nameStartsWith: searchTerm.toLowerCase(),
    ...(hasTermToSearch && { orderBy }),
  }), [searchTerm, orderBy, hasTermToSearch])

  const {
    data: response,
    isLoading,
    isRefetching,
    refetch,
  } = useGetCharacters({
    limit: ITEMS_LIMIT,
    ...(hasTermToSearch ? userQueryParams : undefined),
  });

  const handleSearch = useCallback(() => {
    setSearchTerm(fieldValue);
    refetch();
    setSearchParams({
      buscar: fieldValue,
    });
  }, [fieldValue, refetch, setSearchParams]);

  const toggleOrderBy = () => setOrderBy(orderBy === "name" ? "-name" : "name");
  const isFetchingData = isLoading || isRefetching;

  useEffect(() => {
    const hasResponseData = response?.data.results;
    if (hasResponseData) {
      setCharacters(response.data.results);
    }
  }, [response]);

  useEffect(() => {
    const searchParam = searchParams.get("buscar");
    if (searchParam) {
      setSearchTerm(searchParam);
      setFieldValue(searchParam);
    }
  }, [searchParams]);

  return (
    <Box
      $justify="center"
      $align="center"
      $gap={1.75}
      $marginBottom={5}
      $maxWidth="998px"
    >
      <Header />
      <Box $maxWidth="720px">
        <SearchField
          placeholder="Procurar heróis ..."
          value={fieldValue}
          onChange={({ target: { value } }) => setFieldValue(value)}
          $onPressEnter={() => handleSearch()}
          $backgroundColor="primary20"
          startElement={<SearchIcon color="#ED1D24" />}
        />
      </Box>
      <Box>
        <FilterControls
          orderBy={orderBy}
          toggleOrderBy={toggleOrderBy}
          onlyLiked={false}
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
