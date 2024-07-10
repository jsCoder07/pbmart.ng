'use client'
import React, { useState } from 'react'
import Image from "next/image";
import Link from 'next/link';
import { useRouter } from "next/navigation";
import CartModal from './CartModal';
function NavbarIcons() {
    const [isProfileOpen,setIsProfileOpen]=useState(false)
    const [isCartOpen,setIsCartOpen]=useState(false)
    const isLoggedIn=false
    const router=useRouter()
    const handleProfile=()=>{
        if(!isLoggedIn){
            router.push('/login')
        }
        setIsProfileOpen((prev)=>!prev)
    }
    const handleCart=()=>{
        setIsCartOpen((prev)=>!prev)
    }
  return (
    <div className='flex items-center gap-4 xl:gap-6 relative'>
      <Image className="cursor-pointer" alt='' src='/profile.png' width={22} height={22} onClick={handleProfile}/>
      {isProfileOpen && (<div className='absolute p-4 rounded-md z-20 shadow-slate-500 top-12 left-0 text-sm shadow-lg'>
        <Link href='/'>Profile</Link>
        <div className="mt-2 cursor-pointer">Logout</div>
      </div>)}
      <div className='cursor-pointer'>
      <Image className="cursor-pointer" alt='' src='/notification.png' width={22} height={22}/>
      </div>
      <div className='relative cursor-pointer'  onClick={handleCart}>
      <Image className="" alt='' src='/cart.png' width={22} height={22}/>
      <div className="text-white flex justify-center items-center absolute w-6 h-6 rounded-full -top-4 -right-4 text-sm bg-green-700">4</div>
      </div>
      {isCartOpen && <CartModal/>}
    </div>
  )
}

export default NavbarIcons
