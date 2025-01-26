"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { client } from "@/sanity/lib/client";
import { allProducts } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image"; // Import the urlFor function

// Product Interface
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: any; // Correct image object
  category: string;
  discountPercent: number;
  new: boolean;
  colors: string[];
  sizes: string[];
}

const ProductCards: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]); // State for cart

  // Fetch Products from Sanity
  const fetchProducts = async () => {
    try {
      const data: Product[] = await client.fetch(allProducts);
      console.log("Fetched Products:", data); // Debugging log
      setProducts(data);
    } catch (error) {
      console.error("Error Fetching Products:", error);
    }
  };

  // Add product to cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
    alert(`${product.name} has been added to your cart!`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-center text-slate-800 mt-4 mb-4">
        Products From API Data
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product._id}
            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image Rendering using urlFor */}
            <Image
              src={product.image ? urlFor(product.image).url() : "/placeholder.png"} // Use urlFor for images
              alt={product.name}
              width={300}
              height={300}
              className="w-full h-48 object-cover rounded-md"
            />

            <div className="mt-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-slate-800 mt-2 text-sm">{product.description}</p>
              <p className="text-slate-600 font-bold">${product.price}</p>
              {product.discountPercent > 0 && (
                <p className="text-sm text-green-600">
                  {product.discountPercent}% OFF
                </p>
              )}

              {/* Add to Cart Button */}
              <button
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
                onClick={() => addToCart(product)}
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Summary */}
      <div className="mt-8 bg-slate-100 p-6 rounded-lg shadow-md">
        <h2 className="text-lg font-black text-red-800">Cart Summary</h2>
        {cart.length > 0 ? (
          <ul className="space-y-4">
            {cart.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-white shadow-sm p-4 rounded-md"
              >
                <div>
                  <p className="font-medium text-slate-900">{item.name}</p>
                  <p className="text-sm text-blue-600">${item.price.toFixed(2)}</p>
                </div>
                <Image
                  src={item.image ? urlFor(item.image).url() : "/placeholder.png"}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-black text-center">Your Cart Is Empty. Add Products!</p>
        )}
      </div>
    </div>
  );
};

export default ProductCards;