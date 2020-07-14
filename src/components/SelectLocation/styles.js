import styled from 'styled-components';

import theme from '../../assets/theme';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.p`
	font-size: 2rem;
	color: ${theme.colors.light};
`;
