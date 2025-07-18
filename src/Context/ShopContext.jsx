import React, { createContext } from 'react'
import { useState } from 'react'
import { products } from '../assets/asset'


export const ShopContext=createContext(null)
const getDefaultCart=()=>{
  let cart={}
  for(let i=0; i<products.length+1; i++){
    cart[i]=0

  }
  return cart
}
const ShopContextProvider = (props) => {
  const[cartItems, setCartItems]=useState(getDefaultCart())
  const addToCart=(itemId)=>{
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))

  }
  const removeFromCart=(itemId)=>{
setCartItems((prev)=>{
  if(prev[itemId]>0){
  return {...prev,[itemId]:prev[itemId]-1}
  }
  else{
    return prev
  }

})
  }
const getTotalAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = products.find((product) => product.id === Number(item));
      totalAmount += itemInfo.price * cartItems[item];
    }
  }
  return totalAmount;
};
  const getTotal=()=>{
    let total=0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        total+=cartItems[item]

      }
    
    }
      return total
  }
  
  console.log(cartItems)
  const contextValue={
    cartItems,
    addToCart,
    removeFromCart,
    getTotal,
    getTotalAmount,

  }
  return (
 <ShopContext.Provider value={contextValue}>
  {props.children}
 </ShopContext.Provider>
  )
}

export default ShopContextProvider