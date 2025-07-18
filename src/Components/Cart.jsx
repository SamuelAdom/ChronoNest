import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { products } from "../assets/asset";
import { FaPlusCircle, FaMinusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, addToCart, removeFromCart, getTotalAmount } = useContext(ShopContext);

  const cartProductList = products.filter((item) => cartItems[item.id] > 0);

  return (
    <div className="flex flex-col lg:flex-row md:gap-6 md:p-6 ">
      {/* Left Side: Cart Items */}
      <div className="flex-1">
        <table className="w-full">
          <thead>
            <tr>
              <th className="text-left py-2 font-bold text-sm">PRODUCT</th>
              <th className="text-left py-2 font-bold text-sm">TOTAL</th>
            
            </tr>
          </thead>
          <tbody>
            {cartProductList.map((item) => (
              <tr key={item.id} className="border-t">
                {/* Product Column */}
                <td className="py-4">
                  <div className="flex items-start gap-4">
                    <img src={item.image} alt={item.name} className="w-20 rounded" />
                    <div className="flex flex-col gap-1">
                      <p className="text-yellow-600 font-semibold underline">{item.name}</p>
                      <p className="text-gray-600 text-sm">${item.price}</p>
                      <p className="text-sm text-gray-500">
                        {item.description.length > 50
                          ? item.description.substring(0, 50) + "..."
                          : item.description}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <FaPlusCircle
                          onClick={() => addToCart(item.id)}
                          className="text-lg cursor-pointer text-green-600"
                        />
                        <span>{cartItems[item.id]}</span>
                        <FaMinusCircle
                          onClick={() => removeFromCart(item.id)}
                          className="text-lg cursor-pointer text-red-600"
                        />
                      </div>
                  
                      
                    </div>
                  </div>
                </td>

                <td className="py-4 px-5 sm:px-0 font-medium text-gray-800">
                  ${(item.price * cartItems[item.id]).toFixed(2)}
                </td>

          
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      <div className="w-full lg:w-1/3 border  shadow-md p-6 bg-white">
        <h2 className="text-lg font-serif mb-4">CART TOTALS</h2>
        <div className="flex justify-between py-2 border-b">
          <span className="font-mono">Subtotal</span>
     <span className="font-mono">${getTotalAmount().toFixed(2)}</span>
        </div>
        <div className="flex justify-between py-2 border-b">
          <span className="font-mono">Delivery</span>
          <span className="text-green-600">FREE</span>
        </div>
        <div className="flex justify-between py-4 text-lg font-bold">
          <span className="font-extrabold">Total</span>
         <span>${getTotalAmount().toFixed(2)}</span>
        </div>
       <Link to={"/check-out"}> <button className="mt-4 w-full bg-black text-white py-3 rounded hover:border-2 lg:hover:bg-transparent lg:hover:text-black cursor-pointer transition">
          PROCEED TO CHECKOUT
        </button></Link>
      </div>
    </div>
  );
};

export default Cart;
