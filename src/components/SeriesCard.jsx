import React from "react";
import { Link } from "react-router-dom";

const SeriesCard = ({ name, image, description }) => {
  return (
    <Link to={`/products/${encodeURIComponent(name)}`}>
      <div
        className="bg-white rounded-lg shadow-md overflow-hidden group cursor-pointer transition-shadow duration-300 hover:shadow-xl"
        data-aos="fade-up"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="p-4">
          <h3 className="text-lg font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default SeriesCard;
