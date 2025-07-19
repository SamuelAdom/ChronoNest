import React from 'react'
  import { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'


const CompareCard = ({items}) => {
  const{addToCart}=useContext(ShopContext)
  return (
    <div className="w-full bg-transparent p-12 md:p-8 text-center  lg:hover:border-1 ">
      <img
        src={items.image}
        alt={items.name}
        className="lg:h-80 w-full object-contain mb-4 cursor-pointer"
      />

      <h3 className="text-lg font-semibold">{items.name}</h3>
      <p className="text-gray-600 mt-1 text-base">${items.price}</p>

      <button onClick={()=>{addToCart(items.id)}}
        className="mt-4 px-3 py-3 bg-black border-2 border-black text-white rounded-sm lg:hover:bg-white hover:text-black transition cursor-pointer"
      >
      ADD TO CART
      </button>
    </div>
  )
}

export default CompareCard