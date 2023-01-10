import {FC} from "react";
import {Box, Text} from "@chakra-ui/react";

const Logo :FC = (props)=>{
  return (
    <>
      <Box {...props}>
        <Text fontSize="lg" fontWeight="bold">
          Shaddy_dev
        </Text>
      </Box>
    </>
  )
}

export default Logo
