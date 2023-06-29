import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import ViewStyle from "./TouchSlider.module.css";
import { useSelector } from "react-redux";

export const TouchSlider = () => {

  const { TouchSlider } = useSelector((store) => store.productManager);


  return (
    <Box mt="3">
      <Text p="1rem" fontSize={"2xl"} color={"yellow"} as="b">
        Featured today
      </Text>

      <Box p="3" mt="1rem" className="Box">
        <motion.div className={ViewStyle.carousel}>
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -1900 }}
            className={ViewStyle.inner}
            pos="absolute"
          >
            {TouchSlider.map((ele, i) => {
              return (
                <Box key={i % Date.now()} pl="5" display={"grid"} gap={"1"}>
                  <Box mb="1" className={ViewStyle.boximg} key={ele.pricenew}>
                    <img
                      className={ViewStyle.imgslide}
                      src={ele.img}
                      alt="product"
                    />

                   
                  </Box>
                  <Text>{ele.text}</Text>
                  <Text color={"blue.300"}>See more stills</Text>
                </Box>
              );
            })}
          </motion.div>
        </motion.div>
      </Box>
    </Box>
  );
};
