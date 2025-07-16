import React, { useState, useEffect } from 'react'
import { products } from '../assets/asset'
import ProductCard from '../Components/ProductCard'

const ITEMS_PER_PAGE = 8

const ShopPage = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const currentProducts = products.slice(startIndex, endIndex)


  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page)
    }
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
        {currentProducts.map((item) => (
          <div key={item.id}>
            <ProductCard items={item} />
          </div>
        ))}
      </div>

 
      <div className="flex gap-4 mt-6">
        <button
          className="px-4 py-2 border rounded hover:bg-black hover:text-white transition"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="px-4 py-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 border rounded hover:bg-black hover:text-white transition"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default ShopPage
