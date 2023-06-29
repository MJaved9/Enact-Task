import { Box, Center, Flex, Image, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { GoPlay } from "react-icons/go";
import { BsBookmarkPlus } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function SliderBox({ data }) {
  const [index, setIndex] = useState(0);
  const [btnStatus, setBtnStatus] = useState("play");
  const SliderRef = useRef(0);

  const { SliderData } = useSelector((store) => store.productManager);

  const slide = () => {
    SliderRef.current = setInterval(() => {
      NextSlide();
    }, 3000);
  };

  useEffect(() => {
    // changing list length becouse it is to long
    data.length = 10;

    slide();
    if (btnStatus === "pause") {
      clearInterval(SliderRef.current);
    }
    return () => {
      clearInterval(SliderRef.current);
    };
  });

  const NextSlide = () => {
    setIndex((i) => (i + 1) % SliderData.length);
  };

  return (
    <Box h="18.4rem" w="100%">
      <Box
        position={"relative"}
        h="15rem"
        style={{
          backgroundImage: `url(${SliderData[index].img})`,
          backgroundRepeat: "none",
          backgroundSize: "cover",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></Box>
    </Box>
  );
}
