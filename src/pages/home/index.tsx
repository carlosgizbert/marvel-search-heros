import { useCallback, useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Box } from "@/ui/components/atoms/box";
import { Character, OrderBy } from "@/services/characters/dto/characters";
import { CharactersList } from "@/ui/components/molecules/characters-list";
import { SearchField } from "@/ui/components/molecules/search-field";
import { SearchIcon } from "@/ui/components/atoms/icons";

import { CharactersCounter } from "./home-characters-counter";
import { FilterControls } from "./home-filter-controls";
import { Header } from "./home-header";

import { useGetCharacters } from "@/services/characters/hooks";
import { getFavoritesIds } from "@/ui/utils/favorites";

const MAX_ITEMS_TO_SHOW: number = 20;

export function Home() {
  const [charactersData, setCharactersData] = useState<Character[]>([]);
  const [fieldValue, setFieldValue] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [orderBy, setOrderBy] = useState<OrderBy>("-modified");
  const [onlyLiked, setOnlyLiked] = useState<boolean>(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const charactersList = charactersData.filter((character) => {
    if (onlyLiked) {
      return getFavoritesIds().includes(character.id);
    }
    return true;
  });

  const hasTermToSearch = searchTerm.length > 0;
  const userQueryParams = useMemo(
    () => ({
      nameStartsWith: searchTerm.toLowerCase(),
      ...(hasTermToSearch && { orderBy }),
    }),
    [searchTerm, orderBy, hasTermToSearch]
  );

  const {
    data: response,
    isLoading,
    isRefetching,
    refetch,
  } = useGetCharacters({
    limit: MAX_ITEMS_TO_SHOW,
    orderBy: "-modified",
    ...(hasTermToSearch ? userQueryParams : undefined),
  });

  const handleSearch = useCallback(() => {
    setSearchTerm(fieldValue);
    refetch();
    setSearchParams({
      buscar: fieldValue,
    });
  }, [fieldValue, refetch, setSearchParams]);

  const toggleOnlyLiked = () => {
    setOnlyLiked((prev) => !prev);
  };

  const toggleOrderBy = () => setOrderBy(orderBy === "name" ? "-name" : "name");
  const isFetchingData = isLoading || isRefetching;

  useEffect(() => {
    const hasResponseData = response?.data.results;
    if (hasResponseData) {
      setCharactersData(response.data.results);
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
          id="home-search-field"
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
          onlyLiked={onlyLiked}
          toggleOnlyLiked={() => toggleOnlyLiked()}
          disableToggleButton={searchTerm.length === 0}
          counterElement={
            <CharactersCounter
              count={charactersList.length}
              isLoading={isLoading}
            />
          }
        />
        <CharactersList
          id="home-character-list"
          data={charactersList}
          isLoading={isFetchingData}
        />
      </Box>
    </Box>
  );
}
