import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Cart from '../Components/Cart';

const CartPage = () => {
  const { cartItems } = useContext(ShopContext);

  // Check if cart is empty
  const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);

  return (
    <div className="p-6">
      <h1 className="text-5xl font-serif mb-4">Cart</h1>

      {isCartEmpty ? (
        <div className="text-center text-gray-500">Your cart is empty.</div>
      ) : (
        <Cart /> 
      )}
    </div>
  );
};

export default CartPage;
