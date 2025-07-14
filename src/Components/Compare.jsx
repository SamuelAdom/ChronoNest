import React from 'react'
import { motion } from 'framer-motion'
import { products } from '../assets/asset'
import ProductCard from './ProductCard'

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
        <h1 className="text-4xl sm:text-7xl font-serif">Which Is The<br/> Better Choice?</h1>
        <p className="text-lg font-sans">
            Both timepieces offer exceptional craftsmanship and attention to detail. The choice is yours.
        </p>
   <div>
         <button className="bg-transparent text-black border-2 border-black px-10 py-3  hover:border-3 cursor-pointer">SHOP MORE</button>
   </div>
      </motion.div>


      <motion.div
        className="relative w-full h-[500px] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 3 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
<div className='grid grid-cols-2'>
       {products.slice(0,2).map((items)=>{
        return(
            <div key={items.id}>
                <ProductCard items={items}/>

            </div>
        )
       })}
        </div>
      

        {/* Card Content */}
        <div className="absolute inset-0 flex flex-col justify-between items-center p-6 text-black text-center">
          

          
        </div>
      </motion.div>
    </div>
  )
}

export default Compare
