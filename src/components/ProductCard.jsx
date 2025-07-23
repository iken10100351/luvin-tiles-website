import React, { useState } from 'react';

const ProductCard = ({ type, title, color, size, description, details, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="bg-white rounded-xl shadow-xl overflow-hidden group transition-shadow duration-300 hover:shadow-2xl"
      data-aos="zoom-in"
    >
      <div className="overflow-hidden rounded-t-xl">
        <img
          src={image}
          alt={title}
          className="w-full h-[220px] sm:h-[300px] object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">Type：{type}</p>
        <p className="text-sm text-gray-600 mt-1">Color：{color}</p>
        <p className="text-sm text-gray-600 mt-1">Size：{size}</p>
        <p className="text-sm text-gray-600 mt-2 line-clamp-2">{description}</p>

        {showDetails && (
          <p className="text-sm text-gray-700 mt-3 whitespace-pre-line">{details}</p>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-4 text-blue-600 hover:text-blue-800 hover:underline text-sm focus:outline-none"
        >
          {showDetails ? 'Less' : 'More'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
