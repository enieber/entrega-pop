import styled from 'styled-components';

import theme from '../../assets/theme';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-around;
	height: 85vh;
	padding: 10px;
	background-color: ${theme.colors.secundary};
	@media screen and (max-width: 720px) {
		flex-direction: column;
	}
`;
