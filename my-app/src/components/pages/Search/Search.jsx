import {
    Box,
    Input,
    Text,
    Image,
    InputGroup,
    InputLeftElement,
    Center,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { GetSerachData } from "../../../Redux/products/Action.products";
import { FilterBox } from "./pages/FilterBox";

export const SearchPage = () => {
    const [searchText, setSearchText] = useState("");
    const dispatch = useDispatch();
    const [filterBool, setFilterBool] = useState(true)
    const { SearchData } = useSelector((store) => store.productManager);
    const prop = useSelector((store) => store.productManager);

    const HandelSearch = (text) => {
        setSearchText(text);
        dispatch(GetSerachData(text));
    };


  useEffect(() => {
    prop.FilterData = [];
  }, [filterBool]);
  

    return (
        <Box>
            <Box className="Box" p="8px">
                <InputGroup>
                    <InputLeftElement pointerEvents="none">
                        <BiSearch fontSize={"20"} />
                    </InputLeftElement>
                    <Input
                        value={searchText}
                        place
                        borderRadius={"5px"}
                        bg="white"
                        placeholder="Search IMDB"
                        size="md"
                        onChange={(e) => HandelSearch(e.target.value)}
                    />{" "}
                </InputGroup>
            </Box>

            {searchText === "" && <Box pb="2" display={"flex"} className="Box" >
                <Box w="50%" pb="1" borderBottom={filterBool ? "2px solid blue" : ""}><Center ><Text onClick={() => setFilterBool(true)} >RECENT</Text></Center></Box>
                <Box w="50%" pb="1" borderBottom={filterBool ? "" : "2px solid blue"}><Center><Text onClick={() => setFilterBool(false)}>FILTER</Text></Center></Box>
            </Box>}

            {!filterBool ? <FilterBox/> : <>{SearchData.length === 0 && searchText !== "" ? <Center mt="5rem" color="black">Search is not found</Center> : <Box className="Box">
                {SearchData && searchText &&
                    SearchData.map((ele, i) => {
                        return (
                            <>
                                <Box
                                    key={i % Math.random()}
                                    gap="3"
                                    display={"flex"}
                                    p="5"
                                    borderTop={"1px solid gray"}
                                >
                                    <Image
                                        w="20%"
                                        src="https://yt3.googleusercontent.com/weD7WfgxB3sjFX7Yr4RBk3oAYKYLT4yjb9N3yK10VwF1Pmusidh7xqk1tAP23QpW1rur2Gst0s4=s900-c-k-c0x00ffffff-no-rj"
                                    />

                                    <Box>
                                        {" "}
                                        <Text>{ele.title}</Text>
                                        <Text color="gray">{ele.genre}</Text>
                                    </Box>
                                </Box>
                            </>
                        );
                    })}
            </Box>}</>}

        </Box>
    );
};
