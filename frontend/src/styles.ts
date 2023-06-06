import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #000;
  margin: 10px;
  font-family: 'VT323', monospace;
  text-align: center;
  text-transform: uppercase;
`

export const CommandsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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