import { useQuery } from "@tanstack/react-query";
import platformService from "../Services/platformService";
import platforms from "../data/platforms";

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: platformService.getQuery,
    staleTime: 24 * 60 * 60* 1000,
    initialData: platforms,
  });

export default usePlatforms;
