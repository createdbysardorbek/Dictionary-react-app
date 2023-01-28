import styled from "styled-components";

export const Dot = styled.div`
    width: 5px;
    height: 5px;
    background: #8F19E8;
    border-radius: 100px;
    margin-top: 5px;
`

export const Paragraph = styled.p`
    font-family: ${props => props.font};
    font-weight: 400;
    font-size: 18px;
    line-height: 24px;
    color: ${props => props.dark ? '#ffff' : '#2D2D2D'};
`