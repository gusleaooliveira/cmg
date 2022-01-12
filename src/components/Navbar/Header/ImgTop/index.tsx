import React from 'react'
import { InterfaceProps } from './index.types'
import { BadgeStyled, ContainerStyled, ImageStyled } from './index.styled'

const ImgTop: React.FC<InterfaceProps> = ({
    src, value
}) => {
    return (
        <ContainerStyled>
            <ImageStyled src={src} />
            <BadgeStyled pill bg="danger">{value}</BadgeStyled>
        </ContainerStyled>
    )
}

export default ImgTop;