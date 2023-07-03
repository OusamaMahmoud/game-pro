import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const Skeletons = () => {
  return (
    <Card width={'300px'} borderRadius={'5px'}>
      <Skeleton height={'200px'} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default Skeletons;
