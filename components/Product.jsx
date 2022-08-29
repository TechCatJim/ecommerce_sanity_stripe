import React, { useEffect } from "react";
import Link from "next/link";
import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, slug, price } }) => {
  return (
    <>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <img
            src={urlFor(image && image[0])}
            alt=""
            width={250}
            height={250}
            className="product-image"
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </>
  );
};

Product.getInitialProps = ({ query }) => ({
  currentslug: query.product.slug.current,
  key: query.product.slug.current,
});

export default Product;
