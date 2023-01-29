import styled from "styled-components";

export const Url = styled.a`
    font-family: ${props => props.font};
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
    color: ${props => props.dark ? '#ffffff' : '#2d2d2d'};
    margin-left: 25px;
`

export const Span = styled.span`
    font-family: ${props => props.font};
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
    color: #757575;
`