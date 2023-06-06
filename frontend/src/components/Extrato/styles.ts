import styled from "styled-components";

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
    letter-spacing: 5px;
`

export const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    border: 1px solid #000;
    margin: 10px;
    font-family: 'VT323', monospace;
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
`

export const TableHead = styled.thead`
    border: 1px solid #000;
    background-color: #000;
    color: #fff;
`

export const TableBody = styled.tbody`
    border: 1px solid #000;
    background-color: #fff;
    color: #000;
`

export const TableRow = styled.tr`
    border: 1px solid #000;
`

export const TableHeadCell = styled.th`
    border: 1px solid #000;
    padding: 10px;
`

export const TableBodyCell = styled.td`
    border: 1px solid #000;
    padding: 10px;
`