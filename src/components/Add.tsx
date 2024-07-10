"use client";
import React from "react";
import { useState } from "react";
function Add({productId,variantId,stockNumber}:{productId:any,variantId:string,stockNumber:number}) {
  const [quantity, setQuantity] = useState(1);
 
  const handleQuanity=(type :'-'|'+')=>{
if(type==='-' && quantity>1){
  setQuantity((prev)=>prev-1)
}
if(type==='+' && quantity<stockNumber){
  setQuantity((prev)=>prev+1)
}
  }
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Select Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 rounded-2xl px-4 py-2 flex items-center justify-between w-32">
            <button className="cursor-pointer text-2xl" onClick={()=>handleQuanity('-')}>-</button>
            {quantity}
            <button className="cursor-pointer text-2xl" onClick={()=>handleQuanity('+')}>+</button>
          </div>
          <div className="text-xs">
            Only <span className="text-orange-400">{stockNumber} items</span> left.{" "}
            <br />
            Dont miss the deal
          </div>
        </div>
        <button className="ring-1 ring-green-500 w-36 rounded-lg text-sm text-green-500 py-2 px-4 hover:bg-green-500 hover:text-white disabled:cursor-not-allowed disabled:bg-green-300 disabled:text-white disabled:ring-none">
        Add to Cart
      </button>
      </div>
    
    </div>
  );
}

export default Add;
