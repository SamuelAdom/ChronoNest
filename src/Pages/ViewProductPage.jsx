import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../assets/asset'
import AddButton from '../Components/AddButton'
import RemoveButton from '../Components/RemoveButton'
import { ShopContext } from '../Context/ShopContext'

const ViewProductPage = () => {
    const {getTotal}=useContext(ShopContext)
    const{ID}=useParams()
    const[itemInfo, setItemInfo]=useState({})
    useEffect(()=>{
        const getItem=()=>{
              setItemInfo(products.find(item=>item.id===Number(ID)))
          
        }
        if(ID){
            getItem()
        }
    },[ID])

  return itemInfo && (
    <>
    <div className='grid grid-cols-1 sm:grid-cols-2 p-10 gap-10'>
<img className='w-full h-full' src={itemInfo.image} alt={itemInfo.name} />
<div className='flex flex-col border-1 p-8 h-fit '>
    <div className='flex justify-between space-y-4'>
        <p className='text-lg text-yellow-500 font-mono'>{itemInfo.category}</p>
        <p className='text-lg font-bold'>${itemInfo.price}</p>
    </div>
    <div className='flex flex-col gap-2.5'>
        <h1 className='text-3xl font-serif'>{itemInfo.name}</h1>
        <p className='text-lg font-light'>{itemInfo.description}</p>
    </div>
    <div className='flex items-center gap-2.5 mt-6'>
      <RemoveButton itemInfo={itemInfo}/>
      <p className='font-mono text-lg'>{getTotal()}</p>
        <AddButton itemInfo={itemInfo}/>
        <button className='bg-black text-white px-5 py-2 cursor-pointer lg:hover:bg-amber-400 hover:text-white transition-all duration-500'>ADD TO CART</button>

    </div>
    <hr className='mt-8' />
    <p className='mt-4 font-light' >Category: <span className='text-yellow-400 font-mono'>{itemInfo.category}</span></p>
</div>
    </div>
    </>
  )
}

export default ViewProductPage