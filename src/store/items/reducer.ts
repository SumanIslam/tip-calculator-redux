import { v4 as uuidv4 } from 'uuid';
import type { IItem, IMenuItemAction } from './types';

export const initialItems: IItem[] = [
	{ id: uuidv4(), name: 'Tofu Roast', price: 14, quantity: 1 },
	{ id: uuidv4(), name: 'Kacci Biriyani', price: 10, quantity: 1 },
	{ id: uuidv4(), name: 'Vegan Ham', price: 12, quantity: 1 },
];

export const reducer = (state = initialItems, action: IMenuItemAction) => {
	return state;
};

export default reducer;
