import styled from "styled-components";

export const Input = styled.input`
    width: 80%;
    height: 100%;
    background: transparent;
    border: 0;
    outline: 0;
    padding-left: 24px;
    box-sizing: border-box;
    font-family: ${props => props.font};
    font-weight: 700;
    font-size: 20px;
    color: ${props => props.dark ? '#ffff' : '#2D2D2D'};
`