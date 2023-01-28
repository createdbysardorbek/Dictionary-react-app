import styled from "styled-components";

export const Span = styled.span`
    font-family: ${props => props.font};
    font-weight: 700;
    font-size: 24px;
    color: ${props => props.dark ? '#ffffff' : '#2D2D2'};
`

export const Heading = styled.h4`
    font-family: ${props => props.font};
    font-weight: 400;
    font-size: 20px;    
    color: #757575;
    margin-bottom: 27px;
`