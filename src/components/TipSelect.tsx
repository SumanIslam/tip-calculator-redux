import { Box, Label, Option, Select } from '@twilio-paste/core';
import type { IUpdateTipPercentageAction } from '../store/tip-percentage/types';

interface IProps {
	tipPercentage: number;
	updateTip: (tip: number) => IUpdateTipPercentageAction;
}

export const TipSelect = ({ tipPercentage, updateTip }: IProps) => {
	return (
		<Box marginY='space80'>
			<Label htmlFor='tip-amount'>How much would you like to tip?</Label>
			<Select
				id='tip-amount'
				value={tipPercentage.toString()}
				onChange={(event) => updateTip(parseInt(event.target.value))}
			>
				<Option value='15'>15%</Option>
				<Option value='20'>20%</Option>
				<Option value='25'>25%</Option>
			</Select>
		</Box>
	);
};

export default TipSelect;
