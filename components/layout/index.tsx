import { FC, useState, useEffect } from "react";
import {
  Container,
  ColoModeView,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import Appbar from "../appbar";
import Footer from "./footer";
import { HeroSection } from "../pages/homepage";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const Layout: FC<FC> = ({ children }) => {
  const route = useRouter();
  const CodingImageTheme = useColorModeValue<string, string>(
    "/day_coding_copy.gif",
    "/night_coding.gif"
  );
  const [showHeroSection, setShowHeroSection] = useState<boolean>(true);
  //const AllState = useSelector(state=>state);
  //console.log({AllState});
  useEffect(() => {
    if ((route.pathname == "/contact")) setShowHeroSection(false);
    else setShowHeroSection(true);
  }, [route.isReady]);
  return (
    <>
      <Box>
        <Appbar />
        <Box mb="5rem" />
        <Container maxW="2xl" centerContent minHeight="75vh">
          {showHeroSection && <HeroSection imageLocation={CodingImageTheme} />}
          {children}
        </Container>
        <Footer/>
      </Box>
    </>
  );
};

export default Layout;
