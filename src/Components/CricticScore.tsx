import { Badge } from "@chakra-ui/react";

interface Props {
  scroe: number;
}

const CricticScore = ({ scroe }: Props) => {
  let background = scroe >= 70 ? "green" : scroe >= 70 ? "yellow" : "";
  return (
    <Badge
      fontSize={"20px"}
      padding={"5px"}
      borderRadius={"5px"}
      bg={background}
    >
      {scroe}
    </Badge>
  );
};

export default CricticScore;
