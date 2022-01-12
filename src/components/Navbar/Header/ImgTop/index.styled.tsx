import styled from 'styled-components'
import { Badge, Image } from 'react-bootstrap'

export const ContainerStyled = styled.div`
    position: relative;
    width: 28px;
    height: 28px;
    background: none;
`
export const BadgeStyled  = styled(Badge)`
    position: absolute;
    top: 2px;
    right: 0;
    border-radius: 50% !important;
    width: 18px !important;
    height: 18px !important;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ImageStyled = styled(Image)`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 18px;
`