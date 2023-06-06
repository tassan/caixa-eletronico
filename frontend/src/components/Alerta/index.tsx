import { Message, MessageContainer, MessageError } from "./style";

interface IAlertaProps {
    tipo: string;
    mensagem: string;
}

export default function Alerta({ tipo, mensagem }: IAlertaProps) {

    const ConteudoMensagem = () => {
        if (tipo === "sucesso") {
            return <Message>{mensagem}</Message>
        }

        return <MessageError>{mensagem}</MessageError>
    }

    return <MessageContainer>
        <ConteudoMensagem />
</MessageContainer>
}