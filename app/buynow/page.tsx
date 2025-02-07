"use client";

import { useRouter } from "next/navigation";

const BuyNowForm = () => {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents default form submission
    router.push("/orderconfirmed"); // Redirects to orderconfirmed page
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg space-y-4">
        <h2 className="text-2xl font-bold text-center">Buy Now</h2>
        <div>
          <label className="block text-sm font-medium text-gray-700">Full Name</label>
          <input type="text" name="name" required className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <input type="email" name="email" required className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input type="tel" name="phone" required className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Shipping Address</label>
          <textarea name="address" required className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">City</label>
          <input type="text" name="city" required className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Country</label>
          <select name="country" required className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm">
            <option value="">Select Country</option>
            <option value="Pakistan">Pakistan</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Payment Method</label>
          <select name="payment_method" required className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm">
            <option value="">Select Payment Method</option>
            <option value="easypaisa">EasyPaisa</option>
            <option value="jazzcash">JazzCash</option>
            <option value="meezan_bank">Meezan Bank</option>
            <option value="visa_card">Visa Card</option>
            <option value="cash_on_delivery">Cash On Delivery</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input type="text" name="card" placeholder="1234 5678 9012 3456" required className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
          <input type="month" name="expiry" required className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">CVV</label>
          <input type="text" name="cvv" placeholder="123" required className="mt-1 block w-full px-4 py-2 border rounded-md shadow-sm" />
        </div>


        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default BuyNowForm;
