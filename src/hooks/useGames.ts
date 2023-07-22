import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import apiClient, { FeatchResponse } from "../Services/api-client";
export interface platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery<FeatchResponse<Game> ,Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient.get<FeatchResponse<Game>>("/games", {
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.searchText,
        },
      }).then(res => res.data),
    staleTime: 10 * 1000,
  });
export default useGames;
