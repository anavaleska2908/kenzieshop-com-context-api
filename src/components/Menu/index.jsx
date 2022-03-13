import { Button } from "../Button";
import { useProducts } from "../../providers/products";

const filters = [
  'Todos',
  'Naruto',
  'Boruto',
  'One Piece',
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
  'Power Ranger',
  'Hunter X Hunter',
  'Harry Potter',
  'Yu-Gi-Oh',
  'Attack on Titan',
  'Fullmetal Alchemist',
  'Dragon Ball Z'
]

export const Menu = () => {
  const { filterProducts} = useProducts();

  const handleClick = ( filter ) => {
    filterProducts( filter );
  }

  return (
    <nav>
      { filters.map( ( filter, index ) => <Button key={ index } onClick={ () => handleClick( filter ) }>{ filter }</Button>)}
    </nav>
  )
}