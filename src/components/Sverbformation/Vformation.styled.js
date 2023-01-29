import styled from "styled-components";

export const Span = styled.span`
    font-family: ${props => props.font};
    font-weight: 700;
    font-size: 20px;
    color: #A445ED;
    margin-left: 22px;
`

export const Verb = styled.span`
    font-family: ${props => props.font};
    font-style: italic;
    font-weight: 700;
    font-size: 24px;
    color: ${props => props.dark ? '#ffffff' : '#2d2d2d'};

`