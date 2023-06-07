import { createServer } from "miragejs";
import Registro from "./components/Registro";
import { Container, Table, TableBody, TableHead, TableHeadCell, TableRow, Title } from "./styles";
import { useEffect, useState } from "react";

interface ExtratoProps {
    extrato: Registro[],
    setExtrato: React.Dispatch<React.SetStateAction<Registro[]>>
}

export default function Extrato({extrato, setExtrato}: ExtratoProps) {

    useEffect(() => {
    }, [extrato])

    return <Container>
        <Title>Extrato</Title>
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeadCell>Data</TableHeadCell>
                    <TableHeadCell>Tipo</TableHeadCell>
                    <TableHeadCell>Valor</TableHeadCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {extrato.map((registro, index) => 
                    <Registro key={index} data={registro.data} tipo={registro.tipo} valor={registro.valor} />
                )}
            </TableBody>
        </Table> 
    </Container>
}