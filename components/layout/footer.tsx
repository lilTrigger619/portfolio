import { FC } from "react";
import { Box, Text, HStack, Divider, Center } from "@chakra-ui/react";
import { FaKeyboard, FaHeart } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <>
      <Box>
        <br />
        <Divider />
        <br />
        <Center>
          <Box display="flex" alignItems="center" flexWrap="wrap">
            {" "}
            This website was built with
            <Text
              m=".4rem"
              textDecoration="line-through"
              color="red.600"
              display="inherit"
              alignItems="inherit"
            >
              &nbsp; Love &nbsp;
              <FaHeart />
              &nbsp;
            </Text>
            <Text
              m=".4rem"
              textDecoration="underline"
              color="teal.600"
              fontWeight="800"
              display="inherit"
              alignItems="inherit"
            >
              Keyboard &nbsp;
              <FaKeyboard />.
            </Text>
          </Box>
        </Center>
        <br />
      </Box>
    </>
  );
};

export default Footer;
