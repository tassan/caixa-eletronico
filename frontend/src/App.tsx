import { useState } from "react"
import Depositar from "./components/Depositar"
import Extrato from "./components/Extrato"
import Sacar from "./components/Sacar"
import Saldo from "./components/Saldo"
import { CommandsContainer, Container, Title } from "./styles"


function App() {
  const [saldoAtual, setSaldoAtual] = useState(0)
  const [extrato, setExtrato] = useState<Registro[]>([])

  function adicionarRegistro(registro: Registro) {
    setExtrato([...extrato, registro])
  }

  return (
    <Container>
      <Title>Caixa Eletrônico</Title>
      <iframe src="https://giphy.com/embed/9rwJNLBu8FMfixoIxL" width="480" height="270" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/andersonpaak-money-bills-9rwJNLBu8FMfixoIxL">via GIPHY</a></p>
      <Saldo saldo={saldoAtual} />
      <CommandsContainer>
        <Depositar setSaldoAtual={setSaldoAtual} saldoAtual={saldoAtual} adicionarRegistro={adicionarRegistro} />
        <Sacar setSaldoAtual={setSaldoAtual} saldoAtual={saldoAtual} adicionarRegistro={adicionarRegistro} />
      </CommandsContainer>
      <Extrato extrato={extrato} setExtrato={setExtrato} />
    </Container>
  )
}


export default App
