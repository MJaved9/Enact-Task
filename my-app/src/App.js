import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar/Navbar";
import { RoutesPages } from "./components/Routes/RoutePage";

function App() {
  return (
    <Box >
      <RoutesPages />

      <Box position={"relative"} alignItems={"flex-end"} >
        <Box bottom={0} pos={"fixed"} w="100%" >
          <Navbar />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
