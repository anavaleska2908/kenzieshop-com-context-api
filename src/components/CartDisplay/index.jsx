import { useEffect } from "react";
import { useCart } from "../../providers/cart";
import { CardCart } from "../CardCart";
import { CartText, Container, Content, EmptyCart, Total } from "./styles";


export const CartDisplay = () => {
  const { cart } = useCart();

  
  const data = JSON.parse(localStorage.getItem('@kenzieshop:cart'));
  console.log('data ', data);


  return (
    <Container>
      <div>
        <h4>
          Carrinho
        </h4>
      </div>
      <EmptyCart>
      { cart[ 0 ] !== undefined ? (
        <>
          <Content>
            {cart.map((item) => <CardCart key={item.id} item={item}/>)}
          </Content>
          <Total>
            <p>Total:</p>
            <p>U$ { cart.reduce((previousValue, {price, quantity}) => previousValue + (price * quantity), 0).toFixed(2)}</p>
          </Total>
        </>
      ) : (
          <CartText>
            <p>
              Sua sacola está vazia
            </p>
            <p>
              Adicione itens
            </p>
          </CartText>
        ) }
        </EmptyCart>
    </Container>
  )
}