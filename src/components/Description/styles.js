import styled from 'styled-components'

import theme from '../../assets/theme'

export const Conteiner = styled.div`
    width: 40vw;
    font-size: 2rem;
    color: ${theme.colors.light};
    @media screen and (max-width: 720px) {
        width: 100vw;
        font-size: 1.5rem;
    }
`
