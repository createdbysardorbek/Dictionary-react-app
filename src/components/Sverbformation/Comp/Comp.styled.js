import styled from "styled-components"

export const Dot = styled.div`
    width: 5px;
    height: 5px;
    background: #8F19E8;
    border-radius: 100px;
    margin-top: 5px;
`

export const Meaning = styled.p`
    font-family: ${props => props.font};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: ${props => props.dark ? '#ffffff' : '#2d2d2d'};
    margin-bottom: 13px;
`

export const Example = styled.p`
    font-family: ${props => props.font};
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    color: #757575;
`