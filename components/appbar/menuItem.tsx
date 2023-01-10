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
};

const MenuItem: FC<menuItemNode> = ({to, text, path, mDisplay, isMobile})=>{
  const IsActive = text == path;
  const inActiveColor = useColorModeValue<string, string>("gray200", "whiteAlpha900")
  return(
    <Box display={isMobile ? mDisplay : ["none", "none", "block"]}>
        <Link p={2} _active={inActiveColor} as={NextLink} href={to}>{text}</Link> 
    </Box>
  )
}


export default MenuItem
