import type{FC} from "react";
import {Box, Text, Image} from "@chakra-ui/react";


const Hero: FC<{imageLocation:string}> = ({imageLocation})=>{
  return(
    <>
      <Box display="flex" mt={9} justifyContent="center" width="100%" height="13rem" border="1px solid black">
        {
          imageLocation ? 
          (<Image boxSize="70px" src={imageLocation}/>):
          (<Box>Sorry image could not be loaded...</Box>)
        }
      </Box>
    </>
  )
};

export default Hero;
