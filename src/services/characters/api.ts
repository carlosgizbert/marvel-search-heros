import { API_BASE_URL, api } from "@/services/index";
import { GetCaractersResponse, GetCharactersQueryParams } from "./dto";

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
