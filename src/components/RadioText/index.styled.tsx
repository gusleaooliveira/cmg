import styled from "styled-components";
import { ILabel } from "./index.types";

export const Group = styled.div`
  
`

export const LabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    
`

export const Label = styled.label<ILabel>`
    ${(props)=>{
        switch (props.checked) {
            case true:
                return `
                    background-color: ${props.color};
                    color: #fff;
                    padding: 1px 9px;
                    border-radius: 17px;
                `
            case false:
                return  `
                    background-color: #6E6B7B;
                    color: #c8c8c8;
                    padding: 1px 9px;
                    border-radius: 17px;
                `
        }
    }}
`