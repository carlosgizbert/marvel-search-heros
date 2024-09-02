import { API_BASE_URL, api } from "@/services/index";
import {
  GetCaracterResponse,
  GetCaractersResponse,
  GetCharacterQueryParams,
  GetCharactersQueryParams,
} from "./dto/characters";
import { GetComicsQueryParams, GetComicsResponse } from "./dto/comics";

const CHARACTER_API_BASE_URL = `${API_BASE_URL}/v1/public/characters`;

const serializeQueryParams = (params: GetCharactersQueryParams) =>
  `?${new URLSearchParams(
    params as
      | string
      | string[][]
      | Record<string, string>
      | URLSearchParams
      | undefined
  ).toString()}`;

export async function getCharacters(params?: GetCharactersQueryParams) {
  let path = CHARACTER_API_BASE_URL;

  if (params) {
    path = `${CHARACTER_API_BASE_URL}${serializeQueryParams(params)}`;
  }

  const { data } = await api.get<GetCaractersResponse>(path);
  return data;
}

export async function getCharacter({ id }: GetCharacterQueryParams) {
  const path = `${CHARACTER_API_BASE_URL}/${id}`;

  const { data } = await api.get<GetCaracterResponse>(path);
  return data;
}

export async function getComics({ characterId }: GetComicsQueryParams) {
  const path = `${CHARACTER_API_BASE_URL}/${characterId}/comics`;

  const { data } = await api.get<GetComicsResponse>(path);
  return data;
}
