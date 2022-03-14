import { Button } from '../Button';
import { useCart } from '../../providers/cart';
import { Category, Context, ImgButton, Li } from './styles';
import { MdAddCircle } from 'react-icons/md';

export const CardShowcase = ( {item}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item)
  }

  return (
    <Li>
      <ImgButton>
        <img src={ item.image } alt={ item.name } />
        <Button onClick={() => handleAddToCart(item)}><MdAddCircle size={ 16 }/></Button>
      </ImgButton>
      <Category>
        <p>{ item.category }</p>
      </Category>
      <Context>
        <p>{ item.name }</p>
         <p>U$: { item.price }</p>
      </Context>

       </Li>

  )
}