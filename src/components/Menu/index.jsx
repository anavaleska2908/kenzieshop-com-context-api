import { Button } from "../Button";
import { useProducts } from "../../providers/products";
import { Nav } from "./styles";


const filters = [
  'Naruto',
  'Boruto',
  'Demon Slayer',
  'Fire Force',
  'Bleach',
  'My Hero Academia',
  'One Punch Man',
  'Avatar',
  'Pokémon',
  'InuYasha',
  'Marvel',
  'Disney',
  'Yu-Gi-Oh',
  'Power Ranger',
  'Hunter X Hunter',
  'Harry Potter', 
  'Attack on Titan',
  'One Piece',
  'Dragon Ball Z',
  'Fullmetal Alchemist',
 
]

export const Menu = () => {
  const { filterProducts} = useProducts();

  const handleClick = ( filter ) => {
    filterProducts( filter );
  }

  return (
    <Nav>
      { filters.map( ( filter, index ) => <Button key={ index } onClick={ () => handleClick( filter ) }>{ filter }</Button>)}
    </Nav>
  )
}