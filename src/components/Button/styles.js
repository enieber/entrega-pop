import styled from 'styled-components';

import theme from '../../assets/theme';

export const ButtonStyled = styled.button`
	height: 5vh;
	border: none;
	color: ${theme.colors.light};
	font-size: 1rem;
	background: ${theme.colors.dark};
	@media screen and (max-width: 720px) {
		font-size: 1rem;
		padding: 10px;
		height: 10vh;
	}
`;
