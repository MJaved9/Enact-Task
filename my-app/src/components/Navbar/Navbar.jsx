import { Box, Flex } from "@chakra-ui/react";
import React, { useState } from "react";

import { AiFillHome, AiOutlineSearch, AiFillPlayCircle } from "react-icons/ai";
import { MdAccountCircle } from "react-icons/md";
import { NavLink } from "react-router-dom";
export const Navbar = () => {
  const [Home, setHome] = useState(false);
  const [Search, setSearch] = useState(false);
  const [Account, setAccount] = useState(false);
  const [Video, setVideo] = useState(false);

  let Active = {
    textDecoration: "none",
    color: "yellow",
  };

  let NotActive = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <Box>
      <Box className="Box" p="1rem">
        <Flex w="90%" m="auto" justifyContent={"space-between"}>
          <NavLink
            to="/"
            style={({ isActive }) => {
              setHome(isActive);
            }}
          >
            <AiFillHome color={Home ? "yellow" : "gray"} fontSize={"25"} />{" "}
          </NavLink>
          <NavLink
            to="search"
            style={({ isActive }) => {
              setSearch(isActive);
            }}
          >
            <AiOutlineSearch
              color={Search ? "yellow" : "gray"}
              fontSize={"25"}
            />
          </NavLink>
          <NavLink
            to="video"
            style={({ isActive }) => {
              setVideo(isActive);
            }}
          >
            <AiFillPlayCircle
              color={Video ? "yellow" : "gray"}
              fontSize={"25"}
            />
          </NavLink>
          <NavLink
            to="account"
            style={({ isActive }) => {
              {
                setAccount(isActive);
              }
            }}
          >
            <MdAccountCircle
              color={Account ? "yellow" : "gray"}
              fontSize={"25"}
            />
          </NavLink>
        </Flex>
      </Box>
    </Box>
  );
};
