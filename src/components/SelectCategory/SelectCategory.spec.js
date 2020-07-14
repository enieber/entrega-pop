import React from 'react';
import { create } from 'react-test-renderer';

import SelectCategory from './SelectCategory';

describe('Test SelectCategory', () => {
  it('renders correctly', () => {
    const selectedOption = {};
    const setSelectedOption = jest.mock();
    const data = [
      {
        value: 1,
        label: 'test 1',
      },
      {
        value: 2,
        label: 'test 2',
      },
    ];
    create(
      <SelectCategory
        defaultInputValue="Selecione uma categoria"
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
        categories={data}
      />,
    );
  });
});
