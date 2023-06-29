import { Box, Text, Button, SimpleGrid, Container } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FilterByCountry, FilterByDate } from "../../../../Redux/products/Action.products";
import { ContainerBox } from "./Container";

let Year = 1918;

export const FilterBox = () => {
  const dispatch = useDispatch();
  const prop = useSelector((store) => store.productManager);

  const release = new Array(10).fill(0);
  const Country = ["USA", "Germany", "Russia", "Denmark"];
  const HandelFilterByDate = (date) => {
    dispatch(FilterByDate(date));
  };

  const HandelFilterByCountry = (country) =>{
     dispatch(FilterByCountry(country))
  }


  useEffect(() => {
    prop.FilterData = [];
  }, []);

  return (
    <Box>
      <Box bg="black">
        <Text p="5" as="b" fontSize={"2xl"} color={"blue"}>
          Country
        </Text>
      </Box>

      <SimpleGrid p="4" columns={4} spacing={3} className="Box" gap="5">
        {Country.map((ele, i) => {
          return (
            <Button _hover={"none"}  key={i} colorScheme="gray" variant="outline">
              <Text onClick={() => HandelFilterByCountry(ele)}>{ele}</Text>
            </Button>
          );
        })}
      </SimpleGrid>

      <Box bg="black">
        <Text p="5" as="b" fontSize={"2xl"} color={"blue"}>
          Release Date
        </Text>
      </Box>

      <SimpleGrid p="5" className="Box" columns={4} spacing={3}>
        {release.map((ele, i) => {
          return (
            <Button _hover={"none"} key={i} colorScheme="gray" variant="outline">
              <Text onClick={() => HandelFilterByDate(Year - i)}>
                {Year - i}
              </Text>
            </Button>
          );
        })}
      </SimpleGrid>
      <Box className="Box">
        {prop.FilterData.map((ele) => {
          return <ContainerBox title={ele.title} genre={ele.genre} />;
        })}
      </Box>
    </Box>
  );
};
