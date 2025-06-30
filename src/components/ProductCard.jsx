import React, { useState } from 'react';

const ProductCard = ({ type, title, color, size, description, details, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-xl"
      data-aos="zoom-in"
    >
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-1">Type：{type}</p>
        <p className="text-sm text-gray-600 mt-1">Color：{color}</p>
        <p className="text-sm text-gray-600 mt-1">Size：{size}</p>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{description}</p>

        {showDetails && (
          <p className="text-sm text-gray-700 mt-2 whitespace-pre-line">{details}</p>
        )}

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="mt-3 text-blue-600 hover:underline text-sm focus:outline-none"
        >
          {showDetails ? 'Less' : 'More'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
