import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavbarIcons from "./NavbarIcons";
function Navbar() {
  return (
    <div className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative shadow-md shadow-slate-200">
      {/* Mobile Screen Layout */}
      <div className="items-center justify-between flex h-full md:hidden">
        <Link href="/">
          {" "}
          <div className="text-2xl tracking-wide">
            {/* <Image src='/logomain.jpg' alt=" " width={110} height={50}/> */}
            <h1 className="font-bold text-3xl">PBMART</h1>
          </div>
        </Link>

        <Menu />
      </div>
      {/* Bigger Screens */}
      <div className="hidden md:flex items-center justify-between h-full gap-8">
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-3">
            <div className="text-2xl tracking-wide"> <h1 className="font-bold text-3xl">PBMART</h1>
            {/* <Image src='/logomain.jpg' alt=" " width={110} height={50}/> */}
            </div>
          </Link>
          <div className="hidden xl:flex gap-4">
          <Link href="/">Home</Link>
            <Link href="/">Stores</Link>
            
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
            <Link href="/">logout</Link>
          </div>
        </div>
        <div className="xl:w-1/2 w-2/3 flex items-center justify-between gap-8">
        <SearchBar />
        <NavbarIcons />
        </div>
       
      </div>
    </div>
  );
}

export default Navbar;
