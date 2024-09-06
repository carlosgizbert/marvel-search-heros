import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@/ui/components/atoms/box";
import { SearchField } from "@/ui/components/molecules/search-field";
import { SearchIcon } from "@/ui/components/atoms/icons";

import { Paths } from "@/routes/paths";
import logo_menor from "@/assets/logo_menor.svg";

import * as S from "./styles";

export function Navbar() {
  const [searchTerm, setSearchTerm] = useState<string>();
  const navigate = useNavigate();

  function handleSearch() {
    navigate({
      pathname: Paths.HOME,
      search: `?buscar=${searchTerm}`,
    });
  }

  return (
    <S.Wrapper id="character-navbar">
      <Box $direction="row" $justify="center" $align="center" $paddingY={0.5}>
        <Link to={Paths.HOME}>
          <img src={logo_menor} alt="Marvel Logo" />
        </Link>
        <SearchField
          id="character-navbar-search-field"
          $onPressEnter={() => handleSearch()}
          onChange={({ target: { value } }) => setSearchTerm(value)}
          value={searchTerm}
          placeholder="Procurar heróis ..."
          $backgroundColor="white"
          startElement={<SearchIcon color="#ED1D24" />}
        />
      </Box>
    </S.Wrapper>
  );
}
