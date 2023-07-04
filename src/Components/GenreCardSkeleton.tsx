import {
    List,
    ListItem,
    SkeletonText
} from "@chakra-ui/react";

const GenreCardSkeleton = () => {
  return (
    <>
      <List>
        <ListItem>
            <SkeletonText noOfLines={30} spacing={5}></SkeletonText>
        </ListItem>
      </List>
    </>
  );
};

export default GenreCardSkeleton;
