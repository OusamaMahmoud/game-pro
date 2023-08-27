import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import NavBar from "../Components/NavBar";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Box padding={5} marginY={3}>
        <NavBar />
        <Heading>Oops</Heading>
        <Text marginY={3} fontSize={20}>
          {isRouteErrorResponse(error)
            ? "This page is not found"
            : "Unexpected error"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
