import {
	Box,
	Button,
	Card,
	Flex,
	Heading,
	Input,
	Label,
} from '@twilio-paste/core';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { removeMenuItem } from '../store/items/actions';

import { useState, useEffect } from 'react';

import { toCurrency } from '../utils/utilities';
import { IItem, RemoveMenuItemAction } from '../store/items/types';

interface IProps extends IItem {
	removeMenuItem: (id: string) => RemoveMenuItemAction;
}

export const MenuItem = ({ id, name, price, quantity, removeMenuItem }: IProps) => {
	const [, setPrice] = useState<number>();
	const [, setQuantity] = useState<number>();

	useEffect(() => {
		setPrice(price);
		setQuantity(quantity);
	}, [price, quantity]);

	return (
		<Card paddingTop='space40'>
			<Heading variant='heading30' as='h3'>
				{name}
			</Heading>
			<Flex>
				<Box padding='space20'>
					<Label htmlFor={`$item-${id}-price`}>Price</Label>
					<Input
						id={`$item-${id}-price`}
						insertBefore={<div>$</div>}
						value={price.toString()}
						type='number'
						onChange={(event) => setPrice(parseInt(event.target.value, 10))}
					/>
				</Box>
				<Box padding='space20'>
					<Label htmlFor={`$item-${id}-quantity`}>Quantity</Label>
					<Input
						id={`$item-${id}-quantity`}
						value={quantity.toString()}
						type='number'
						onChange={(event) => setQuantity(parseInt(event.target.value, 10))}
					/>
				</Box>
				<Box padding='space20' textAlign='right' width='100%'>
					<Heading as='h2' variant='heading50'>
						Total
					</Heading>
					{toCurrency(price * quantity)}
				</Box>
			</Flex>
			<Box width='100%' textAlign='right'>
				<Button
					variant='destructive_secondary'
					size='small'
					onClick={() => removeMenuItem(id)}
				>
					Remove
				</Button>
			</Box>
		</Card>
	);
};

const mapDispatchToProps = (dispatch: Dispatch) => {
	return {
		removeMenuItem: (id: string) => dispatch(removeMenuItem(id))
	}
};

export default connect(null, mapDispatchToProps)(MenuItem);
