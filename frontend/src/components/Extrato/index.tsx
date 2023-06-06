import { createServer } from "miragejs";
import Registro from "./components/Registro";
import { Container, Table, TableBody, TableHead, TableHeadCell, TableRow, Title } from "./styles";
import { useState } from "react";

interface Registro {
    id: number;
    data: string;
    descricao: string;
    categoria: string;
    tipo: string;
    valor: number;
}

export default function Extrato() {
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
                <Registro data="10/09/2021" tipo="Depósito" valor="R$ 20,00" />
                <Registro data="10/09/2021" tipo="Saque" valor="R$ 20,00" />
            </TableBody>
        </Table> 
    </Container>
}