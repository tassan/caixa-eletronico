import { useState } from "react";
import Alerta from "../Alerta";
import { Button, Command, Input, Title } from "./styles";

interface DepositarProps {
    saldoAtual: number,
    setSaldoAtual: React.Dispatch<React.SetStateAction<number>>,
    adicionarRegistro: (registro: Registro) => void
}

export default function Depositar({saldoAtual, setSaldoAtual, adicionarRegistro}: DepositarProps) {
    const [valorDeposito, setValorDeposito] = useState(0)
    const [mostarAlerta, setMostrarAlerta] = useState(false)
    const [mensagem, setMensagem] = useState('')
    const [tipo, setTipo] = useState('')

    function mostrarAlerta(tipo: string, mensagem: string) {
        setMostrarAlerta(true)
        setTipo(tipo)
        setMensagem(mensagem)
    }

    function depositar() {
        if (valorDeposito <= 0 || isNaN(valorDeposito) || valorDeposito % 1 !== 0) {
            mostrarAlerta('erro', 'Valor inválido para depósito')
            return
        }

        mostrarAlerta('sucesso', 'Valor depositado com sucesso!')
        setSaldoAtual(saldoAtual + valorDeposito)
        adicionarRegistro({tipo: 'Depósito', valor: valorDeposito, data: new Date().toISOString()})
    }

    function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
        setValorDeposito(Number(event.target.value))
        console.log(valorDeposito)
    }

    return (
        <>
            <Command>
                <Title>Depositar 🤑</Title>
                <Input type="number" placeholder="R$ 0.00" onChange={handleInputChange} />
                <Button onClick={depositar}>Depositar</Button>
            </Command>
            {mostarAlerta && <Alerta tipo={tipo} mensagem={mensagem} />}
        </>
    )
}