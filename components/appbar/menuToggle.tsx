import { FC } from "react";
import { Box, IconButton } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "./appbarSlice";
import { RootState } from "../../utils/Store";
import {useState } from "react";

const MenuToggle: FC<{onClick:()=>void, clicked:boolean}> = ({onClick, clicked}) => {
  //const dispatch = useDispatch();
  const [showMenuIcon, setShowMenuIcon] = useState<boolean>(true);
  return (
    <Box
      display={{ base: "block", md: "none" }}
    >
      <IconButton onClick={onClick} aria-label="menu toggle button">
      {!clicked ? <AiOutlineMenu /> : <AiOutlineClose />}
      </IconButton>
    </Box>
  );
};

export default MenuToggle;
