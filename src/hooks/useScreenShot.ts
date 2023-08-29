import { useQuery } from "@tanstack/react-query";
import APIClient from "../Services/api-client";
import ScreenShot from "../entities/ScreenShot";

const useScreenShot = (gameId: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ["scShots", gameId],
    queryFn: apiClient.getQuery,
  });
};

export default useScreenShot;
