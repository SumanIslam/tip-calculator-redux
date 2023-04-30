import { IItem } from './items/types';
import { ITipPercentage } from './tip-percentage/types';

export interface IStore {
	items: IItem[];
	tipPercentage: ITipPercentage;
}