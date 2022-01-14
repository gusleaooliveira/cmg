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
    background-color: ${props => props.theme.colors.gray};
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

export const NavContent = styled(Link)`
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
    text-decoration: none;

    :hover {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.white};

        > p {
            color: ${props => props.theme.colors.white};
        }

        > img {
            filter: brightness(2.25);
        }
    }

    :focus {
        background-color: ${props => props.theme.colors.secondary};
        color: ${props => props.theme.colors.white};

        > p {
            color: ${props => props.theme.colors.white};
        }

        > img {
            filter: brightness(2.25);
        }
    }
`;

export const Icon = styled.img`

`;

export const IconSite = styled.img`

`;

export const SelectSite = styled.div`
    background-color: #F8F8F8;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 9px 13px;

    > p {
        padding: 0 !important;
        margin-top: 0 !important;
        margin-left: 10px !important;
        margin-right: 40px !important;
        margin-bottom: 0 !important;
    }
        
`;

export const ItemsSite = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.colors.white};
    color: rgba(110, 107, 123, 1);
    text-decoration: none;
`;

export const Item = styled.p`
    color: rgba(110, 107, 123, 1);
    text-decoration: none;
    padding: 0 !important;
    margin-top: 0 !important;
    margin-left: 10px !important;
    margin-right: 0 !important;
    margin-bottom: 0 !important;
`;