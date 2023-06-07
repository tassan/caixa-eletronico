import { useState } from "react";
import Alerta from "../Alerta";
import { Button, Command, Input, Title } from "./styles";

interface SacarProps {
    saldoAtual: number,
    setSaldoAtual: React.Dispatch<React.SetStateAction<number>>,
    adicionarRegistro: (registro: Registro) => void
}

export default function Sacar({saldoAtual, setSaldoAtual, adicionarRegistro}: SacarProps) {
    const [valorSaque, setValorSaque] = useState(0)
    const [mostarAlerta, setMostrarAlerta] = useState(false)
    const [mensagem, setMensagem] = useState('')
    const [tipo, setTipo] = useState('')

    function mostrarAlerta(tipo: string, mensagem: string) {
        setMostrarAlerta(true)
        setTipo(tipo)
        setMensagem(mensagem)
    }

    function sacar() {
        if (valorSaque > saldoAtual || valorSaque <= 0 || isNaN(valorSaque) || valorSaque % 1 !== 0) {
            mostrarAlerta('erro', 'Valor inválido para saque')
            return
        }

        mostrarAlerta('sucesso', 'Valor retirado com sucesso!')
        setSaldoAtual(saldoAtual - valorSaque)
        adicionarRegistro({tipo: 'Saque', valor: valorSaque, data: new Date().toISOString()})
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValorSaque(Number(event.target.value))
        console.log(valorSaque)
    }

    return (
        <>
            <Command>
                <Title>Sacar 💸</Title>
                <Input type="number" placeholder="R$ 0.00" onChange={handleInputChange} />
                <Button type="submit" onClick={sacar}>Sacar</Button>
            </Command>
            {mostarAlerta && <Alerta tipo={tipo} mensagem={mensagem} />}
        </>
    )
}