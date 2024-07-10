"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div onClick={() => setIsOpen(!isOpen)}>
      {!isOpen && (
        <div>
          <Image
            src="/menu.png"
            alt=""
            width={28}
            height={28}
            className="cursor-pointer"
          />
        </div>
      )}
      {isOpen && (
        <div className="">
          <div>
            <Image
              src="/x.png"
              alt=""
              width={20}
              height={20}
              className="cursor-pointer"
            />
          </div>
          <div className="absolute top-20 right-0 flex flex-col gap-8 text-xl z-10 bg-white shadow-xl p-10 shadow-slate-500 min-w-[calc(100vw-100px)] h-[calc(100vh-200px)] text-right ">
            <Link href="/">Home</Link>
            <Link href="/">Stores</Link>
           
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">logout</Link>
            <Link href="/" className="relative">
              Cart<span className="invisible">xx</span>
              <span className="flex justify-center items-center -right-2 absolute w-6 h-6 -top-4 bg-black text-white text-sm p-1 rounded-full">
                4
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Menu;
