import Alerta from "../Alerta";
import { Button, Command, Input, Title } from "./styles";

export default function Depositar() {

    return (
        <>
            <Command>
                <Title>Depositar 🤑</Title>
                <Input type="number" placeholder="R$ 0.00" />
                <Button>Depositar</Button>
            </Command>
            <Alerta tipo="sucesso" mensagem="Valor depositado com sucesso!" />
        </>
    )
}