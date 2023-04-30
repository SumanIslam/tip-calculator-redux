import { useState, ChangeEvent } from 'react';
import { handleNumberField } from '../utils/utilities';
import { IItem, AddMenuItemAction } from '../store/items/types';
import { v4 as uuidv4 } from 'uuid'

export const useNewItemForm = (addMenuItem: (item: IItem) => AddMenuItemAction) => {
  const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);

  const isValid = () => {
		if (!name) return false;
		if (price === null || price === undefined || price <= 0) return false;
		if (quantity === null || quantity === undefined || quantity <= 0)
			return false;
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

    const newItem = {
      id: uuidv4(),
      name,
      price,
      quantity
    }

		addMenuItem(newItem);

		setName('');
		setPrice(0);
		setQuantity(0);
	};

  return {
		name,
		price,
		quantity,
    isValid,
		setName,
		handlePrice,
		handleQuantity,
		handleSubmit,
	};
}