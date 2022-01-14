import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container  = styled.div`
    grid-area: MH;
    display: flex;
    position: fixed;
    right: 0;
    left: 260px;
    top: 0;
    z-index: 999;
    justify-content: right;
    align-items: center;
    margin: 16px 32px;
    padding: 12px 20px;
    border-radius: 6px;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
`;

export const Item = styled(Link)`
`;

export const Person = styled.div`
    margin-left: 32px;
    background-color: ${props => props.theme.colors.white}; 

    > p:nth-child(1) {
        text-align: right;
        margin: 0;
        padding: 0;
        color: ${props => props.theme.colors.tertiary} !important;
        font-size: 14px !important;
        font-weight: 400 !important;
    }

    > p:nth-child(2){
        text-align: right;
        margin: 0;
        padding: 0;
        color: ${props => props.theme.colors.secondary} !important;
        font-size: 12px !important;
        font-weight: 400 !important;
    }
`;