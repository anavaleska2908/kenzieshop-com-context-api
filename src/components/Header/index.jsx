import { SearchBar } from "../SearchBar";
import { Container } from "./styles";

export const Header = () => {
  return (
    <Container>
      <h1>Pop<span>.</span>Store</h1>
      <SearchBar/>
    </Container>
  )
}