import { useRef } from 'react'
import { products } from '../assets/asset'
import{FaArrowRight} from 'react-icons/fa'
import{FaArrowLeft} from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ProductRowCarousel = () => {
  const scrollRef = useRef()

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  }

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' })
  }

  return (
    <div className="relative w-full px-6 py-12">
    
      <button
        onClick={scrollLeft}
        className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <FaArrowLeft/>
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md rounded-full p-2 hover:bg-gray-100"
      >
        <FaArrowRight/>
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
      >
        {products.slice(0,7).map((product) => (
          <div
            key={product.id}
            className="w-80 bg-white rounded-xl shadow-md flex-shrink-0 p-4 text-center"
          >
            <img
              src={product.image}
              alt={product.name}
              className="h-60 w-full object-contain mb-4 cursor-pointer"
            />
            <h3 className="text-lg font-semibold tracking-wide">{product.name.toUpperCase()}</h3>
            <p className="text-gray-600 mt-1">${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`}><button className="mt-4 px-4 py-4 bg-black text-white rounded-sm lg:hover:bg-white lg:hover:text-black hover:border-1 transition cursor-pointer">
              VIEW PRODUCT
            </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductRowCarousel
