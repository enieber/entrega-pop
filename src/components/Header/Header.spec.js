import React from 'react';
import { create } from 'react-test-renderer';

import Header from './Header';

describe('Test Header', () => {
	it('renders correctly', () => {
		create(<Header />);
	});
});
