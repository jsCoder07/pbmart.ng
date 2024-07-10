import Add from "@/components/Add";
import CustomizedProducts from "@/components/CustomizedProducts";
import ProductImages from "@/components/ProductImages";
import Image from "next/image";
import React from "react";
import { wixClientServer } from "@/lib/wixClientServer";
import { strict } from "assert";
import { notFound } from "next/navigation";
import DOMPurify from "isomorphic-dompurify";
const Singlepage = async ({ params }: { params: { slug: string } }) => {
  const wixClient = await wixClientServer();
  const product = await wixClient.products

    .queryProducts()
    .eq("slug", params.slug)
    // .limit(limit || PRODUCTS_PER_PAGE)
    .find();
  // console.log(product.items[0])
  if (!product.items[0]) {
    return notFound();
  }
  console.log(product.items[0].productOptions);
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 mt-12">
      {/* Image Container */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        <ProductImages items={product.items[0].media?.items} />
      </div>
      {/* Text Container */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">{product.items[0].name}</h1>
        <p className="text-gray-500">{product.items[0].description}</p>
        <div className="h-[2px] bg-gray-100" />
        <div className="flex items-center gap-4">
          {product.items[0].price?.price ===
          product.items[0].price?.discountedPrice ? (
            <h2 className="font-medium text-2xl">
              &#8358; {product.items[0].price?.price}
            </h2>
          ) : (
            <>
              <h3 className="text-gray-500 line-through text-xl">
                &#8358; {product.items[0].price?.price}
              </h3>
              <h2 className="font-medium text-2xl">
                &#8358; {product.items[0].price?.discountedPrice}
              </h2>
            </>
          )}
        </div>
        <div className="h-[2px] bg-gray-100" />
        {product.items[0].variants && product.items[0].productOptions ? (
          <CustomizedProducts
            productId={product.items[0]._id}
            variants={product.items[0].variants}
            productOptions={product.items[0].productOptions}
          />
        ):(<Add productId={product.items[0]._id} variantId='00000000-0000-0000-0000-000000000000' stockNumber={product.items[0].stock?.quantity||0}/>)}

        
        <div className="h-[2px] bg-gray-100" />
        {product.items[0].additionalInfoSections?.map((info, i) => (
          <div className="text-sm" key={i}>
            <h4 className="font-medium mb-4">{info.title}</h4>
            <div
              className=""
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(info.description || ""),
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Singlepage;
