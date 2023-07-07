import { Image, ImageProps } from "@chakra-ui/react";
import bull from "../assets/bullseye.png";
import moh from "../assets/oss.webp";
import thumsUp from "../assets/thumbs-up.webp";

interface Props {
  rating: number;
}
const Emoji = ({ rating }: Props) => {
  const emojiMap : {[key:number]:ImageProps} = {
    3: { src: moh, alt: "crash", boxSize: "25px" },
    4: { src: bull, alt: "recomended", boxSize: "25px" },
    5: { src: thumsUp, alt: "exceptional", boxSize: "35px" },
  };

  return <Image {...emojiMap[rating]} borderRadius={20} marginTop={2}/>;
};

export default Emoji;
