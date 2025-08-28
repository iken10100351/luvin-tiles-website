// src/pages/ProductSeriesPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { tileData } from "../data/tileData";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// 规范化图片路径：修正扩展名前多余空格，并进行 URI 编码
const normalizeSrc = (src) => {
  if (!src) return "/images/placeholder.webp";
  const fixed = src.replace(/\s+\.(webp|png|jpe?g)$/i, ".$1"); // 例如 "Iron_Slate .webp" -> "Iron_Slate.webp"
  return encodeURI(fixed);
};

export default function ProductSeriesPage() {
  const { series } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [series]);

  // 合并全部系列，按当前系列过滤
  const allTiles = useMemo(() => [...tileData.normal, ...tileData.art], []);
  const filteredTiles = allTiles.filter((t) => t.series === series);

  // 分页
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;
  useEffect(() => setCurrentPage(1), [series]);
  const totalPages = Math.ceil(filteredTiles.length / perPage);
  const start = (currentPage - 1) * perPage;
  const pageTiles = filteredTiles.slice(start, start + perPage);

  // 展开状态（逐卡维护）
  const [expanded, setExpanded] = useState({});
  const [detailsOpen, setDetailsOpen] = useState({});
  useEffect(() => {
    setExpanded({});
    setDetailsOpen({});
  }, [series, currentPage]);

  // 灯箱
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const slides = filteredTiles.map((t) => ({ src: normalizeSrc(t.image) }));

  const TileCard = ({ tile, gIndex }) => {
    const isExpanded = !!expanded[gIndex];
    const isDetails = !!detailsOpen[gIndex];

    const desc = tile.description || "";
    const trimmed = !isExpanded && desc.length > 180 ? desc.slice(0, 180) + "…" : desc;

    // 规格信息：来自数据就展示，没有的给到合理占位说明
    const specs = {
      Type: tile.type || "Full-body / Glazed tile",
      Color: tile.color || "—",
      Size: tile.size || "—",
    };

    return (
      <article className="rounded-xl border overflow-hidden shadow-sm hover:shadow-md transition bg-white">
        {/* 只有图片可放大 */}
        <div
          className="relative aspect-[4/3] cursor-zoom-in bg-gray-100"
          onClick={() => {
            setLightboxIndex(gIndex);
            setLightboxOpen(true);
          }}
        >
          <img
            src={normalizeSrc(tile.image)}
            alt={tile.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              // 兜底占位
              e.currentTarget.src = "/images/placeholder.webp";
            }}
          />
          <span className="sr-only">Click image to enlarge</span>
        </div>

        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{tile.title}</h3>
          <p className="mt-2 text-gray-700 leading-relaxed">{trimmed}</p>

          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              aria-expanded={isExpanded}
              onClick={() => setExpanded((s) => ({ ...s, [gIndex]: !s[gIndex] }))}
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium
                         bg-white border border-gray-300 hover:bg-gray-100 transition"
            >
              {isExpanded ? "Less" : "More"}
            </button>

            {isExpanded && (
              <button
                type="button"
                aria-expanded={isDetails}
                onClick={() => setDetailsOpen((s) => ({ ...s, [gIndex]: !s[gIndex] }))}
                className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition
                  ${isDetails
                    ? "bg-gray-900/90 text-white hover:bg-gray-900"
                    : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100"}`}
              >
                {isDetails ? "Hide Details" : "View Details"}
              </button>
            )}
          </div>

          {isDetails && (
            <div className="mt-4 rounded-lg border bg-gray-50 p-4 text-sm text-gray-700">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                {Object.entries(specs).map(([k, v]) => (
                  <div key={k} className="flex">
                    <span className="w-24 shrink-0 text-gray-500">{k}</span>
                    <span className="text-gray-900">{v}</span>
                  </div>
                ))}
              </div>

              {tile.details && (
                <p className="mt-3 text-gray-700 leading-relaxed">{tile.details}</p>
              )}

              <div className="mt-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium
                             bg-gray-900/90 text-white hover:bg-gray-900 transition"
                >
                  Ask for full spec
                </Link>
              </div>
            </div>
          )}
        </div>
      </article>
    );
  };

  return (
    <div className="pt-20 pb-16 px-6 md:px-16 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <Link
          to="/products"
          className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium
                     bg-white border border-gray-300 hover:bg-gray-100 transition"
        >
          ← View All Series
        </Link>
      </div>

      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">{series}</h2>

      {filteredTiles.length === 0 ? (
        <p className="text-center text-gray-600">No products in this series yet.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {pageTiles.map((tile, i) => {
              const gIndex = start + i; // 在完整数组中的索引（用于灯箱）
              return <TileCard key={`${tile.title}-${gIndex}`} tile={tile} gIndex={gIndex} />;
            })}
          </div>

          {totalPages > 1 && (
            <div className="flex justify-center mt-10 gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                <button
                  key={num}
                  onClick={() => setCurrentPage(num)}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium transition
                    ${num === currentPage
                      ? "bg-gray-900/90 text-white hover:bg-gray-900"
                      : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100"}`}
                >
                  {num}
                </button>
              ))}
            </div>
          )}

          <Lightbox
            open={lightboxOpen}
            close={() => setLightboxOpen(false)}
            index={lightboxIndex}
            slides={slides}
          />
        </>
      )}
    </div>
  );
}
