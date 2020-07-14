import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

import { SelectCategory } from '../components';
import transformToSelect from '../helpers/transformToSelect';

const ALL_CATEGORY = gql`
	{
		allCategory {
			title
			id
		}
	}
`;

function Product(props) {
	const { loading, error, data } = useQuery(ALL_CATEGORY);
	const [selectedOption, setSelectedOption] = useState({});

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

	return (
		<SelectCategory
			selectedOption={selectedOption}
			setSelectedOption={setSelectedOption}
			categories={transformToSelect(data)}
		/>
	);
}

export default Product
