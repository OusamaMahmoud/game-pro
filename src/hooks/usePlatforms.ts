import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
const apiClient = new APIClient<Platform>("/platforms/lists/parents");
const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getQuery,
    staleTime: 10 * 1000,
  });

export default usePlatforms;
