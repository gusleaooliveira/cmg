import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navigation = styled.div`
    grid-area: AS;
    background: #FFFFFF !important;
    display: flex;
    flex-direction: column;
    padding: 32px 16px;
    position: fixed;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
`;

export const Nav = styled.nav`
    margin-top: 40px;
    background-color: ${props => props.theme.colors.white};
`;

export const NavIcon = styled.div`
    background: none;
    > img {
        background: none;
    }
`;

export const NavContent = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    width: 230px;
    background-color: #F8F8F8;
    border-radius: 5px;
    padding: 9px 13px;
    margin-bottom: 8px;
    margin-top: 8px;
`;

export const Item = styled(Link)`
    color: rgba(110, 107, 123, 1);
    text-decoration: none;

    :hover {

    }
`;