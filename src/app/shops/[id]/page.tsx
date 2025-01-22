"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { sanityFetch } from "@/sanity/lib/fetch";
import Header from "@/app/components/header";

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: string;
};

const ProductDetail = () => {
  const { id } = useParams(); // Get the dynamic route parameter (id) from the URL
  const [product, setProduct] = useState<Product | null>(null);

  const fetchProduct = async () => {
    if (id) {
      const data: Product = await sanityFetch({
        query: `*[_type == "product" && _id == $id][0]`,
        params: { id },
      });
      setProduct(data);
    }
  };

  useEffect(() => {
    fetchProduct(); // Call the async function
  }, [id]); // Dependency on the product ID

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <Header/>
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="md:w-1/2">
          <img src={product.productImage} alt={product.title} className="w-full h-auto object-cover" />
        </div>
        <div className="p-6 md:w-1/2 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-2xl font-semibold text-blue-500">${product.price.toFixed(2)}</p>
          </div>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;


// "use client";
// import { useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { sanityFetch } from "@/sanity/lib/fetch";

// type Product = {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   productImage: string;
// };

// const ProductDetail = () => {
//   const { id } = useParams(); // Get the dynamic route parameter (id) from the URL
//   const [product, setProduct] = useState<Product | null>(null);

//   // Convert function declaration to a function expression
//   const fetchProduct = async () => {
//     if (id) {
//       const data: Product = await sanityFetch({
//         query: `*[_type == "product" && _id == $id][0]`,
//         params: { id },
//       });
//       setProduct(data);
//     }
//   };

//   useEffect(() => {
//     fetchProduct(); // Call the async function
//   }, [id]); // Dependency on the product ID

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div>
//       <h1>{product.title}</h1>
//       <img src={product.productImage} alt={product.title} className="w-full h-auto" />
//       <p>{product.description}</p>
//       <p>${product.price}</p>
//       {/* Add to Cart functionality */}
//     </div>
//   );
// };

// export default ProductDetail;
