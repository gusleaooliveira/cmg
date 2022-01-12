import React from "react";
import {
    Container
} from './index.style'
import downIcon from '../../assets/downIcon.png'

interface IProps {
    id: string,
    htmlFor: string,
    name: string
}

export const DataInput: React.FC<IProps> = (props) => {
    return (
        <Container>
            <input id={props.id} type="date" name={props.name} />
            <label htmlFor={props.htmlFor}>
                <img src={downIcon} alt="icon down" style={{width: '18px'}}/>
            </label>
        </Container>
    )
}

export default DataInput;