import React from 'react';
import { create } from 'react-test-renderer';

import Content from './Content';

describe('Test Content', () => {
	it('renders correctly', () => {
		create(
			<Content>
				<p>Bem vindo</p>
			</Content>
		);
	});
});
