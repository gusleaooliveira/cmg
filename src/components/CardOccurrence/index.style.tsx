import styled from "styled-components";
import { IProps } from "./index.types";

export const Container = styled.div`
    background-color: ${props => props.theme.colors.white};
    border-radius: 6px;
    display: flex;
    flex-direction: row;
    margin-bottom: 20px;

    div, section {
        background-color: ${props => props.theme.colors.white};
    }
    img {
        width: 28px;
        height: 28px;
    }
`;

export const SectionLeft = styled.section<IProps>`
    width: 350px;
    > header {
        ${(props) => {
            if(props.civiliansWounded != 0 || props.civiliansDead != 0 || props.agentDead != 0 || props.agentWounded != 0){
                return `
                    background: #EA5455;
                `;
            } else {
                return `
                    background: #FF9F43;
                `;
            }
        }}


        padding: 16px 20px;
        border-top-left-radius: 6px;
        

        > p {
            color: ${props => props.theme.colors.white};
            margin: 0 !important;
            padding: 0 !important;

            > b {
                color: ${props => props.theme.colors.white};
                margin: 0 !important;
                padding: 0 !important;
            }
        }
    }
`;

export const Locale = styled.div`
    border-right: 1px solid ${props => props.theme.colors.gray};
    padding: 16px 20px;

    p {
        margin: 0 !important;
        padding: 0 !important;
    }

    > div {
        display: flex;
        margin-bottom: 15px;

        > h3 {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
        }
        
        > div {
            margin-left: 15px;
        }
    }
`;

export const Title = styled.h4<IProps>`

        ${(props) => {
            if(props.civiliansWounded != 0 || props.civiliansDead != 0 || props.agentDead != 0 || props.agentWounded != 0){
                return `
                    color: #EA5455;
                    font-weight: 600;
                    font-size: 18px;
                `;
            } else {
                return `
                    color: #FF9F43;
                    font-weight: 600;
                    font-size: 18px;
                `;
            }
        }}

`;

export const SectionRight = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 16px 20px;
`;

export const Date = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const Content = styled.div`
    display: flex;
`;

export const ContentLeft = styled.div`
    > div {
        > div {
            display: flex;
            align-items: center;
            margin-bottom: 20px;

            > h4 {
                font-style: normal;
                font-weight: 500 !important;
                font-size: 18px !important;
                line-height: 23px !important;
            }

            > p {
                margin: 0 !important;
                padding: 0 !important;
            }
        }
    }
`;

export const ContentRight = styled.div`
    margin-left: 32px;

    > div {
        > h3 {
            font-style: normal;
            font-weight: 500 !important;
            font-size: 18px !important;
            line-height: 23px !important;
        }

        > p {
            font-style: normal;
            font-weight: normal;
            font-size: 12px !important;
            line-height: 18px !important;
            color: #6E6B7B;
            opacity: 0.6;
        }
    }
`;