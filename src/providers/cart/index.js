import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (currentProduct) => {
    console.log(currentProduct);
    const productCurrentSale = cart.find(
      (item) => item.id === currentProduct.id
    );

    if (productCurrentSale === undefined) {
      currentProduct.count = 1;
      setCart([...cart, currentProduct]);
      toast.success('Produto adicionado com sucesso!');
      return cart;
    } else {
      const indexProduct = cart.findIndex(
        (item) => item.id === currentProduct.id
      );
      cart[indexProduct].count += 1;
      return cart;
    }
  };

  const removeFromCart = (currentProduct) => {
    const filteredElement = cart.filter((item) => item !== currentProduct);

    const indexProduct = cart.findIndex(
      (item) => item.id === currentProduct.id
    );

    if (cart[indexProduct].count > 1) {
      cart[indexProduct].count -= 1;
      toast.success('Um produto foi removido!');
      return cart;
    }
    toast.success('Todos os produtos desse modelo foram removidos!');
    return filteredElement;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
