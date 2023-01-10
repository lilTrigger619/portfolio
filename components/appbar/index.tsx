import type { FC } from "react";
import { useState } from "react";
import Logo from "./logo";
import {
  Box,
  Flex,
  Stack,
  Container,
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
  IconButton,
} from "@chakra-ui/react";
import MenuItem from "./menuItem";
import MenuToggle from "./menuToggle";
import MobileNav from "./mobileMenuItems";
import { FaSun, FaMoon } from "react-icons/fa";
import { motion } from "framer-motion";

const AnimateNightColorModeIcon: FC<{ children: FC; anim: boolean }> = ({
  children,
  anim,
}) => (
  /** animate the moon icon to come from the bottom**/
  <motion.div
    initial={{
      y: 60,
      opacity: 0.1,
    }}
    animate={{
      opacity: anim ? 1 : 1,
      y: anim ? 60 : 0,
    }}
  >
    {children}
  </motion.div>
);

const AnimateDayColorModeIcon: FC<{ children: FC; animate: boolean }> = ({
  children,
  animate,
}) => (
  /* animte the sun icon to come from the top */
  <motion.div
    initial={{
      y: -50,
      opacity: 0.1,
    }}
    animate={{
      opacity: animate ? 1 : 1,
      y: animate ? -50 : 0,
    }}
  >
    {children}
  </motion.div>
);

const Header: FC = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  const ButtonColor = useColorModeValue("teal", "");
  const toggleMobileNav: void = () => {
    setShowMobileNav(!showMobileNav);
    console.log(showMobileNav);
  };
  const { toggleColorMode } = useColorMode();
  const toggleTheme: void = () => {
    toggleColorMode();
  };
  return (
    <>
      <Box
        as="nav"
        position="fixed"
        width="100%"
        style={{backdropFilter: "blur(14px)" }}
      >
        <Container my={2} maxW="3xl">
          <Flex mx={2} justify="space-between">
            <Logo />
            <HStack>
              <IconButton
                onClick={toggleColorMode}
                backgroundColor={useColorModeValue("yellow.300", "teal.300")}
                color={useColorModeValue("WhiteAlpha.800", "black")}
                _hover={{
                  backgroundColor: "initial",
                  color: "initial",
                }}
              >
                {useColorModeValue(
                  <AnimateNightColorModeIcon
                    anim={useColorModeValue(false, true)}
                  >
                    <FaMoon />
                  </AnimateNightColorModeIcon>,
                  <AnimateDayColorModeIcon
                    animate={useColorModeValue(true, false)}
                  >
                    <FaSun />
                  </AnimateDayColorModeIcon>
                )}
              </IconButton>
              <MenuToggle onClick={toggleMobileNav} clicked={showMobileNav} />
              <MenuItem text="About 😎" to="/about" />
              <MenuItem text="projects" to="/project" />
              <MenuItem text="Contact 📱" to="/contact" />
              <MenuItem text="GitHub" to="#" />
            </HStack>
          </Flex>
        </Container>
      </Box>
      <MobileNav showNav={showMobileNav} />
    </>
  );
};

export default Header;
