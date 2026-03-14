'use client'

import React from "react";
import Image from "next/image";

function Product(props) {
  const { data } = props;

  return (
    <li className="product_item group">
     <div className="product_thumb overflow-hidden relative border border-outline rounded">
  <div className="product_img block">
    <Image
      width={2000}
      height={2000}
      src={data.image}
      className="h-full object-cover duration-300 group-hover:scale-105"
      alt={data.name}
    />
  </div>
</div>

      <div className="product_info block pt-5 text-center">
        <strong className="product_name my-2 txt-button line-clamp-2 duration-300">
          {data.name}
        </strong>
      </div>
    </li>
  );
}

export default Product;