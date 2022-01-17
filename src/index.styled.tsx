import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 260px auto;

    grid-template-areas: 
        'AS MH'
        'AS CT'
    ;
`;

export const Content = styled.div`
    grid-area: CT;
    background-color: #F8F8F8;
    margin-left: 32px;
    margin-right: 32px;
    margin-top: 150px;
`;