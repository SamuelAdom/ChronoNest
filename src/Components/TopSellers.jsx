import React, { useContext } from 'react'
import ProductCard from './ProductCard'
import { products } from '../assets/asset'


const TopSellers = () => {

  return (
    <div className='bg-white'>
        <div className='flex flex-col items-center mt-10 space-y-2'>
            <h1 className='text-md font-mono'>Top Sellers</h1>
            <h1 className='text-4xl sm:text-6xl font-serif'>Trending Styles</h1>
            <p className='text-lg font-sans'>Take a look at these top performers.</p>
        </div>
        
        <div className='flex flex-col justify-center items-center sm:grid sm:grid-cols-3 lg:grid lg:grid-cols-4 p-4 '>
            {products.slice(0,4).map((items)=>{
            return(
                <div key={items.id}>
                    <ProductCard items={items}/>

                </div>
            )
        })}
        </div>
    </div>
  )
}

export default TopSellers