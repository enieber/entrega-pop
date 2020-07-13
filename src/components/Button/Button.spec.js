import React from 'react';
import { create } from 'react-test-renderer';

import Button from './Button';

describe('Test Button', () => {
  it('renders correctly', () => {
        const fn = jest.fn();

        create(<Button onPress={fn}>Touch</Button>);
  });
});
