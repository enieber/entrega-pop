import React from 'react';
import cep from 'cep-promise';

import { Content, Description, SelectLocation } from '../components';

function HomeScreen() {
	return (
		<Content row>
			<Description text={'Adicione seu endereço para que possamos mostrar os lugares proximos'} />
			<SelectLocation
				onPress={async (cepNumber) => {
					try {
						if (cepNumber.length !== 0) {
							if (cepNumber.length >= 8) {
								const dataCity = await cep(cepNumber);
								console.log(dataCity);
							} else {
								alert('Digite um CEP valido');
							}
						} else {
							alert('oi')
						}
					} catch (err) {
						alert(err);
					}
				}}
			/>
		</Content>
	);
}

export default HomeScreen;
