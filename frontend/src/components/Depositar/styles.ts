import styled from "styled-components";

export const Command = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;

  font-family: 'VT323', monospace;
  font-size: 1.5rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
`

export const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: 700;
    color: #000;
    margin: 10px;
    font-family: 'VT323', monospace;
    width: 100%;
`

export const Input = styled.input`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border-radius: 5px;
    border: 1px solid #000;
    margin: 10px;
    font-size: 1.5rem;
    font-family: 'VT323', monospace;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`

export const Button = styled.button`
    width: 100%;
    height: 50px;
    padding: 0 20px;
    border-radius: 5px;
    border: 1px solid #000;
    margin: 10px;
    font-size: 1.5rem;
    font-family: 'VT323', monospace;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
        background-color: #fff;
        color: #000;
    }
`