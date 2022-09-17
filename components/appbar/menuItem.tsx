import {FC} from "react";
import NextLink from "next/link";
import {
  Link,
  Box,
  useColorModeValue,
  useColorMode,
} from "@chakra-ui/react";


interface menuItemNode {
  to : string;
  text: string;
  path?: string;
}

const MenuItem: FC = ({to, text, path})=>{
  const IsActive = text == path;
  const inActiveColor = useColorModeValue("gray200", "whiteAlpha900")
  return(
    <Box display={["none", "none", "block"]}>
      <NextLink href={to}>
        <Link p={2} _active={inActiveColor}>{text}</Link> 
      </NextLink>
    </Box>
  )
}


export default MenuItem
