import React from 'react'
import { motion } from 'framer-motion'
import Glasses from '../assets/Glasses.jpg'

const NewProduct = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 m-5 sm:m-15 gap-6">
      {/* Text Section */}
      <motion.div
        className="flex flex-col gap-4 sm:mt-40"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-md font-mono">Hand-Picked</p>
        <h1 className="text-4xl sm:text-6xl font-serif">Product Of The Week</h1>
        <p className="text-lg font-sans">
          Experience the pinnacle of eyewear innovation with Flare Glaciers. These sunglasses are meticulously crafted to elevate your style while providing unmatched visual clarity.
        </p>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="relative w-full h-[500px] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
      >
        <img
          src={Glasses}
          alt="product"
          className="w-full h-full object-cover border-2"
        />

        {/* Card Content */}
        <div className="absolute inset-0 flex flex-col justify-between items-center p-6 text-black text-center">
          <div>
            <h3 className="text-3xl font-serif font-semibold mb-2">Sunglasses</h3>
            <p className="text-lg font-light mb-4">$89.99</p>
          </div>

          <div className="flex flex-col gap-4 w-full">
            <button className="w-full px-4 py-3 bg-white text-black rounded-sm lg:hover:border-2 cursor-pointer transition">
              ADD TO CART
            </button>
            <button className="w-full px-4 py-3 border border-black rounded-sm cursor-pointer lg:hover:bg-black lg:hover:text-white transition">
              VIEW PRODUCT
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default NewProduct
