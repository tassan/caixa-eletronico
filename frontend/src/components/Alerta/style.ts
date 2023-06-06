import styled from "styled-components"

export const MessageContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin: 10px;
`

export const Message = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    margin: 10px;
    font-family: 'VT323', monospace;
    width: 100%;
`

export const MessageError = styled.p`
    font-size: 1.5rem;
    font-weight: 700;
    color: #f00;
    margin: 10px;
    font-family: 'VT323', monospace;
    width: 100%;
`