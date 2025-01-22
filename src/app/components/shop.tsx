"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

// Define the Product type
interface Product {
  id: number;
  title: string;
  category: string;
  price: number;
  image: string;
}

interface CartItem {
  product: Product;
}

export default function Shop() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<CartItem[]>([]); // Cart state

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      const data: Product[] = await response.json(); // Explicitly define the data type
      console.log(data);
      setProducts(data);
    };
    fetchProducts();
  }, []);

  // Function to add product to cart
  const handleAddToCart = (product: Product) => {
    // Add the product to the cart
    setCart([...cart, { product }]);
  };

  return (
    <div className="font-sans p-4 mx-auto lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      <p className="text-center">Featured Products</p>
      <h2 className="text-4xl font-extrabold text-gray-800 mb-12 text-center">
        BESTSELLER PRODUCTS
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded overflow-hidden cursor-pointer hover:scale-[1.02] transition-all"
          >
            <Link href={`/shops/${product.id}`} passHref>
              <div className="w-full aspect-w-16 aspect-h-8 lg:h-80">
                <Image
                  src={product.image}
                  alt={product.title}
                  className="h-full w-full object-cover object-top"
                  width={500}
                  height={500}
                />
              </div>
            </Link>

            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800 text-center">
                {product.title}
              </h3>
              <h3 className="text-lg font-bold text-[#737373] text-center">
                {product.category}
              </h3>
              <div className="mt-4 flex items-center flex-wrap gap-2">
                <h4 className="text-lg font-bold text-gray-800 ml-10">
                  <span className="text-[#BDBDBD]">${product.price}</span>
                </h4>
              </div>
              {/* Add to Cart Button */}
              <Link href={`/shops/${product.id}`} passHref>
                <div className="mt-4 text-center">
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="bg-blue-500 text-white py-2 px-4 rounded"
                  >
                    Add to Cart
                  </button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
