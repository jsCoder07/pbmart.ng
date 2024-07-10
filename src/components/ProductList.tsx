import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import DOMPurify from "isomorphic-dompurify";
const PRODUCTS_PER_PAGE = 20;
const ProductList = async ({
  categoryId,
  limit,
  searchParams
}: {
  categoryId: string;
  limit?: number;
  searchParams?:any;
}) => {
  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCTS_PER_PAGE)
    .find();

  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {res.items.map((product: products.Product) => (
        <Link
          href={"/" + product.slug}
          className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
          key={product._id}
        >
          <div className="relative w-full h-80">
            <Image
              src={product.media?.mainMedia?.image?.url || "/product.png"}
              fill
              alt=""
              sizes="25vw"
              className="rounded-md object-cover absolute z-10 hover:opacity-0 transition-opacity ease-in-out duration-500"
            />
            {product.media?.items && (
              <Image
                src={product.media?.items[1]?.image?.url || "/product.png"}
                fill
                alt=""
                sizes="25vw"
                className="rounded-md object-cover absolute"
              />
            )}
          </div>
          <div className="flex justify-between">
            <span className="font-medium">{product.name}</span>
            <span className="font-semibold">
              &#8358; {product.price?.price}
            </span>
          </div>
          {product.additionalInfoSections && (
            <div className="text-gray-500 text-sm" dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(product.additionalInfoSections.find(
              (section: any) => section.title === "Short Description"
            )?.description || "")}}>
              {}
            </div>
          )}

          <button className="rounded-2xl ring ring-green-800 text-green-800 text-xs  hover:bg-green-800 hover:text-white py-2 px4">
            Add to Cart
          </button>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
