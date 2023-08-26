import { useInfiniteQuery } from "@tanstack/react-query";
import { FeatchResponse } from "../Services/api-client";
import gameService, { Game } from "../Services/gameService";
import useGameQueryStore from "../stores/gameQueryStore";

const useGames = () => {
  const  gameQuery  = useGameQueryStore(s => s.gameQuery);
  return useInfiniteQuery<FeatchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      gameService.getQuery({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
          page: pageParam,
        },
      }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: 24 * 60 * 60 * 1000,
  });
};

export default useGames;
