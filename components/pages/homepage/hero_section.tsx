import type{FC} from "react";
import {Box, Text} from "@chakra-ui/react";


const Hero: FC<{imageLocation:string}> = ({imageLocation})=>{
  return(
    <>
      <Box display="flex" mt={9} justifyContent="center" width="100%" height="13rem" border="1px solid black">
        {
          imageLocation ? 
          (<img src={imageLocation}/>):
          (<Box>Sorry image could not be loaded...</Box>)
        }
      </Box>
    </>
  )
};

export default Hero;
