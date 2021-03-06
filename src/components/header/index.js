import React from "react";
import useMediaQuery from "react-use-media-query-hook";
import { Box } from "@chakra-ui/core";
import HeaderMobile from "./headerMobile";
import HeaderDesktop from "./headerDesktop";

const Header = () => {
  const isLarge = useMediaQuery("(min-width: 700px)");

  return (
    <Box shadow="sm">{isLarge ? <HeaderDesktop /> : <HeaderMobile />}</Box>
  );
};

export default Header;
