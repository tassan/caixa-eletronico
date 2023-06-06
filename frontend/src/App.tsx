import Depositar from "./components/Depositar"
import Extrato from "./components/Extrato"
import Sacar from "./components/Sacar"
import Saldo from "./components/Saldo"
import { CommandsContainer, Container, Title } from "./styles"


function App() {
  return (
    <Container>
      <Title>Caixa Eletrônico</Title>
      <iframe src="https://giphy.com/embed/9rwJNLBu8FMfixoIxL" width="480" height="270" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/andersonpaak-money-bills-9rwJNLBu8FMfixoIxL">via GIPHY</a></p>
      <Saldo saldo={0} />
      <CommandsContainer>
        <Depositar />
        <Sacar />
      </CommandsContainer>
      <Extrato />
    </Container>
  )
}


export default App
