import Dexie from 'dexie';

export const DB_NAME = '@search-heros:indexedDB';
export const DB_VERSION = 1;
export const FAVORITES_STORE_NAME = 'favorites';
export const RATINGS_STORE_NAME = 'ratings';
export const MAX_ALLOWED_FAVORITES = 5;

export interface Rating {
	id: number;
	rating: number;
}

const db = new Dexie(DB_NAME);

db.version(1).stores({
	favorites: 'id',
	ratings: 'id',
});

export const getData = async <T>(storeName: string): Promise<T[]> => {
	return db.table(storeName).toArray();
};

export const setData = async <T>(
	storeName: string,
	data: T[]
): Promise<void> => {
	await db.table(storeName).bulkPut(data);
};

export const deleteData = async (
	storeName: string,
	id: number
): Promise<void> => {
	await db.table(storeName).delete(id);
};
