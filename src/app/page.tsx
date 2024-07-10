
import BrandList from "@/components/BrandList"
import CategoriesList from "@/components/CategoriesList"
import ProductList from "@/components/ProductList"
import Slider from "@/components/Slider"
import { WixClientContext } from "@/context/wixContext"
import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/lib/wixClientServer"
import { Suspense, useContext, useEffect } from "react"

const HomePage = async() => {
  // const wixClient=useWixClient()
  // useEffect(()=>{
  //   const getProducts= async()=>{
  //     const res = await wixClient.products.queryProducts().find();
  //     console.log(res)
  //   }
  //   getProducts()
  // },[wixClient])
  
   
// const wixClient=await wixClientServer()
// const res = await wixClient.products.queryProducts().find();
// console.log(res)
  return (
    <div className=''>
      <Slider/>
      <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Featured Brands</h1>
       <Suspense fallback={'loading'}>
        <ProductList categoryId={process.env.FEATURED_CATEGORYID!} limit={4}/>
        </Suspense>
       
        </div>
        <div className="mt-24">
        <h1 className="text-2xl  px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 mb-12">Product Categories</h1>
        <Suspense fallback={'loading'}>
       <CategoriesList/>
       </Suspense>
       
        </div>
        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">New Arrival's</h1>
        <Suspense fallback={'loading'}>
        <ProductList categoryId={process.env.NEW_CATEGORYID!} limit={4}/>
        </Suspense>
       
        </div>

        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">Dunkit Products</h1>
        <Suspense fallback={'loading'}>
        <ProductList categoryId={process.env.DUNKIT_CATEGORYID!} limit={4}/>
        </Suspense>
       
        </div>

        <div className="mt-24 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <h1 className="text-2xl">TruPatriots Products</h1>
        <Suspense fallback={'loading'}>
        <ProductList categoryId={process.env.TRUPATRIOTS_CATEGORYID!} limit={4}/>
        </Suspense>
       
        </div>
    </div>
  )
}

export default HomePage