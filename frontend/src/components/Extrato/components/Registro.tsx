import { TableBodyCell, TableRow } from "../styles";

interface IRegistroProps {
    data: string;
    tipo: string;
    valor: string;
}


export default function Registro({ data, tipo, valor }: IRegistroProps) {
    
    const cor = tipo === "Depósito" ? "#00D100" : "#FF8A8A";

    return (
        <TableRow style={{color: cor}}>
            <TableBodyCell>{data}</TableBodyCell>
            <TableBodyCell>{tipo}</TableBodyCell>
            <TableBodyCell>{valor}</TableBodyCell>
        </TableRow>
    )
}