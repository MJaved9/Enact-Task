import React from "react";
import { Box, Grid } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductList } from "../../Redux/products/Action.products";
import { useEffect } from "react";
import SliderBox from "./Pages/Slider/Slider";
import { TouchSlider } from "./Pages/TouchSlider/TouchSlider";

export const Home = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.productManager);

  useEffect(() => {
    dispatch(GetProductList());
  }, []);

  return (
    <Grid position={"relative"} w="100%" gap={"5"} bg="black">
      <SliderBox data={data} />
      <TouchSlider />
    </Grid>
  );
};
