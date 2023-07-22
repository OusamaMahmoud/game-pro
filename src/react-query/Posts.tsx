import { Button, List, ListItem } from "@chakra-ui/react";

import React from "react";
import usePosts from "./hooks/usePosts";

const Posts = () => {
  const pageSize = 10;
  const { data, fetchNextPage, isFetchingNextPage, error, isError, isLoading } =
    usePosts(1);

  {
    isLoading ? (
      <span>loading...</span>
    ) : (
      isError && <span>THERE IS AN ERROR : {error.message}</span>
    );
  }
  return (
    <>
      <List>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <ListItem key={post.id}>{post.title}</ListItem>
            ))}
          </React.Fragment>
        ))}
      </List>
      <Button onClick={() => fetchNextPage()} isDisabled={isFetchingNextPage}>
        {isFetchingNextPage ? "Loading..." : "LoadMore"}
      </Button>
    </>
  );
};

export default Posts;
