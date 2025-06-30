import React from "react";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="bg-[#f5f2ec] min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-md bg-white shadow-lg rounded-lg p-10">
        <h2 className="text-3xl font-semibold text-[#b89b72] mb-4">Thank You!</h2>
        <p className="text-gray-700 mb-6">
          Your message has been successfully sent. We'll get back to you soon.
        </p>
        <Link
          to="/"
          className="inline-block bg-[#b89b72] text-white px-6 py-3 rounded hover:bg-[#a78d67] transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;
