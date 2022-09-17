import {Box, Text} from "@chakra-ui/react";
import type {FC} from "react";

interface Props {
  title : string;
  children: FC;
}

const ContextContainer:FC<Props> = ({title, children})=>{
  return (
    <>
      <Box width="100%" marginTop="1rem">
        <Box>
        {/* title*/}
          <Text>{title}</Text>
          <Box width="3rem" borderBottom=".3rem solid gray"> </Box>
        </Box>

        {/* content*/}
        <Box padding=".8rem">
          {children}
        </Box>
      </Box>
    </>
  )
};


export default ContextContainer;
