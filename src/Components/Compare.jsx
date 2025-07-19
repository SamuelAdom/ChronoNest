import React from 'react'
import { motion } from 'framer-motion'
import { products } from '../assets/asset'
import CompareTable from './CompareTable'
import CompareCard from './CompareCard'
import { Link } from 'react-router-dom'

const Compare = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 m-5 sm:m-15 gap-6">


      <motion.div
        className="flex flex-col gap-4 sm:mt-40"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-md font-mono">Compare</p>
        <h1 className="text-4xl sm:text-7xl font-serif">Which Is The<br /> Better Choice?</h1>
        <p className="text-lg font-sans">
          Both timepieces offer exceptional craftsmanship and attention to detail. The choice is yours.
        </p>
        <div>
          <Link to={"/shop"}> <button className="bg-transparent text-black border-2 border-black px-10 py-3 hover:border-3 cursor-pointer">
            SHOP MORE
          </button></Link>
        </div>
      </motion.div>

      <motion.div
        className="relative w-full"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="border-1 border-black w-full bg-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 m-2 gap-2">
            {products.slice(0, 2).map((items) => (
              <CompareCard key={items.id} items={items} />
            ))}
          </div>

      
          <div>
            <CompareTable />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default Compare
