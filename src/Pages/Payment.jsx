import React from "react";
import Navbar from "../Components/Navbar";

const Payment = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
     <Navbar />

      {/* Main Content */}
      <main className="container mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className=" flex justify-center">
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-6">Checkout</h2>
          {/* Billing Address */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Country</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-purple-400"
            >
              <option value="India">India</option>
            </select>
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">State / Union Territory</label>
            <select
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-purple-400"
            >
              <option>Select...</option>
            </select>
          </div>

          {/* Payment Method */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Payment method</h3>
            <div className="space-y-4">
              {/* Cards */}
              <div>
                <input
                  type="radio"
                  id="cards"
                  name="paymentMethod"
                  className="mr-2"
                  defaultChecked
                />
                <label htmlFor="cards" className="text-gray-700 font-medium">
                  Cards
                </label>
                <div className="mt-4">
                  <input
                    type="text"
                    placeholder="Name on card"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring focus:ring-purple-400"
                  />
                  <input
                    type="text"
                    placeholder="Card number"
                    className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:ring focus:ring-purple-400"
                  />
                  <div className="flex gap-4">
                    <input
                      type="text"
                      placeholder="MM/YY"
                      className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-purple-400"
                    />
                    <input
                      type="text"
                      placeholder="CVC"
                      className="w-1/2 border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring focus:ring-purple-400"
                    />
                  </div>
                  <div className="flex items-center mt-4">
                    <input
                      type="checkbox"
                      id="saveCard"
                      className="mr-2"
                    />
                    <label htmlFor="saveCard" className="text-gray-600">
                      Securely save this card for my later purchase
                    </label>
                  </div>
                </div>
              </div>

              {/* UPI */}
              <div>
                <input type="radio" id="upi" name="paymentMethod" className="mr-2" />
                <label htmlFor="upi" className="text-gray-700 font-medium">
                  UPI
                </label>
              </div>

              {/* Net Banking */}
              <div>
                <input type="radio" id="netBanking" name="paymentMethod" className="mr-2" />
                <label htmlFor="netBanking" className="text-gray-700 font-medium">
                  Net Banking
                </label>
              </div>

              {/* Mobile Wallets */}
              <div>
                <input type="radio" id="mobileWallets" name="paymentMethod" className="mr-2" />
                <label htmlFor="mobileWallets" className="text-gray-700 font-medium">
                  Mobile Wallets
                </label>
              </div>
            </div>
          </div>

          {/* Order Details */}
          <div className="border-t pt-6">
            <h3 className="text-lg font-semibold mb-4">Order details (1 course)</h3>
            <div className="flex justify-between items-center">
              <p>Learn Ethical Hacking From Scratch 2024</p>
              <p className="font-semibold text-gray-700">₹599</p>
            </div>
          </div>
        </section>

        </div>
        {/* Right Section */}
       <div className="flex justify-center">
       <section className="w-[60%]">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-6">Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <p>Original Price:</p>
                <p className="font-semibold">₹3,999</p>
              </div>
              <div className="flex justify-between">
                <p>Discounts:</p>
                <p className="font-semibold text-red-600">-₹3,400</p>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-4">
                <p>Total (1 course):</p>
                <p className="font-bold text-lg">₹599</p>
              </div>
            </div>
            <button
              className="mt-6 w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
            >
              Complete Checkout
            </button>
            <p className="text-gray-600 text-sm text-center mt-4">
              30-Day Money-Back Guarantee
            </p>
          </div>
        </section>
       </div>
      </main>
    </div>
  );
};

export default Payment;
