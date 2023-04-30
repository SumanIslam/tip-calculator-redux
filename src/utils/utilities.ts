import React from 'react';
import format from 'format-number';

const formatAsCurrency = format({ prefix: '$', truncate: 2, padRight: 2 });

export const toCurrency = (number: number) => {
	if (!number) return formatAsCurrency(0);
	return formatAsCurrency(number);
};

export const handleNumberField = (
	value: number | typeof NaN,
	setState: React.Dispatch<React.SetStateAction<number>>
) => {
	if (Number.isNaN(value) || value <= 0) {
		setState(0);
	} else {
		setState(value);
	}
};
