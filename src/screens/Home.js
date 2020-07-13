import React from 'react';

import { Content, Description, SelectLocation } from '../components';

function HomeScreen() {
	return (
		<Content row>
			<Description text={'Adicione seu endereço para que possamos mostrar os lugares proximos'} />
			<SelectLocation />
		</Content>
	);
}

export default HomeScreen;
