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
  isMobile: string;
  mDisplay: string;
}

const MenuItem: FC<menuItemNode> = ({to, text, path, mDisplay, isMobile})=>{
  const IsActive = text == path;
  const inActiveColor = useColorModeValue("gray200", "whiteAlpha900")
  return(
    <Box display={isMobile ? mDisplay : ["none", "none", "block"]}>
      <NextLink href={to}>
        <Link p={2} _active={inActiveColor}>{text}</Link> 
      </NextLink>
    </Box>
  )
}


export default MenuItem
