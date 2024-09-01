import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getCharacters } from "./api";
import { CACHE_QUERY_KEYS, QUERIES_CONFIG } from "@/services/index";
import { GetCaractersResponse, GetCharactersQueryParams } from "./dto";

export function useGetCharacters(
  queryParams?: GetCharactersQueryParams
): UseQueryResult<GetCaractersResponse, Error> {
  
  const hasQueryParams = !!queryParams
  const isFirstLoad = queryParams === undefined

  return useQuery({
    enabled: hasQueryParams || isFirstLoad,
    queryKey: [CACHE_QUERY_KEYS.useGetCharacters, queryParams],
    queryFn: () => getCharacters(queryParams),
    ...QUERIES_CONFIG,
  });
}
