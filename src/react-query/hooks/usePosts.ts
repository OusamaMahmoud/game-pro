import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface Posts {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}
interface QuaryPost {}
const usePosts = (page: number) =>
  useInfiniteQuery<Posts[],Error>({
    queryKey: ["posts", page],
    queryFn: ({ pageParam }) =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            pageParam,
          },
        })
        .then((res) => res.data),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

export default usePosts;
