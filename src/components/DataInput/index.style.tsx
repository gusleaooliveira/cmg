import styled from "styled-components";

export const Container = styled.div`
    padding: 12px 7px;
    border: 1px solid #D8D6DE;
    border-radius: 6px;

    > input {
        -webkit-appearance: none;
        border: none;
        outline: none;

        :focus, :active {
            -webkit-appearance: none;
            outline: none;
            border: none;
        }

    }
    input[type="date"]::-webkit-clear-button {
        display: none;
    }
    input[type="date"]::-ms-clear {
        display: none;
    }

`;