export interface IItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export interface AddMenuItemAction {
	type: string;
  payload: IItem
}

export interface RemoveMenuItemAction {
  type: string;
  payload: string;
}

export interface UpdateMenuItemAction {
  type: string;
  payload: string;
}

export type IMenuItemAction  = AddMenuItemAction | RemoveMenuItemAction | UpdateMenuItemAction;