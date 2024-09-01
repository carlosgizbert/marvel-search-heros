import axios from 'axios';
import CryptoJS from 'crypto-js';

export const API_BASE_URL = import.meta.env.VITE_BASE_URL;
export const MARVEL_PUBLIC_KEY = import.meta.env.VITE_MARVEL_PUBLIC_KEY;
export const MARVEL_PRIVATE_KEY = import.meta.env.VITE_MARVEL_PRIVATE_KEY;

export const CACHE_QUERY_KEYS: Readonly<any> = {
  useGetCharacters: 'getCharacters',
};

export const QUERIES_CONFIG = {
  staleTime: 120000,
  refetchOnWindowFocus: false,
  refetchOnReconnect: false,
  retry: 1,
  retryDelay: 3000,
};

const generateMarvelAuthParams = () => {
  const ts = new Date().getTime();
  const hash = CryptoJS.MD5(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY).toString();

  return {
    ts,
    apikey: MARVEL_PUBLIC_KEY,
    hash,
  };
};

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  params: generateMarvelAuthParams(),
});
