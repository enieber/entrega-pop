import styled from 'styled-components';

import theme from '../../assets/theme';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background-color: ${theme.colors.primary};
	padding: 10px;
`;

export const Title = styled.h1`
  color: ${theme.colors.dark};
`

export const LogoImage = styled.img`

`;
