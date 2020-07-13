import React from 'react';
import { create } from 'react-test-renderer';

import SelectLocation from './SelectLocation';

describe('Test SelectLocation', () => {
  it('renders correctly', () => {
      create(
      <SelectLocation  
      />,
    );
  });
});
