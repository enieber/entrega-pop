import React, { useState } from 'react';

import Button from '../Button'
import { Container } from './styles'

export default function (props) {
	const [cep, setCep] = useState('');

	return (
		<Container>
			Selecione CEP
			<input
				value={cep}
				onChange={(event) => {
					setCep(event.target.value);
				}}
			/>
			<Button onPress={props.onPress}>Selecionar</Button>
		</Container>
	);
}
