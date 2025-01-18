import React from "react";
import Navbar from "../Components/Navbar";
import Foote from "../Components/Foote";

const Cart = () => {
  return (
    <div>
        <Navbar />
        <div className="min-h-screen bg-gray-100 p-6">
    
    <main className="container mx-auto mt-4">
{/* Cart Section */}
<div className="container mx-auto px-6 py-4">
  <h1 className="text-4xl font-bold text-gray-800">Shopping Cart</h1>
</div>
<section className="bg-white rounded-lg shadow p-6 mb-6">
  <h2 className="text-xl font-semibold mb-4">1 Course in Cart</h2>
  <div className="flex items-center gap-4">
    {/* Placeholder Image */}
    <div className="w-24 h-16 bg-gray-300 flex items-center justify-center text-gray-500 font-bold">
      404
    </div>
    {/* Course Info */}
    <div className="flex-1">
      <h3 className="text-lg font-semibold">Learn Ethical Hacking From Scratch 2024</h3>
      <p className="text-sm text-gray-600">By Zaid Sabih and 1 other</p>
      <div className="flex items-center gap-2 mt-2">
        <span className="bg-yellow-400 text-white text-xs px-2 py-1 rounded">
          Bestseller
        </span>
        <span className="text-sm text-gray-600">4.6 (128,567 ratings)</span>
      </div>
    </div>
    {/* Price */}
    <div className="text-right">
      <p className="text-lg font-semibold text-purple-700">₹599</p>
      <p className="text-sm text-gray-500 line-through">₹3,999</p>
    </div>
  </div>
</section>


</main>

{/* Summary Section */}
<aside className="container mx-auto my-5">
<div className="bg-white rounded-lg shadow p-6">
  <h2 className="text-xl font-semibold mb-4">Summary</h2>
  <div className="flex justify-between">
    <p className="text-gray-700">Original Price:</p>
    <p className="text-gray-700">₹3,999</p>
  </div>
  <div className="flex justify-between">
    <p className="text-gray-700">Discount:</p>
    <p className="text-gray-700">-₹3,400</p>
  </div>
  <div className="flex justify-between font-semibold text-lg mt-4">
    <p>Total:</p>
    <p>₹599</p>
  </div>
  <button className="w-full bg-purple-700 text-white py-3 mt-6 rounded-lg">
    Checkout
  </button>
</div>
</aside>
{/* Suggested Courses */}
<section className="bg-white rounded-lg shadow p-6">
  <h2 className="text-xl font-semibold mb-4">You might also like</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {/* Placeholder cards */}
    {[...Array(4)].map((_, index) => (
      <div
        key={index}
        className="bg-gray-300 w-full h-40 flex items-center justify-center text-gray-500 font-bold"
      >
        404
      </div>
    ))}
  </div>
</section>
</div>
<Foote />
    </div>
  );
};

export default Cart;
