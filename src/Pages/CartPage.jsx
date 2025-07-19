import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Cart from '../Components/Cart';
import { Link } from 'react-router-dom';
import { FaSadTear } from 'react-icons/fa';
import { products } from '../assets/asset';
import ProdutCard from '../Components/ProductCard'

const CartPage = () => {
  const { cartItems } = useContext(ShopContext);

  const isCartEmpty = Object.values(cartItems).every((quantity) => quantity === 0);

  return (
    <div className="p-6 min-h-screen bg-gray-50">
      <h1 className="flex items-start text-5xl font-serif mb-8 text-center">Cart</h1>

      {isCartEmpty ? (
        <>
        <div className="flex flex-col items-center justify-center mt-20 text-center space-y-6">
          <FaSadTear className="text-6xl text-black" />
          <p className="text-xl text-gray-500">Your cart is empty.</p>
          <Link
            to="/shop"
            className="px-6 py-3 bg-yellow-400 lg:hover:bg-yellow-500 text-white font-semibold rounded-lg transition duration-300"
          >
       Browse Store
          </Link>
        </div>
        <div className='flex flex-col items-center mt-15'>
            <h1 className='text-4xl font-serif' >New in Store</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 '>
            {products.slice(0,3).map((items)=>{
              return(
                <div>
                  <ProdutCard items={items}/>
                </div>
              )
            })}
            </div>
          </div>
        
        </>
      ) : (
        <Cart />
      )}
    </div>
  );
};

export default CartPage;
