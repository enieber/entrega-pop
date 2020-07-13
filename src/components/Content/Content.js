import React from 'react';

import { Container } from './styles';

export default function (props) {
	return <Container {...props}>{props.children}</Container>;
}
