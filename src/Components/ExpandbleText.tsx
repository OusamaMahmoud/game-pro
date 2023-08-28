import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}
const ExpandbleText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const limit = 300;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = expanded ? children : children.substring(0, limit) + "...";

  return (
    <Text>
      {summary}
      <Button
        marginLeft={1}
        size={"xs"}
        fontWeight={"bold"}
        colorScheme="yellow"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "read More"}
      </Button>
    </Text>
  );
};

export default ExpandbleText;
