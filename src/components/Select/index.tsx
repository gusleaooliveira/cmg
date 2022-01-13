import React from "react";
import {
    Container
} from './index.style';
import Form from 'react-bootstrap/Form'

type list = {
    value: string,
    label: string
}

interface IProps {
    label: string,
    ariaLabel: string,
    list: list[]
}

const Select: React.FC <IProps> = (props) => {
    return (
        <Container>
            <Form.Select
                aria-label={props.ariaLabel}
            >
                {props.list.map(id => {
                    return (
                        <option value={id.value}>{id.label}</option>
                    )
                })}
            </Form.Select>
        </Container>
    );
};

export default Select;