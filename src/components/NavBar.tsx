import React from "react";
import logo from "../assets/Logo/logo.webp";
import { HStack, Image, Text } from "@chakra-ui/react";
import { px } from "framer-motion";
import ColorModeSwitch from "./ColorModeSwitch";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
