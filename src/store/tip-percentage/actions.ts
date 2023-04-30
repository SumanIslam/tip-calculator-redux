import { ITipPercentage } from './types';
export const TIP_PERCENTAGE_UPDATED = 'UPDATE_TIP_PERCENTAGE';

export const updateTip = (tipPercentage: ITipPercentage) => ({
	type: TIP_PERCENTAGE_UPDATED,
	payload: tipPercentage,
});
