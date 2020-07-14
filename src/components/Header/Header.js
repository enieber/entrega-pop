import React from 'react';

import Logo from '../../assets/logo.png';
import { Container, Title, LogoImage } from './styles';

function Header() {
	return (
		<Container>
			<LogoImage src={Logo} />
			<Title>Entrega POP</Title>
            <div></div>
		</Container>
	);
}

export default Header;
