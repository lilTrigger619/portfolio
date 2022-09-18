import type{ FC } from "react";
import {useState} from "react";
import Logo from "./logo";
import {
  Box,
  Flex,
  Stack,
  Container,
  HStack,
  Button,
  toggleColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import MenuItem from "./menuItem";
import MenuToggle from "./menuToggle";
import MobileNav from "./mobileMenuItems";

const Header: FC = () => {
  const [showMobileNav, setShowMobileNav] = useState(false)
  const ButtonColor = useColorModeValue("teal", "")
  const toggleMobileNav = ()=>{
    setShowMobileNav(!showMobileNav)
    console.log(showMobileNav)
  }
  return (
    <>
      <Box as="nav" postion="fixed">
        <Container my={2} maxW="3xl">
          <Flex mx={2} justify="space-between">
            <Logo />
            <HStack>
              <Button
                colorScheme={ButtonColor}
                size="sm"
                onClick={()=>console.log("to run the day and night mode")}
              >
                l/d
              </Button>
              <MenuToggle onClick={toggleMobileNav} clicked={showMobileNav}/>
              <MenuItem text="About" to="#" />
              <MenuItem text="projects" to="#" />
              <MenuItem text="GitHub" to="#" />
            </HStack>
          </Flex>
        </Container>
      </Box>
      <MobileNav showNav={showMobileNav}/>
    </>
  );
};

export default Header;
