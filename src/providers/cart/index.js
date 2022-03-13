import { createContext, useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(JSON.parse(localStorage.getItem('@kenzieshop:cart')));
  }, []);

  const addToCart = (currentProduct) => {
    let StorageCart = [...cart];
    const productCurrentSale = StorageCart.find(
      (item) => item.id === currentProduct.id
    );

    if (productCurrentSale === undefined) {
      currentProduct.quantity = 1;
      StorageCart.push(currentProduct);
    } else {
      StorageCart.forEach(
        (item) => item.id === currentProduct.id && (item.quantity += 1)
      );
    }
    setCart([...StorageCart]);
    localStorage.setItem('@kenzieshop:cart', JSON.stringify(StorageCart));
  };

  const removeFromCart = (currentProduct) => {
    let storage = [...cart];

    if (currentProduct.quantity > 1) {
      storage.forEach(
        (item) => item.id === currentProduct.id && (item.quantity -= 1)
      );
    } else {
      storage = cart.filter((item) => item.id !== currentProduct.id);
    }

    setCart([...storage]);
    localStorage.setItem('@kenzieshop:cart', JSON.stringify(storage));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
