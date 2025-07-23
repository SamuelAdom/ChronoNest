import React, { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { Link } from "react-router-dom"

const ProductCard = ({items}) => {
  const{addToCart}=useContext(ShopContext)

  return (
    <div className=" mt-10 sm:mt-0 w-90 md:w-80 bg-white rounded-xl shadow-md p-4 text-center  lg:hover:border-1 ">
<Link to={`/product/${items.id}`} onClick={() => window.scrollTo(0, 0)} >

      <img
        src={items.image}
        alt={items.name}
        className="h-50 md:h-fit w-full object-contain mb-4 cursor-pointer"
      />
</Link>

      <h3 className="text-lg font-mono">{items.name}</h3>
      <p className="text-gray-600 mt-1 text-base">${items.price}</p>

      <button onClick={()=>{{addToCart(items.id)}}}
        className="mt-4 px-5 sm:px-15 sm:py-3 py-2 bg-transparent border-2 border-black text-black rounded-sm lg:hover:border-3 transition cursor-pointer"
      >
      ADD TO CART
      </button>
    </div>
  )
}

export default ProductCard
