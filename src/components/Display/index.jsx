import { CardShowcase } from '../CardShowcase';

import { useProducts } from '../../providers/products';

export const Display = () => {
  const { filteredProducts } = useProducts();

  return (
    <ul>
      { filteredProducts.map( ( item ) =>  <CardShowcase key={item.id} item={item} />)}
    </ul>
  )
}