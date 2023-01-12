import type { FC } from "react";
import { useState, useEffect } from "react";
import { Box, Text, List, ListItem } from "@chakra-ui/react";
import MenuItem from "./menuItem";
import { motion } from "framer-motion";
import {useRouter} from "next/router";

const MobileNav: FC<{ showNav: boolean }> = ({ showNav }) => {
  const NextRouter = useRouter();
  const [pagePath, setPagePath] = useState("/");
  useEffect(()=>{
    if(NextRouter.isReady){
      setPagePath(NextRouter.pathname); 
    }
  }, [NextRouter.isReady]);
  return (
    <>
      <Box width="100%" display="flex" justifyContent="center">
        <List
          width="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <ListItem>
            <MenuItem
              to="/about"
              underline = { pagePath == "/" || pagePath == "/about" }
              text="About"
              isMobile={true}
              mDisplay={showNav ? "block" : "none"}
            />
          </ListItem>
          <ListItem>
            <MenuItem
              to="/project"
              underline = { pagePath == "/project" }
              text="Projects"
              isMobile={true}
              mDisplay={showNav ? "block" : "none"}
            />
          </ListItem>
          <ListItem>
            <MenuItem
              underline = { pagePath == "/contact" }
              to="/contact"
              text="Contact"
              isMobile={true}
              mDisplay={showNav ? "block" : "none"}
            />
          </ListItem>
          <ListItem>
            <MenuItem
              to="#"
              text="Git"
              isMobile={true}
              mDisplay={showNav ? "block" : "none"}
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default MobileNav;
