import {
	Box,
	Button,
	Card,
	Flex,
	Heading,
	Input,
	Label,
} from '@twilio-paste/core';

import { useState, useEffect } from 'react';

import { toCurrency } from '../utils/utilities';
import { IItem } from '../store/items/types'

export const MenuItem = ({
	id,
	name,
	price,
	quantity,
}: IItem) => {
	const [, setPrice] = useState(price);
	const [, setQuantity] = useState(quantity);

	useEffect(() => {
		setPrice(price);
		setQuantity(quantity)
	}, [price, quantity])

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
					<Heading as="h2" variant='heading50'>Total</Heading>
					{toCurrency(price * quantity)}
				</Box>
			</Flex>
			<Box width='100%' textAlign='right'>
				<Button variant='destructive_secondary' size='small'>
					Remove
				</Button>
			</Box>
		</Card>
	);
};

export default MenuItem;
