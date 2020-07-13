import styled from 'styled-components';

import theme from '../../assets/theme';

export const Container = styled.div`
	display: flex;
	${(props) => {
		if (props.row) {
			return `
				 flex-direction:row;
				 align-items: center;
				justify-content: space-around;
			`;
		}
		return `
				 flex-direction:column;
				 justify-content: center;
			`;
	}};
	height: 85vh;
	padding: 10px;
	background-color: ${theme.colors.secundary};
`;
