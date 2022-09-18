import {FC} from "react";
import {
  Container, 
  ColoModeView,
  Box,
} from "@chakra-ui/react";
import Appbar from "../appbar";
import {HeroSection} from "../pages/homepage";

const Layout : FC<FC>= ({children})=>{
  return (
    <>
      <Box >
        <Appbar />
        <Container>
          <HeroSection imageLocation=""/>
          {children}
        </Container>
      </Box>
    </>
  )
};


export default Layout;
