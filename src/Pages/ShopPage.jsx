import React from 'react'
import { products } from '../assets/asset'
import ProductCard from '../Components/ProductCard'

const ShopPage = () => {
  return (
    <div className='flex flex-col justify-center items-center md:grid grid-cols-3 lg:grid-cols-4'>
        {products.map((items)=>{
            return(
                <div key={items.id}><ProductCard items={items}/></div>
            )
        })}
    </div>
  )
}

export default ShopPage