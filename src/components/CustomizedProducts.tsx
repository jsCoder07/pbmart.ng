"use client";
import { products } from "@wix/stores";
import React, { useEffect, useState } from "react";
import Add from "./Add";

function CustomizedProducts({
  productId,
  variants,
  productOptions,
}: {
  productId: string;
  variants: products.Variant[];
  productOptions: products.ProductOption[];
}) {
  const [selectedOption, setSelectedOption] = useState<{
    [key: string]: string;
  }>({});
  const [selectedVariant, setSelectedVariant] = useState<products.Variant>();
  useEffect(() => {
    const variant = variants.find((v) => {
      const variantChoice = v.choices;
      if (!variantChoice) return false;
      return Object.entries(selectedOption).every(
        ([key, value]) => variantChoice[key] === value
      );
    });
    setSelectedVariant(variant);
  }, [selectedOption, variants]);
  const handleSelectedOption = (optionType: string, choice: string) => {
    setSelectedOption((prev) => ({ ...prev, [optionType]: choice }));
  };
  const isVariantInstock = (choices: { [key: string]: string }) => {
    return variants.some((variant) => {
      const variantChoice = variant.choices;
      if (!variantChoice) return false;
      return (
        Object.entries(choices).every(
          ([key, value]) => variantChoice[key] === value
        ) &&
        variant.stock?.inStock &&
        variant.stock.quantity &&
        variant.stock.quantity > 0
      );
    });
  };
  return (
    <div className="flex flex-col gap-6">
      {productOptions.map((option) => (
        //
        <div className="flex flex-col gap-4" key={option.name}>
          <h4 className="font-medium">Choose a {option.name}</h4>
          <ul className="flex items-center gap-3" key={option.name}>
            {option.choices?.map((choice) => {
              const disabled = !isVariantInstock({
                ...selectedOption,
                [option.name!]: choice.description!,
              });
              const selected =
                selectedOption[option.name!] === choice.description;
              const clickHandler = disabled
                ? undefined
                : () => handleSelectedOption(option.name!, choice.description!);
              return option.name === "Color" ? (
                <li
                  className="w-8 h-8 rounded-full ring-1 ring-gray-200 relative"
                  style={{
                    backgroundColor: choice.value,
                    cursor: disabled ? "not-allowed" : "pointer",
                  }}
                  key={choice.value}
                  onClick={clickHandler}
                >
                  {selected && (
                    <div className="absolute w-10 h-10 ring-2 top-1/2 left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
                  )}
                  {disabled && (
                    <div className="absolute w-10 h-[2px] bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
                  )}
                </li>
              ) : (
                <li
                  className="ring-1 ring-green-500 text-sm  py-1 px-4 rounded-md text-green-500"
                  style={{
                    cursor: disabled ? "not-allowed" : "pointer",
                    backgroundColor: selected
                      ? "#22c55e"
                      : disabled
                      ? "#7BDC9F"
                      : "white",
                    color: selected || disabled ? "white" : "#22c55e",
                    boxShadow: disabled ? "none" : "",
                  }}
                  onClick={clickHandler}
                >
                  {choice.description}
                </li>
              );
              // (
              //   <div
              //     className=""
              //     key={choice.value}
              //     onClick={() =>
              //       handleSelectedOption(option.name!, choice.description!)
              //     }
              //   >
              //     {choice.description}
              //     {disabled && "disabled"}
              //     {selected && "selected"}
              //   </div>
              // );
            })}

            {/* 
          <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full ring-1 ring-gray-200 relative cursor-pointer bg-red-500">
              <div className="absolute w-10 h-10 ring-2 ring-blue-500 top-1/2 left-1/2 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
            </li>
            <li className="w-8 h-8 rounded-full relative cursor-pointer bg-blue-500"></li>
            <li className="w-8 h-8 rounded-full relative cursor-not-allowed bg-orange-500">
              <div className="absolute w-10 h-[2px] bg-red-500 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
            </li>
          </ul> */}
          </ul>
        </div>
      ))}
      <Add
        productId={productId}
        variantId={
          selectedVariant?._id || "00000000-0000-0000-0000-000000000000"
        }
        stockNumber={selectedVariant?.stock?.quantity || 0}
      />
      {/* <h4 className="font-medium">Choose a size</h4>
      <ul className="flex items-center gap-3">
        <li className="ring-1 ring-green-500 text-sm cursor-pointer py-1 px-4 rounded-md text-green-500">Small</li>
        <li className="ring-1 ring-green-500 text-sm cursor-pointer py-1 px-4 rounded-md text-white bg-green-500">Medium</li>
        <li className="ring-1 ring-green-200 text-sm cursor-not-allowed py-1 px-4 rounded-md bg-green-300 text-white">Large</li>
      </ul> */}
    </div>
  );
}

export default CustomizedProducts;
