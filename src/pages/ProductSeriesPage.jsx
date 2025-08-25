// src/pages/ProductSeriesPage.jsx
import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { tileData } from "../data/tileData";
import ProductCard from "../components/ProductCard";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const ProductSeriesPage = () => {
  const { series } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, [series]);

  const allTiles = [...tileData.normal, ...tileData.art];
  const filteredTiles = allTiles.filter((tile) => tile.series === series);

  const totalPages = Math.ceil(filteredTiles.length / productsPerPage);
  const currentTiles = filteredTiles.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const images = filteredTiles.map((tile) => ({ src: tile.image }));

  return (
    <div className="pt-20 pb-16 px-6 md:px-16 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <Link to="/products" className="text-blue-600 hover:underline text-sm">
          ←View All Series
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        {series}
      </h2>

      {filteredTiles.length === 0 ? (
        <p className="text-center text-gray-600">该系列暂无产品。</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {currentTiles.map((tile, idx) => (
              <div key={idx} onClick={() => {
                setLightboxIndex((currentPage - 1) * productsPerPage + idx);
                setLightboxOpen(true);
              }}>
                <ProductCard {...tile} />
              </div>
            ))}
          </div>

          {/* 分页按钮 */}
          <div className="flex justify-center mt-10 gap-3">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
              <button
                key={num}
                onClick={() => setCurrentPage(num)}
                className={`px-3 py-1 rounded ${
                  num === currentPage
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Lightbox */}
          {lightboxOpen && (
            <Lightbox
              open={lightboxOpen}
              close={() => setLightboxOpen(false)}
              index={lightboxIndex}
              slides={images}
            />
          )}
        </>
      )}
    </div>
  );
};

export default ProductSeriesPage;
