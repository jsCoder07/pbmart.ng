import { wixClientServer } from "@/lib/wixClientServer";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const PRODUCTS_PER_PAGE=20
const BrandList= async ({
  categoryId,
  limit,
 
}: {
  categoryId: string;
  limit?: number;
 
})=>

{
  const wixClient=await wixClientServer()
const res = await wixClient.products.queryProducts().limit(limit || PRODUCTS_PER_PAGE).find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/brand"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/pexels-dboyag.jpg"
            fill
            alt=""
            sizes="25vw"
            className="rounded-md object-cover absolute z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="/pexels-mesal.jpg"
            fill
            alt=""
            sizes="25vw"
            className="rounded-md object-cover absolute"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Brand Name</span>
          <span className="font-semibold">&#8358; 5000</span>
        </div>
        <div className="text-gray-500 text-sm">Brand description</div>
        <button className="rounded-2xl ring ring-green-800 text-green-800 text-xs  hover:bg-green-800 hover:text-white py-2 px4">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/brand"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/pexels-godisable.jpg"
            fill
            alt=""
            sizes="25vw"
            className="rounded-md object-cover absolute z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="/pexels-terricks.jpg"
            fill
            alt=""
            sizes="25vw"
            className="rounded-md object-cover absolute"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Brand Name</span>
          <span className="font-semibold">&#8358; 5000</span>
        </div>
        <div className="text-gray-500 text-sm">Brand description</div>
        <button className="rounded-2xl ring ring-green-800 text-green-800 text-xs  hover:bg-green-800 hover:text-white py-2 px4">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/brand"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/pexels-nappy.jpg"
            fill
            alt=""
            sizes="25vw"
            className="rounded-md object-cover absolute z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="/pexels-nappy1.jpg"
            fill
            alt=""
            sizes="25vw"
            className="rounded-md object-cover absolute"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Brand Name</span>
          <span className="font-semibold">&#8358; 5000</span>
        </div>
        <div className="text-gray-500 text-sm">Brand description</div>
        <button className="rounded-2xl ring ring-green-800 text-green-800 text-xs  hover:bg-green-800 hover:text-white py-2 px4">
          Add to Cart
        </button>
      </Link>

      <Link
        href="/brand"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="/pexels-iam.jpg"
            fill
            alt=""
            sizes="25vw"
            className="rounded-md object-cover absolute z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
          />
          <Image
            src="/pexels-godisable4.jpg"
            fill
            alt=""
            sizes="25vw"
            className="rounded-md object-cover absolute"
          />
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Brand Name</span>
          <span className="font-semibold">&#8358; 5000</span>
        </div>
        <div className="text-gray-500 text-sm">Brand description</div>
        <button className="rounded-2xl ring ring-green-800 text-green-800 text-xs  hover:bg-green-800 hover:text-white py-2 px4">
          Add to Cart
        </button>
      </Link>
    </div>
  );
}

export default BrandList;
