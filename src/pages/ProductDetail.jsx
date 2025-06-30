import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  return (
    <div className="pt-20 px-6">
      <h1 className="text-3xl font-bold mb-4">产品详情</h1>
      <p className="text-lg text-gray-700">你点击的是产品：{id}</p>
    </div>
  );
};

export default ProductDetail;
