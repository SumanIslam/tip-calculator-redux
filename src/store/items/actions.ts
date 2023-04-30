import type { IItem } from './types';

export const ADD_MENU_ITEM = 'ADD_MENU_ITEM';
export const REMOVE_MENU_ITEM = 'REMOVE_MENU_ITEM';
export const UPDATE_MENU_ITEM = 'UPDATE_MENU_ITEM';

export const addMenuItem = (item: IItem) => {
	return {
		type: ADD_MENU_ITEM,
		payload: item,
	};
};

export const removeMenuItem = (id: string) => {
	return {
		type: REMOVE_MENU_ITEM,
		payload: id,
	};
};

export const updateMenuItem = (id: string) => {
	return {
		type: UPDATE_MENU_ITEM,
		payload: id,
	};
};
