import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useSelector, useDispatch } from "react-redux";
import { toggleMenu } from "./appbarSlice";
import { RootState } from "../../utils/Store";
import {useState } from "react";

const MenuToggle: FC = () => {
  //const dispatch = useDispatch();
  const [showMenuIcon, setShowMenuIcon] = useState<boolean>(true);
  return (
    <Box
      onClick={() => setShowMenuIcon(!showMenuIcon)}
      display={{ base: "block", md: "none" }}
    >
      {showMenuIcon ? <AiOutlineMenu /> : <AiOutlineClose />}
    </Box>
  );
};

export default MenuToggle;
