export const CACHE_QUERY_KEYS: Readonly<any> = {
  useGetCharacters: 'getCharacters',
};

export const CACHE_QUERY_CONFIG = {
  staleTime: 120000,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  retry: 1,
  retryDelay: 3000,
};