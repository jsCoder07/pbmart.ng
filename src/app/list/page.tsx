import Filter from '@/components/Filter'
import ProductList from '@/components/ProductList'
import Image from 'next/image'
import React, { Suspense } from 'react'
import { wixClientServer } from '@/lib/wixClientServer'

const Listpage=async({searchParams}:{searchParams:any}) =>{
  const wixClient=await wixClientServer()
const res=await wixClient.collections.getCollectionBySlug(searchParams.cat || 'all-products')

  return (
 
    <div className=' px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64'>
      {/* BRAND BANNER */}
      <div className="hidden bg-yellow-500 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
        <h1 className="text-4xl leading-[48px] font-semibold text-gray-700">Grab up to 50% off on <br/>selected products</h1>
        <button className="bg-orange-800 text-white w-max text-sm py-3 px-4 rounded-3xl">Buy Now</button>
        </div>
        <div className="relative w-1/3">
          <Image src='/woman.png' alt='' fill className='object-contain'/>
        </div>
      </div>
      <Filter/>
      <h1 className="mt-12 font-semibold text-xl">Deals for you</h1>
      <Suspense fallback='loading'>
      <ProductList categoryId={res.collection?._id || '00000000-000000-000000-000000000001'} searchParams={searchParams}/>
      </Suspense>
    </div>
  )
}

export default Listpage
