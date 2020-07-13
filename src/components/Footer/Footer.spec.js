import React from 'react';
import { create } from 'react-test-renderer';

import Footer from './Footer';

describe('Test Footer', () => {
  it('renders correctly', () => {
      create(
      <Footer />,
    );
  });
});
