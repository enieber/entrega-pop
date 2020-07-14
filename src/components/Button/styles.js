import styled from 'styled-components';

import theme from '../../assets/theme';

export const ButtonStyled = styled.button`
	height: 5vh;
	border: none;
	color: ${theme.colors.light};
	font-size: 1rem;
	background: ${theme.colors.dark};
	margin-top: 10px;
	margin-bottom: 10px;
	@media screen and (max-width: 720px) {
		font-size: 1rem;
		padding: 10px;
		height: 10vh;
	}
`;
