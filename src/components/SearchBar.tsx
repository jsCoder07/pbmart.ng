"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

function SearchBar() {
    const router=useRouter() ;
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const enteredValue = formData.get("searchInput") as string;
    if(enteredValue){
router.push(`/list?name=${enteredValue}`)
    }
  };
  return (
    <form
      className="flex items-center justify-between gap-4 bg-gray-100 p-2 rounded-md flex-1"
      onSubmit={handleSearch}
    >
      <input
        type="text"
        name="searchInput"
        className="flex-1 bg-transparent outline-none"
        placeholder="Search"
      />
      <button className="cursur-pointer">
        <Image src="/search.png" alt="" width={16} height={16} />
      </button>
    </form>
  );
}

export default SearchBar;
