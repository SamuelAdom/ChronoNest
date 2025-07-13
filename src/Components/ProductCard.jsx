import React from "react"
const ProductCard = ({items}) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-md p-4 text-center flex-shrink-0 transition-transform duration-300 hover:scale-105">
      <img
        src={items.image}
        alt={items.name}
        className="h-full w-full object-contain mb-4"
      />

      <h3 className="text-lg font-semibold">{items.name}</h3>
      <p className="text-gray-600 mt-1 text-base">${items.price}</p>

      <button
        className="mt-4 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
      >
        Add to Cart
      </button>
    </div>
  )
}

export default ProductCard
