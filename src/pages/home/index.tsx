import { KeyboardEvent, useEffect, useState } from "react";
import { Box } from "@/ui/components/atoms/box";
import { useGetCharacters } from "@/services/characters";
import { Character, OrderBy } from "@/services/characters/dto";
import { CharactersList } from "@/ui/components/molecules/characters-list";
import { Toggle } from "@/ui/components/atoms/toggle";
import { SearchField } from "@/ui/components/molecules/search-field";
import {
  HearthFilledIcon,
  HearthIcon,
  SearchIcon,
} from "@/ui/components/atoms/icons";
import { Typography } from "@/ui/components/atoms/typography";
import logo from "@/assets/logo.svg";

export function Home() {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [orderBy, setOrderBy] = useState<OrderBy>("name");
  const [onlyLiked, setOnlyLiked] = useState<boolean>(false);

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
    const enterWasPressed = event.key === "Enter";
    if (enterWasPressed) {
      event.preventDefault();
      refetch();
    }
  };

  function handleOrderBy() {
    setOrderBy(orderBy === "name" ? "-name" : "name");
  }

  useEffect(() => {
    const hasResults = response?.data.results;
    if (hasResults) {
      setCharacters(response.data.results);
    }
  }, [response]);

  const hasMoreThanOneCharacter = characters.length > 1;
  const disableToggleButton = searchTerm.length === 0;

  return (
    <Box $justify="center" $align="center" $gap={2} $marginBottom={5}>
      <Box $justify="center" $align="center" $gap={1.5}>
        <Box $direction="row" $align="baseline" $justify="center">
          <img src={logo} alt="Marvel Logo" />
        </Box>
        <Box $align="center" $gap={0.5}>
          <Typography size={24} $weight={700}>
            EXPLORE O UNIVERSO
          </Typography>
          <Typography color="text20">
            Mergulhe no domínio deslumbrante de todos os personagens clássicos
            que você ama - e aqueles que você descobrirá em breve!
          </Typography>
        </Box>
        <Box $marginY={1}>
          <SearchField
            placeholder="Procure por heróis"
            value={searchTerm}
            onChange={({ target: { value } }) => setSearchTerm(value)}
            onKeyDown={handleKeyDown}
            startElement={<SearchIcon color="#ED1D24" />}
          />
        </Box>
      </Box>
      <Box $marginY={1}>
        <Box $gap={1} $direction="row" $align="center">
          <Box>
            <Typography $weight={600} color="text20">
              {characters.length} herói{hasMoreThanOneCharacter ? "s" : ""}{" "}
              encontrado{hasMoreThanOneCharacter ? "s" : ""}
            </Typography>
          </Box>
          <Box $direction="row">
            <Box $direction="row" $align="center" $gap={0.5}>
              <Typography color="primary10">Ordenar por nome - A/Z</Typography>
              <Toggle
                id="orderBy"
                checked={!disableToggleButton}
                disabled={disableToggleButton}
                onChange={() => handleOrderBy()}
              />
            </Box>
            <Box
              $direction="row"
              $align="center"
              $justify="flex-end"
              $gap={0.5}
            >
              {onlyLiked && <HearthFilledIcon color="#ED1D24" />}
              {!onlyLiked && <HearthIcon color="#ED1D24" />}
              <Typography color="primary10">Somente favoritos</Typography>
            </Box>
          </Box>
        </Box>
        <Box>
          <CharactersList
            data={characters}
            isLoading={isLoading || isRefetching}
          />
        </Box>
      </Box>
    </Box>
  );
}
