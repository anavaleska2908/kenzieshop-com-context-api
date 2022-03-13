import { Button } from '../Button';
import { useCart } from '../../providers/cart';

export const CardCart = ( { item } ) => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item)
  }

  return (
    <li>
    <img src={ item.image } alt={ item.name } />
    <p>{ item.name }</p>
    <p>{ item.category }</p>
    <p>{ item.price }</p>
    <Button onClick={() => handleRemoveFromCart(item)}>Remover do Carrinho</Button>
 </li>
  )
}