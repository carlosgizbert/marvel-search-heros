import { API_BASE_URL, api } from '@/services/index';
import { GetCaractersResponse, GetCharactersQueryParams } from './dto';

const CHARACTER_API_BASE_URL = `${API_BASE_URL}/v1/public/characters`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getSearchParams = (params: any) =>
  `?${new URLSearchParams(params).toString()}`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function getCharacters(params?: GetCharactersQueryParams) {
  let path = CHARACTER_API_BASE_URL;

  if (params) {
    path = `${CHARACTER_API_BASE_URL}${getSearchParams(params)}`;
  }

  const { data } = await api.get<GetCaractersResponse>(path);
  return data;
}
