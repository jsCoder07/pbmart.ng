'use client'
import Image from "next/image";
import React, { useState } from "react";

const images = [
  {
    id: 1,
    url: "/pexels-planeteelevene.jpg",
  },
  { id: 2, url: "/pexels-thirdman.jpg" },
  { id: 3, url: "/pexels-iurii.jpg" },
  { id: 4, url: "/pexels-dboyag.jpg" },
];
function ProductImages({items}:{items:any}) {
  const [index,setIndex]=useState(0);
  return (
    <div className="">
      <div className="relative h-[500px]">
        <Image
          src={items[index].image?.url}
          fill
          alt=""
          sizes="50vw"
          className="object-cover rounded-md"
        />
      </div>
      <div className="flex jb gap-4 mt-8">
       {items.map((item:any,i:number)=>(
         <div className="w-1/4 gap-4 h-32 relative mt-8 cursor-pointer" key={item._id} onClick={()=>setIndex(i)}>
         <Image
           src={item.image?.url}
           fill
           alt=""
           sizes="30vw"
           className="object-cover rounded-md"
         />
       </div>
       ))}
      </div>
    </div>
  

  // <div className="">
  //     <div className="h-[500px] relative">
  //       <Image
  //         src={images[index].url}
  //         alt=""
  //         fill
  //         sizes="50vw"
  //         className="object-cover rounded-md"
  //       />
  //     </div>
  //     <div className="flex justify-between gap-4 mt-8">
  //       {images.map((img:any, i:number) => (
  //         <div
  //           className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer"
  //           key={img.id}
  //           onClick={() => setIndex(i)}
  //         >
  //           <Image
  //             src={img.url}
  //             alt=""
  //             fill
  //             sizes="30vw"
  //             className="object-cover rounded-md"
  //           />
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  );
}

export default ProductImages;
