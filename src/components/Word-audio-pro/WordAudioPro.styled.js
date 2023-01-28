import styled from "styled-components";

export const Word = styled.span`
    font-family: ${props => props.font};
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    color: ${props => props.dark ? '#ffff' : '#2D2D2D'};
    margin-bottom: 8px;
`

export const Pronounce = styled.span`
    font-family: ${props => props.font};
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    color: #A445ED;

`