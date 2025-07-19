import React, { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"

const ProductCard = ({items}) => {
  const{addToCart}=useContext(ShopContext)

  return (
    <div className="w-80 bg-white rounded-xl shadow-md p-4 text-center  lg:hover:border-1 ">
      <img
        src={items.image}
        alt={items.name}
        className="h-full w-full object-contain mb-4 cursor-pointer"
      />

      <h3 className="text-lg font-mono">{items.name}</h3>
      <p className="text-gray-600 mt-1 text-base">${items.price}</p>

      <button onClick={()=>{{addToCart(items.id)}}}
        className="mt-4 px-15 py-3 bg-transparent border-2 border-black text-black rounded-sm lg:hover:border-3 transition cursor-pointer"
      >
      ADD TO CART
      </button>
    </div>
  )
}

export default ProductCard
