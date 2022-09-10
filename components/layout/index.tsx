import {FC} from "react";
import {
  Container, 
  ColoModeView,
  Box,
} from "@chakra-ui/react";
import Appbar from "../appbar";

const Layout : FC<FC>= ({children})=>{
  return (
    <>
      <Box >
        <Appbar />
        <Container>
          {children}
        </Container>
      </Box>
    </>
  )
};


export default Layout;
