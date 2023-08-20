import { useQuery } from "@tanstack/react-query";
import genresService from "../Services/genresService";
import genres from "../data/genres";

const useGenres = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: genresService.getQuery,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: genres,
  });

export default useGenres;
