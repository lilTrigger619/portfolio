import type {FC} from "react";
import {useState } from "react";
import {Box, Text, List, ListItem}  from "@chakra-ui/react";
import MenuItem from "./menuItem";


const MobileNav:FC<{showNav:boolean}> = ({showNav})=>{
  return(
    <>
      <Box width="100%" display="flex" justifyContent="center">
        <List width="100%" display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <ListItem><MenuItem to="/about" text="About" isMobile={true} mDisplay={showNav ? "block":"none"}/></ListItem>
          <ListItem><MenuItem to="/project" text="Projects" isMobile={true} mDisplay={showNav ? "block":"none"}/></ListItem>
          <ListItem><MenuItem to="/contact" text="Contact" isMobile={true} mDisplay={showNav ? "block":"none"}/></ListItem>
          <ListItem><MenuItem to="#" text="Git" isMobile={true} mDisplay={showNav ? "block":"none"}/></ListItem>
        </List>
      </Box>
    </>
  )
}

export default MobileNav;
