import { Container, Title, Value } from "./styles";

interface SaldoProps {
    saldo: number;
}

export default function Saldo({saldo=0}: SaldoProps) {
    return (
        <Container>
            <Title>Saldo</Title>
            <Value>{`R$ ${saldo}`}</Value>
        </Container>
    )
}