// src/pages/ProductSeriesPage.jsx
import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { tileData } from "../data/tileData";
import ProductCard from "../components/ProductCard";

const ProductSeriesPage = () => {
  const { series } = useParams();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  // 过滤属于该系列的产品
  const filteredTiles = tileData.normal.filter(
    (tile) => tile.series === series
  );

  return (
    <div className="pt-20 pb-16 px-6 md:px-16 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <Link to="/products" className="text-blue-600 hover:underline text-sm">
          ← 返回所有系列
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        {series}
      </h2>

      {filteredTiles.length === 0 ? (
        <p className="text-center text-gray-600">该系列暂无产品。</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredTiles.map((tile, idx) => (
            <ProductCard key={idx} {...tile} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductSeriesPage;
