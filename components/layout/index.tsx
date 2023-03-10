import {FC} from "react";
import {
  Container, 
  ColoModeView,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import Appbar from "../appbar";
import {HeroSection} from "../pages/homepage";
import {useSelector} from "react-redux";

const Layout : FC<FC>= ({children})=>{
  const CodingImageTheme = useColorModeValue<string, string>("/day_coding_copy.gif","/night_coding.gif")
  //const AllState = useSelector(state=>state);
  //console.log({AllState});
  return (
    <>
      <Box>
        <Appbar/>
        <Box mb="5rem"/>
        <Container maxW="2xl" centerContent>
          <HeroSection imageLocation={CodingImageTheme}/>
          {children}
        </Container>
      </Box>
    </>
  )
};


export default Layout;
