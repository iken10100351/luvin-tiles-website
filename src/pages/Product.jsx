// src/pages/Products.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SeriesCard from "../components/SeriesCard";

const classicPlainSeries = [
  {
    name: "通体低吸梯级砖",
    image: "/images/series/step_tile.jpg",
    description: "高安全性的楼梯专用砖，适用于内外场所。"
  },
  {
    name: "低吸通体耐磨砖（SG系列）",
    image: "/images/series/sg_tile.jpg",
    description: "砂感细腻，耐磨性强，适合高频区域。"
  },
  {
    name: "低吸通体耐磨砖（N系列）",
    image: "/images/series/n_tile.jpg",
    description: "耐脏、低吸水，专为厨房与阳台设计。"
  },
  {
    name: "低吸通体耐磨砖（平面）",
    image: "/images/series/flat_tile.jpg",
    description: "表面平整光滑，现代简约风格首选。"
  },
  {
    name: "低吸通体耐磨砖（条纹系列）",
    image: "/images/series/stripe_tile.jpg",
    description: "条纹细节，营造视觉延伸与质感层次。"
  },
  {
    name: "低吸通体耐磨砖（砂岩系列）",
    image: "/images/series/sandstone_tile.jpg",
    description: "仿砂岩效果，自然质朴，适用于庭院与公共空间。"
  },
  {
    name: "原边仿古（亚光系列）",
    image: "/images/series/matte_antique_tile.jpg",
    description: "经典亚光质感，还原复古工艺。"
  },
  {
    name: "原边仿古（干粒系列）",
    image: "/images/series/dry_grain_tile.jpg",
    description: "干粒表面，防滑实用兼具艺术美感。"
  },
  {
    name: "原边仿古（半抛亮面系列）",
    image: "/images/series/semi_gloss_tile.jpg",
    description: "融合亮面与仿古风格，复古而不失现代感。"
  }
];

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-20 pb-16 px-6 md:px-16 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Classic Plain Tile 系列
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {classicPlainSeries.map((series, idx) => (
          <SeriesCard key={idx} {...series} />
        ))}
      </div>
    </div>
  );
};

export default Products;
