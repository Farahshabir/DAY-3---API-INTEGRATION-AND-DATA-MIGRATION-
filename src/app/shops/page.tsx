"use client";
import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/query";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  tags: string[];
  isNew: boolean;
  discountPercentage: number;
   productImage: string;
   rating: {
    rate?: number;
    count?: number;
  };
  image? : {
    asset: {
      _id: string;
      url: string;
    };
  }
 
};

const truncateDescription = (description: string, length: number) => {
  return description.length > length
    ? description.substring(0, length) + "..."
    : description;
};

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const fetchedData: Product[] = await client.fetch(allProducts);
      setProducts(fetchedData);
    }
    fetchProducts();
  }, []);

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-6">Shop Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg hover:shadow-lg transition-all"
          >
            <Link href={`/shops/${product._id}`}>
              <div className="text-center cursor-pointer">
                <Image
                src={urlFor(product.productImage).url()}
                  //src={product.productImage}
                  alt={product.title}
                  className="w-full h-60 object-cover mb-4"
                  width={300}
                  height={300}
                />
                <h3 className="font-bold text-lg mb-2">{product.title}</h3>
                <p className="text-sm text-gray-600">
                  {truncateDescription(product.description, 100)}
                </p>
                <div className="mt-2">
                  <span className="text-lg font-bold text-gray-800">
                    ${product.price}
                  </span>
                </div>
                <div className="mt-4">
                  <button className="bg-blue-500 text-white py-2 px-4 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
