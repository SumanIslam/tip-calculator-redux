import { Box, Button, Input, Label } from '@twilio-paste/core';
import { ChangeEvent, useState } from 'react';
import { handleNumberField } from '../utils/utilities';

export const NewItemForm = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

	const isValid = () => {
		if (!name) return false;
		if (price === null || price === undefined || price <= 0) return false;
		if (quantity === null || quantity === undefined || quantity <= 0) return false;
		return true;
	};

	const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
		const price = parseInt(e.target.value);

		handleNumberField(price, setPrice);
	};
	const handleQuantity = (e: ChangeEvent<HTMLInputElement>) => {
		const quantity = parseInt(e.target.value);

		handleNumberField(quantity, setQuantity);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(name, price, quantity)

		setName('');
		setPrice(0);
		setQuantity(0);
	};

	return (
		<Box marginBottom='space80'>
			<form onSubmit={handleSubmit}>
				<Box marginBottom='space80'>
					<Label htmlFor='item-name'>Item Name</Label>
					<Input
						id='item-name'
						type='text'
						value={name}
						placeholder='Enter item name...'
						onChange={(event) => setName(event.target.value)}
					/>
				</Box>
				<Box marginBottom='space80'>
					<Label htmlFor='item-price'>Price</Label>
					<Input
						id='item-price'
						type='number'
						insertBefore={<div>$</div>}
						value={price.toString()}
						onChange={handlePrice}
					/>
				</Box>
				<Box marginBottom='space80'>
					<Label htmlFor='item-quantity'>Quantity</Label>
					<Input
						id='item-quantity'
						type='number'
						insertBefore={<div>+</div>}
						value={quantity.toString()}
						onChange={handleQuantity}
					/>
				</Box>
				<Button disabled={!isValid()} type='submit' fullWidth variant='primary'>
					🍳 Add Item
				</Button>
			</form>
		</Box>
	);
};

export default NewItemForm;
