import React from "react";
import PaymentCard from "../Components/PaymentCard";

const Payment = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12">
      <div className="flex flex-col lg:flex-row gap-12 w-full max-w-6xl">
        <div className="flex justify-center items-center w-full lg:w-1/2">
          <PaymentCard />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8 w-full lg:w-1/2">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center font-serif">
            Payment Details
          </h2>
          <form className="space-y-5">
            <div>
              <input
                className="w-full p-3 border border-blue-500 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="card"
                placeholder="CARD NUMBER"
                required
              />
              
            </div>
            <input
              className="w-full p-3 border border-blue-500 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
              type="card"
              placeholder="CARDHOLDER NAME"
              required
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="w-full p-3 border border-blue-500 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                placeholder="12"
                required
              />
              <input
                className="w-full p-3 border border-blue-500 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                placeholder="2028"
                required
              />
              <input
                className="w-full p-3 border border-blue-500 rounded-md placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-300"
                type="text"
                placeholder="CVV"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full p-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
            >
              Submit Payment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
