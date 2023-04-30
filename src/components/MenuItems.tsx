import { Stack } from '@twilio-paste/stack';
import { IItem } from '../store/items/types';
import MenuItem from './MenuItem';

type IProps = {
	items: IItem[];
};

export const MenuItems = ({ items }: IProps) => {
	return (
		<Stack orientation='vertical' spacing='space60'>
			{items.map((item) => (
				<MenuItem {...item} key={item.id} />
			))}
		</Stack>
	);
};
