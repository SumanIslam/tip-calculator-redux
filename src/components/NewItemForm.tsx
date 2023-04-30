import { Box, Button, Input, Label } from '@twilio-paste/core';
import { useNewItemForm } from '../hooks/useNewItemForm';
import { AddMenuItemAction, IItem } from '../store/items/types';

type IProps = {
	addMenuItem: (item: IItem) => AddMenuItemAction;
};

export const NewItemForm = ({ addMenuItem }: IProps) => {
	const {
		name,
		price,
		quantity,
		setName,
		handlePrice,
		handleQuantity,
		handleSubmit,
		isValid,
	} = useNewItemForm(addMenuItem);

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
