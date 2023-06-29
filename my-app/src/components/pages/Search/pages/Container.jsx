import { Box, Text, Image } from "@chakra-ui/react";
import React from "react";

export const ContainerBox = ({ genre, title }) => {
  return (
    <>
      <Box
        key={title}
        gap="5"
        display={"flex"}
        p="5"
        borderTop={"1px solid gray"}
      >
        <Image
          w="20%"
          src="https://st.depositphotos.com/1653909/1228/i/450/depositphotos_12283193-stock-photo-movie-clapper-and-film-reels.jpg"
        />

        <Box>
          {" "}
          <Text>{title}</Text>
          <Text color="ActiveBorder">{genre}</Text>
        </Box>
      </Box>
    </>
  );
};
