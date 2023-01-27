import styled from "styled-components";

export const Span = styled.span`
    position: relative;
    display: flex;
    align-items: center;
    font-family: ${props => props.font};
    font-weight: 700;
    font-size: 18px;
    color: ${props => props.dark ? '#ffff' : '#2D2D2D'};

    .arrow {
        margin-left: 16px;
    }
`

export const Div = styled.div`
    display: ${props => props.isOpen ? 'block' : 'none'};
    position: absolute;
    top: 45px;
    left: -50px;
    width: 183px;
    height: 152px;
    background: ${props => props.dark ? '#1F1F1F' : '#ffff'};
    box-shadow: ${props => props.dark ? '0px 5px 30px #A445ED' : '0px 5px 30px rgba(0, 0, 0, 0.1)'};
    border-radius: 16px;
    padding: 24px;
    box-sizing: border-box;

    Span {
        margin-bottom: 16px;

        &:hover {
            color: #A445ED;
        }
    }
`