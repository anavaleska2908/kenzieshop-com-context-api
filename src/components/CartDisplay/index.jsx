import { useEffect } from "react";
import { useCart } from "../../providers/cart";
import { CardCart } from "../CardCart";

export const CartDisplay = () => {
  const { cart } = useCart();

  
  const data = JSON.parse(localStorage.getItem('@kenzieshop:cart'));
  console.log('data ', data);


  return (
    <div>
      { cart[ 0 ] !== undefined ? (
        <>
          <ul>
            {cart.map((item) => <CardCart key={item.id} item={item}/>)}
          </ul>
          <div>
            <p>Total:</p>
            <p>U$ { cart.reduce((previousValue, price) => previousValue + price.price, 0).toFixed(2)}</p>
          </div>
        </>
      ) : (
          <>
            <p>
              Sua sacola está vazia
            </p>
            <p>
              Adicione itens
            </p>
          </>
      )}
    </div>
  )
}