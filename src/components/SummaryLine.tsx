import React, { ReactNode } from 'react';
import { Box, Flex, Heading } from '@twilio-paste/core';

type Prop = {
	title: string;
	children: ReactNode;
};

export const SummaryLine = ({ title, children }: Prop) => {
	return (
		<Flex>
			<Box width='100%' textAlign='right'>
				<Heading as="h2" variant='heading50'>{title}</Heading>
			</Box>
			<Box width='100%' textAlign='right'>
				{children}
			</Box>
		</Flex>
	);
};