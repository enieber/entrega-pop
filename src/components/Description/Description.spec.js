import React from 'react';
import { render } from '@testing-library/react'

import Description from './Description';

describe('Test Description', () => {
  it('renders correctly', () => {
    render(<Description text="bem vindo"/>);
  });
});
