import { FC } from "react";
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

const Header: FC = () => {
  const ButtonColor = useColorModeValue("teal", "")
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
                onClick={() => console.log(toggleColorMode)}
              >
                l/d
              </Button>
              <MenuToggle />
              <MenuItem text="About" to="#" />
              <MenuItem text="projects" to="#" />
              <MenuItem text="GitHub" to="#" />
            </HStack>
          </Flex>
        </Container>
      </Box>
    </>
  );
};

export default Header;
