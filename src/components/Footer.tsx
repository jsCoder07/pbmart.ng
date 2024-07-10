import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer() {
  const year=new Date().getFullYear().toString();
 
  return (
    <div className="py-24 mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 bg-gray-100 text-sm">
      {/* Top */}
      <div className="flex flex-col md:flex-row justify-between gap-24">
        {/* Left */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
          <Link href="/">
            {/* <Image src="/logomain.jpg" alt=" " width={110} height={50} /> */}
            <h1 className="font-bold text-3xl">PBMART</h1>
          </Link>
          <p className="">
            Intuitive Software 25 Mabo Street Surulere Lagos Nigeria
          </p>
          <span className="font-semibold">+234 (905)-290-8445</span>
          <span className="font-semibold">adeboye@dunkit.com</span>
          <div className="flex gap-6">
            <Image src='/facebook.png' alt="" height={16} width={16}/>
            <Image src='/instagram.png' alt="" height={16} width={16}/>
            <Image src='/youtube.png' alt="" height={16} width={16}/>
            <Image src='/pinterest.png' alt="" height={16} width={16}/>
            <Image src='/x.png' alt="" height={16} width={16}/>
          </div>
        </div>
        {/* Center */}
        <div className="hidden lg:flex justify-between w-1/2">
        <div className="flex flex-col justify-between">
          <h1 className="font-medium text-lg mb-6">COMPANY</h1>
          <div className="flex flex-col gap-6">
            <Link href=''>About Us</Link>
            <Link href=''>Career</Link>
            <Link href=''>True Patriots</Link>
            <Link href=''>Brands</Link>
            <Link href=''>Contact Us</Link>
          </div>
          <h1 className="font-medium text-lg mt-6">STORES</h1>
          <div className="flex flex-col gap-6 mt-4">
            <Link href=''>United States</Link>
            <Link href=''>Nigeria</Link>
            <Link href=''>Germany</Link>
            <Link href=''>Canada</Link>
           
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="font-medium text-lg mb-6">SHOP</h1>
          <div className="flex flex-col gap-6">
            <Link href=''>New Arrivals</Link>
            <Link href=''>Accessories</Link>
            <Link href=''>Traditional</Link>
            <Link href=''>Sales</Link>
            <Link href=''>All Products</Link>
          </div>
          <h1 className="font-medium text-lg mt-6 invisible">STORES</h1>
          <div className="flex flex-col gap-6 mt-4 invisible">
            <Link href=''>United States</Link>
            <Link href=''>Nigeria</Link>
            <Link href=''>Germany</Link>
            <Link href=''>Canada</Link>
           
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <h1 className="font-medium text-lg mb-6">PARTNERS/HELP</h1>
          <div className="flex flex-col gap-6">
            <Link href=''>True Patriots</Link>
            <Link href=''>Customer Service</Link>
            <Link href=''>Find Store</Link>
            <Link href=''>My Account</Link>
            <Link href=''>Gift Cards</Link>
          </div>
          <h1 className="font-medium text-lg mt-6 invisible">STORES</h1>
          <div className="flex flex-col gap-6 mt-4 invisible">
            <Link href=''>United States</Link>
            <Link href=''>Nigeria</Link>
            <Link href=''>Germany</Link>
            <Link href=''>Canada</Link>
           
          </div>
        </div>
        </div>
        {/* Right */}
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col gap-8">
        <h1 className="font-medium text-lg">SUBSCRIBE</h1>
        <p className="">Be on the priority list to get information regarding promotions, events and our latest news.</p>
        <div className="flex">
          <input type="email" className="p-4 w-3/4" placeholder="Email Address"/>
          <button className="bg-orange-800 text-white w-1/4">JOIN</button>
          </div>
          <span className="font-semibold">Secure Payments</span>
          
          <div className="flex justify-between">
          <Image src='/discover.png' alt="" height={20} width={40}/>
            <Image src='/skrill.png' alt="" height={20} width={40}/>
            <Image src='/paypal.png' alt="" height={20} width={40}/>
            <Image src='/mastercard.png' alt="" height={20} width={40}/>
            <Image src='/visa.png' alt="" height={20} width={40}/>
         
        </div>
        </div>
      </div>
      {/* Bottom */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mt-16">
       
        <div className="">&#169; {year} PBMART</div>
        <div className="flex flex-col md:flex-row gap-8 text-center">
          <div className="">
            <span className="text-gray-500 mr-4">Language</span>
            <span className="font-medium">Nigeria | English</span>
            </div>
            <div className="">
            <span className="text-gray-500 mr-4">Currency</span>
            <span className="font-medium">&#8358; NGN</span>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
