import { useProducts } from '../../providers/products';
import { Input } from '../Input';
import { Button } from '../Button';

export const SearchBar = () => {
  const { filterProducts, filterAll } = useProducts();

  const handleClick = ( input ) => {
    filterProducts( input );
    filterAll('')
  }

  return (
    <>
      <Input onChange={ ( event ) => handleClick( event.target.value ) } />
      <Button/>
    </>
  )
  
}