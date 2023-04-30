import { TIP_PERCENTAGE_UPDATED } from './actions';
import { ITipPercentage, IUpdateTipPercentageAction } from './types';

export const initialTipPercentage: ITipPercentage = 20;

export const reducer = (
	state = initialTipPercentage,
	action: IUpdateTipPercentageAction
) => {
	if (action.type === TIP_PERCENTAGE_UPDATED) {
		return action.payload;
	}

	return state;
};

export default reducer;
