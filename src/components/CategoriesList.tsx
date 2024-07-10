import { wixClientServer } from '@/lib/wixClientServer'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CategoriesList=async()=> {
    const wixClient=await wixClientServer()
    const collections=await wixClient.collections.queryCollections().find()
  return (
    <div className='px-4 overflow-x-scroll scrollBarHidden'>
      <div className="flex gap-4 md:gap-8">



{collections.items.map((item)=>(
    <Link href={`/list?cat=${item.slug}`} className='flex-shrink-0 w-full sm:w-1/2 lg:w-1/4  xl:w-1/6' key={item._id}>
<div className="relative bg-slate-200 h-96 w-full">
    <Image src={item.media?.mainMedia?.image?.url || '/cat.png'} alt='' fill className='object-cover' sizes='20vw'/>
</div>
<h1 className="mt-8 font-light tracking-wide text-xl">{item.name}</h1>
</Link>
))


}


      </div>
    </div>
  )
}

export default CategoriesList
