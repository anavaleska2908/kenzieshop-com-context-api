import { useProducts } from '../../providers/products';
import { Input } from '../Input';
import { Button } from '../Button';
import { Container } from './styles';
import { BsSearch } from 'react-icons/bs';

export const SearchBar = () => {
  const { filterProducts, filterAll } = useProducts();

  const handleClick = ( input ) => {
    filterProducts( input );
    filterAll('')
  }

  return (
    <Container>
      <Input
        placeholder='Digite seu pop favorito'
        onChange={ ( event ) => handleClick( event.target.value ) }
      />
      <Button><BsSearch size={12}/></Button>
    </Container>
  )
  
}