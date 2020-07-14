import React, { useState } from 'react';

import Button from '../Button';
import Input from '../Input';
import { Container, Title } from './styles';

export default function (props) {
	const [cep, setCep] = useState('');

	return (
		<Container>
			<Title>Selecione CEP</Title>
			<Input
				value={cep}
				onChange={(event) => {
					setCep(event.target.value);
				}}
			/>
			<Button onPress={() => props.onPress(cep)}>Selecionar</Button>
		</Container>
	);
}
