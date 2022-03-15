import { Button } from '../Button';
import { useCart } from '../../providers/cart';
import {IoBagRemove} from 'react-icons/io5'
import { Context, DivButton, ImgButton, Li, Quantity } from './styles';

export const CardCart = ( { item } ) => {
  const { removeFromCart } = useCart();

  const handleRemoveFromCart = (item) => {
    removeFromCart(item)
  }

  return (
    <Li>
      <ImgButton>
        <img src={ item.image } alt={ item.name } />
      </ImgButton>

      <Quantity>
        <p>{ item.quantity }</p>
      </Quantity>

      <Context>
        <p>{ item.name }</p>
        <p>U$: { item.price }</p>        
      </Context>
      <DivButton>
        <Button onClick={() => handleRemoveFromCart(item)}><IoBagRemove size={ 12 } /></Button>
      </DivButton>
 </Li>
  )
}