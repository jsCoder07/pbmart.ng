"use client";
import Image from "next/image";
import React from "react";

function CartModal() {
  const cartItems = true;
  return (
    <div className="w-max absolute p-4 shadow-lg shadow-slate-400 bg-white z-20 top-12 right-0 flex flex-col gap-6">
      {!cartItems ? (
        <div className="">Cart is empty</div>
      ) : (
        <>
        <h2 className="text-xl text-green-700">Shopping Cart</h2>
          <div className="flex flex-col gap-8 ">
            {/* ITEM */}
            <div className="flex gap-4 shadow-lg shadow-slate-400 p-4">
              <Image
                src="/pexels-askars.jpg"
                alt=""
                className="object-cover rounded-md"
                height={96}
                width={72}
              />
              <div className="flex justify-between w-full flex-col">
                <div className=""></div>
                <div className="flex justify-between gap-8 items-center">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="bg-gray-50 p-1 rounded-sm">$49</div>
                </div>
                <div className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Qty .2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            {/* ITEM */}
            <div className="flex gap-4 shadow-lg shadow-slate-400 p-4">
              <Image
                src="/pexels-askars.jpg"
                alt=""
                className="object-cover rounded-md"
                height={96}
                width={72}
              />
              <div className="flex justify-between w-full flex-col">
                <div className=""></div>
                <div className="flex justify-between gap-8 items-center">
                  <h3 className="font-semibold">Product Name</h3>
                  <div className="bg-gray-50 p-1 rounded-sm">$49</div>
                </div>
                <div className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </div>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-gray-500">Qty .2</span>
                  <span className="text-blue-500">Remove</span>
                </div>
                
              </div>
            </div>
          </div>
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span className="">Subtotal</span>
              <span className="">$49</span>
            </div>
            <p className="text-sm text-gray-500 mt-2 mb-4">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                 
                </p>
                <div className="justify-between flex text-sm">
                  <button className="rounded-md ring-1 ring-gray-300 py-3 px-4">View Cart</button>
                  <button className="rounded-md bg-black text-white py-3 px-4">Checkout</button>
                </div>
          </div>
        </>
      )}
    </div>
  );
}

export default CartModal;
