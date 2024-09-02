import { Box } from "@/ui/components/atoms/box";
import { SearchField } from "@/ui/components/molecules/search-field";
import { SearchIcon } from "@/ui/components/atoms/icons";

import logo_menor from "@/assets/logo_menor.svg";
import { Link } from "react-router-dom";
import { Paths } from "@/routes/paths";

export function Header() {
  return (
    <Box
      $direction="row"
      $justify="center"
      $align="center"
      $paddingX={1}
      $paddingY={1}
    >
      <Link to={Paths.HOME}>
        <img src={logo_menor} alt="Marvel Logo" />
      </Link>
      <SearchField
        $onPressEnter={() => null}
        placeholder="Procure por heróis"
        $backgroundColor="white"
        startElement={<SearchIcon color="#ED1D24" />}
      />
    </Box>
  );
}
