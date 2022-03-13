import { Button } from '../Button';
import { useCart } from '../../providers/cart';

export const CardShowcase = ( {item}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item)
  }

  return (
        <li>
          <img src={ item.image } alt={ item.name } />
          <p>{ item.name }</p>
          <p>{ item.category }</p>
          <p>{ item.price }</p>
          <Button onClick={() => handleAddToCart(item)}>Adicionar ao Carrinho</Button>
       </li>

  )
}