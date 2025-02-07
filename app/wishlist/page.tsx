"use client";
import { useCart } from "@/app/context/CartContext";
import Image from "next/image";

export default function CartPage() {
  const { cart, removeFromCart } = useCart();

  console.log("Cart Items:", cart); // Debugging log

  if (!Array.isArray(cart)) {
    return <p className="text-center text-lg text-red-500">Error loading cart.</p>;
  }

  return (
    <div className="p-10 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-extrabold text-center text-gray-900 mb-10">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cart.map((item, index) => (
            <div key={item._id || index} className="bg-white shadow-lg rounded-lg p-6">
              <Image
                src={item.image_url}
                alt={item.name || "Product image"}
                width={200}
                height={200}
                className="rounded object-contain"
              />
              <h2 className="text-xl font-bold mt-2">{item.name}</h2>
              <p className="text-green-600 font-semibold text-lg">${item.price}</p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Remove
              </button>
              <button className="flex mt-4 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                jbni
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
