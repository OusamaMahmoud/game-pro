import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import NavBar from "../Components/NavBar";

const LayOut = () => {
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default LayOut;
