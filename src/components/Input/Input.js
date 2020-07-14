import React from 'react';

import { Container, InputStyled } from './styles';

function Input(props) {
	return (
		<Container>
			<InputStyled value={props.value} onChange={props.onChange} />
		</Container>
	);
}

export default Input;
