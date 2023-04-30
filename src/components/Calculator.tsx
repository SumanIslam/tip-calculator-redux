import { Card } from '@twilio-paste/core';
import { TipSelectContainer } from '../containers/TipsSelectContainer';

import { MenuItemsContainer } from '../containers/MenuItemsContainer';
import { NewItemFormContainer } from '../containers/NewItemFormContainer';
import { Summary } from './Summary';

const Calculator = () => {
	return (
		<Card>
			<NewItemFormContainer />
			<MenuItemsContainer />
			<TipSelectContainer />
			<Summary />
		</Card>
	);
};

export default Calculator;
