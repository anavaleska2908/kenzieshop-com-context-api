import { CartDisplay } from "../../components/CartDisplay"
import { Display } from "../../components/Display"
import { Header } from "../../components/Header"
import { Menu } from "../../components/Menu"
import { Container, DisplayCart, DivCart, DivHeader } from './styles'


export const Home = () => {
  return (
    <Container>
      <DivHeader>
        <Header />
      </DivHeader>
      <div>
        <Menu />
      </div>
      <DisplayCart>
        <div>
          <Display />
        </div>
        <DivCart>
          <CartDisplay />
        </DivCart>
      </DisplayCart>

    </Container>
  )
}