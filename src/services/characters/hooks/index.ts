import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getCharacter, getCharacters, getComics } from "../api";
import {
  GetCaractersResponse,
  GetCharacterQueryParams,
  GetCharactersQueryParams,
} from "../dto/characters";
import { CACHE_QUERY_CONFIG, CACHE_QUERY_KEYS } from "@/config/cache/config";
import { GetComicsQueryParams, GetComicsResponse } from "../dto/comics";

export function useGetCharacters(
  queryParams?: GetCharactersQueryParams
): UseQueryResult<GetCaractersResponse, Error> {
  const hasQueryParams = !!queryParams;
  const isFirstLoad = queryParams === undefined;

  return useQuery({
    enabled: hasQueryParams || isFirstLoad,
    queryKey: [CACHE_QUERY_KEYS.useGetCharacters, queryParams],
    queryFn: () => getCharacters(queryParams),
    ...CACHE_QUERY_CONFIG,
  });
}

export function useGetCharacter({
  id,
}: GetCharacterQueryParams): UseQueryResult<GetCaractersResponse, Error> {
  return useQuery({
    enabled: !!id,
    queryKey: [CACHE_QUERY_KEYS.useGetCharacters, id],
    queryFn: () => getCharacter({ id }),
    ...CACHE_QUERY_CONFIG,
  });
}

export function useGetComics(
  queryParams: GetComicsQueryParams
): UseQueryResult<GetComicsResponse, Error> {
  return useQuery({
    enabled: !!queryParams.characterId,
    queryKey: [CACHE_QUERY_KEYS.useGetComics, queryParams.characterId],
    queryFn: () => getComics(queryParams),
    ...CACHE_QUERY_CONFIG,
  });
}
