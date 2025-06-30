import React from 'react';
import ProductCard from './ProductCard';

const ProductSection = ({ title, products }) => {
  return (
    <section className="py-12 px-4 max-w-7xl mx-auto">
      <h2
        className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center"
        data-aos="fade-down"
      >
        {title}
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
