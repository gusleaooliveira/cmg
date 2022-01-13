import React from "react";
import {
    Container
} from './index.styled';
import Select from 'react-select';

const MultipleSelect: React.FC = () => {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return (
        <Container>
            <Select options={options} />
        </Container>
    );
};

export default MultipleSelect;