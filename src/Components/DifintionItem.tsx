import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DifintionItem = ({ term, children }: Props) => {
  return (
    <Box>
      <Heading>{term}</Heading>
      <dd> {children}</dd>
    </Box>
  );
};

export default DifintionItem;
