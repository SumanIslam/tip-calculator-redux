import { combineReducers, createStore } from 'redux';
import itemsReducer from './items/reducer';
import tipPercentageReducer from './tip-percentage/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const reducer = combineReducers({
	items: itemsReducer,
	tipPercentage: tipPercentageReducer,
});

export const store = createStore(reducer, composeWithDevTools());

export default store;
