import { Button, Command, Input, Title } from "./styles";

export default function Depositar() {
    return (
        <Command>
            <Title>Depositar 🤑</Title>
            <Input type="number" placeholder="R$ 0.00" />
            <Button type="submit">Depositar</Button>
        </Command>
    )
}