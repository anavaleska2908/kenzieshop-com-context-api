import { CardShowcase } from '../CardShowcase';

import { useProducts } from '../../providers/products';
import { Container } from "./styles";

export const Display = () => {
  const { filteredProducts } = useProducts();

  return (
    <Container>
      { filteredProducts.map( ( item ) =>  <CardShowcase key={item.id} item={item} />)}
    </Container>
  )
}