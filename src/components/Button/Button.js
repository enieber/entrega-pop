import React from 'react';

import { ButtonStyled } from './styles';

function Button(props) {
	return <ButtonStyled onClick={props.onPress}>{props.children}</ButtonStyled>;
}

export default Button;
