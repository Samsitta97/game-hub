import React from "react";
import logo from "../assets/Logo/logo.webp";
import { HStack, Image, Text } from "@chakra-ui/react";
import { px } from "framer-motion";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="50px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
