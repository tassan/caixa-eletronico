import Alerta from "../Alerta";
import { Button, Command, Input, Title } from "./styles";

export default function Sacar() {
    return (
        <>
            <Command>
                <Title>Sacar 💸</Title>
                <Input type="number" placeholder="R$ 0.00" />
                <Button type="submit">Sacar</Button>
            </Command>
            <Alerta tipo="sucesso" mensagem="Valor sacado com sucesso!" />
        </>
    )
}