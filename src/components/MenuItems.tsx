import { Stack } from '@twilio-paste/stack';
import MenuItem from './MenuItem';
import { IItem } from '../store/items/types'

export const MenuItems = ({ items }: {items: IItem[]}) => {
	return (
		<Stack orientation='vertical' spacing='space60'>
			{items.map((item) => (
				<MenuItem {...item} key={item.id} />
			))}
		</Stack>
	);
};
