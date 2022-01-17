import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    padding-bottom: 30px;


    @media only screen and (max-width: 1600px) {
        padding-bottom: 30px;
    }
`;

export const Nav = styled.nav`

`;

export const NavBtn = styled.button`
    background: none;
    border: none;

    :focus {
        border-bottom: 4px solid ${props => props.theme.colors.secondary};
        font-weight: 700;
    }
`;

export const ShowOccurence = styled.button`
    background: ${props => props.theme.colors.secondary};
    border: none;
    border-radius: 6px;
    color: ${props => props.theme.colors.white};
    padding: 14px 26px;
`;

export const Content = styled.section`
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    > select {
        height: 50px; 
        width: 171px;
        background: none;
        border: 1px solid #EBE9F1;

        > option {
            background-color: ${props => props.theme.colors.white};
        }
    }
`;

export const Search = styled.div`
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 18px 22px;
    border: 1px solid #EBE9F1;
    border-radius: 6px;
    width: 600px;
    height: 50px;

    > label {
        cursor: pointer;
        margin-right: 12px;
    }

    > input {
        border: none;
        outline: none;
        width: auto;
    }
`;

export const RadioGroup = styled.fieldset`
    width: 760px;
    margin: 20px 0;
    display: flex;
    justify-content: space-evenly;

    :focus {
        font-weight: 700;
    }
`;

export const List = styled.section`

`;