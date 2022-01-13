import styled from "styled-components";

export const Container = styled.div`
    padding-bottom: 60px;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const SectionTop = styled.div`
    padding: 28px 24px;
    border-radius: 6px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);

    div {
        background-color: ${props => props.theme.colors.white};
    }
`;

export const CardHeader = styled.div`
    margin-top: 20px;
    display: flex;

    > img {
        margin-right: 12px;
        filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }

    > div {
        > h3 {
            font-style: normal;
            font-weight: bold;
            font-size: 18px;
            line-height: 22px;
            color: ${props => props.theme.colors.tertiary};
        }

        > p {
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 18px;
            color: ${props => props.theme.colors.tertiary};
        }
    }
`;

export const RowTop = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    > h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 22px;
        color: ${props => props.theme.colors.tertiary};
    }

    > div {
        display: flex;
        justify-content: center;
        align-items: center;

        > input {
            border-radius: 6px;
        }
    }
`;

export const RowCenter = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    > div:nth-child(1) {
        width: 280px;
    }

    > div:nth-child(2) {
        width: 1170px;
        display: flex;
        justify-content: space-between;
        > div {
            width: 49%;
            display: flex;
            justify-content: space-between;
        }
    }


`;

export const RowBottom = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Card = styled.div`
    width: 500px;
    border-radius: 6px;
    padding: 24px 20px;
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
`;

export const Title = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: ${props => props.theme.colors.tertiary};
`;

export const Charts = styled.div`
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
`;

export const ChartValuesLeft = styled.div`
    background-color: ${props => props.theme.colors.white};
    position: absolute;
    top: 290px;
    left:1065px;

    > p {
        text-align: center;
        :nth-child(2){
            margin-top: -10px;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: ${props => props.theme.colors.tertiary};
        }
    }
`;

export const ChartValuesRight = styled.div`
    background-color: ${props => props.theme.colors.white};
    position: absolute;
    top: 290px;
    left:1605px;

    > p {
        text-align: center;
        :nth-child(2){
            margin-top: -10px;
            font-style: normal;
            font-weight: bold;
            font-size: 20px;
            line-height: 24px;
            text-align: center;
            color: ${props => props.theme.colors.tertiary};
        }
    }
`;

export const Text = styled.p`
    margin: 0 !important;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    color: ${props => props.theme.colors.tertiary};
`;

export const ImgStatus = styled.img`
    margin-right: 12px;
`;

export const Content = styled.div`
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    > div {
        background-color: ${props => props.theme.colors.white};
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export const OccurrencesMouth = styled.div`
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
    padding: 24px;
    width: 48%;
    border-radius: 6px;
`;

export const OccurrencesTop = styled.div`
    background-color: ${props => props.theme.colors.white};
    > div {
        background-color: ${props => props.theme.colors.white};
        display: flex;
        justify-content: space-between;

        > div {
            background-color: ${props => props.theme.colors.white};
            > h3 {
                font-style: normal;
                font-weight: bold;
                font-size: 18px;
                line-height: 22px;
            }
        }
     }
`;

export const ProgressContent = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.white};
`;

export const Progress = styled.div`
    width: 45%;
    background-color: ${props => props.theme.colors.white};
    margin-top: 30px;

    > div {
        display: flex;
        justify-content: space-between;
    }
`;


export const TotalOccurrences = styled.div`
    background-color: ${props => props.theme.colors.white};
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.06);
    border-radius: 6px;

`;

export const TotalContent = styled.div`
    background-color: ${props => props.theme.colors.white};
    display: flex;
    justify-content: space-between;
    padding: 24px;

    > div {
        background-color: ${props => props.theme.colors.white};
        >div {
            background-color: ${props => props.theme.colors.white};
        }
        > h3 {
            margin-top: 10px;
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 29px;
            color: #5E5873;
        }
    }
`;