import type{FC} from "react";
import {Box, Text, Image, useBreakpointValue} from "@chakra-ui/react";


const Hero: FC<{imageLocation:string}> = ({imageLocation})=>{
  const bp = useBreakpointValue(["xs", "sm", "md", "lg" ]);
  console.log({bp});
  return(
    <>
      <Box  display="flex" my={1} justifyContent="center" width={bp == "xs" ? "80%":"70%"} height="auto" >
        {
          imageLocation ? 
          (<Image  src={imageLocation} loading="lazy" fit="contain"/>):
          (<Box>Sorry image could not be loaded...</Box>)
        }
      </Box>
    </>
  )
};

export default Hero;
