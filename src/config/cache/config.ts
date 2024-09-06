export enum CACHE_QUERY_KEYS {
	useGetCharacters = 'getCharacters',
	useGetCharacter = 'getCharacter',
	useGetComics = 'getComics',
}

const ONE_HOUR_IN_MILISECONDS = 3600000;

export const CACHE_QUERY_CONFIG = {
	staleTime: ONE_HOUR_IN_MILISECONDS,
	refetchOnWindowFocus: false,
	refetchOnReconnect: false,
	retry: 1,
	retryDelay: 3000,
};
