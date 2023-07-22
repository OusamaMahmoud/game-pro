import { useQuery } from "@tanstack/react-query";
import apiClient, { FeatchResponse } from "../Services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: () =>
      apiClient.get<FeatchResponse<Platform>>("/platforms/lists/parents").then((res) => res.data),
    staleTime: 10 * 1000,
  });

export default usePlatforms;
