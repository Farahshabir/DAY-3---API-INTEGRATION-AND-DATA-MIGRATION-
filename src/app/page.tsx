// import { sanityFetch } from "@/sanity/lib/fetch";
// import { allProducts } from "@/sanity/lib/query";
// type Product ={
//   _id : string;
//   title : string;
//   description : string;
//   price: number;
//   productImage: string;
//   tags: string[];
//   isNew: boolean;
//   dicountPercentage: number;
// }
// export default async function Home(){
//   const products : Product[] = await sanityFetch({query : allProducts})
//   return(
//     <div>
//       <h1 className="text-center font-bold"> Products</h1>
//       <div className="grid grid-cols-3 gap-4">
//         {
//           products.map((product)=>(
//             <div className="border p-4" key={product._id}>
//               <img src={product.productImage} alt={product.title} className="w-60" height={100}/>
//               <h2 className="text-xl font-bold text-center">
//                 {product.title}
//               </h2>
//               <p className="text-center">
//                 {product.description}
//               </p>
//               <p className="text-center">
//               £ {product.price}
//               </p>
//               </div>
//           ))
//         }

//       </div>
//     </div>
//   )
// }

import { sanityFetch } from "@/sanity/lib/fetch";
import { allProducts } from "@/sanity/lib/query";
import Link from "next/link";
import Header from "./components/header";
import Banner from "./components/banner";
import TopNav from "./components/topnav";

type Product = {
  _id: string;
  title: string;
  description: string;
  price: number;
  productImage: string;
  tags: string[];
  isNew: boolean;
  discountPercentage: number;
};

export default async function Home() {
  const products: Product[] = await sanityFetch({ query: allProducts });

  // Function to shorten the description
  const shortenDescription = (description: string, maxLength: number) => {
    return description.length > maxLength
      ? description.substring(0, maxLength) + "..."
      : description;
  };

  return (
    <div>
      <TopNav />
      <Header />
      <Banner />
      <h1 className="text-center font-bold text-2xl my-4">Products</h1>
      <div className="grid grid-cols-3 gap-6">
        {products.slice(0, 6).map((product) => (
          <div
            className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
            key={product._id}
          >
            <img
              src={product.productImage}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-bold mt-2 text-center">{product.title}</h2>
            <p className="text-sm text-gray-600 text-center mt-1">
              {shortenDescription(product.description, 100)}
            </p>
            <p className="text-lg font-semibold text-center mt-2">
              £{product.price.toFixed(2)}
            </p>
            {product.discountPercentage > 0 && (
              <p className="text-red-500 text-center mt-1">
                Discount: {product.discountPercentage}%
              </p>
            )}
            <div className="text-center mt-2">
              {product.isNew && <span className="text-green-500 font-semibold">New!</span>}
            </div>
            <div className="text-sm text-gray-500 mt-3 text-center">
              Tags: {product.tags.join(", ")}
            </div>
            {/* Link to product details */}
            <Link href={`/shops/${product._id}`}>
              <div className="mt-4 text-center">
                <button className="bg-blue-500 text-white py-2 px-4 rounded">
                  Add to Cart
                </button>
              </div>
            </Link>

            {/* Button to go back to the shop page */}
            <Link href="/shops">
              <div className="mt-4 text-center">
                <button className="bg-gray-500 text-white py-2 px-4 rounded">
                  Go to Shop
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
