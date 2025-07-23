// src/pages/Products.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SeriesCard from "../components/SeriesCard";

const classicPlainSeries = [
  {
    name: "通体低吸梯级砖",
    image: "/images/product/Low_Absorption_Stair_Tile/Beige_Sand .png",
    description: "高安全性的楼梯专用砖，适用于内外场所。"
  },
  {
    name: "低吸通体耐磨砖（SG系列）",
    image: "/images/product/Full-Body_Low_Absorption_Tile (SG Series)/Golden_Sand.png",
    description: "砂感细腻，耐磨性强，适合高频区域。"
  },
  {
    name: "低吸通体耐磨砖（N系列）",
    image: "/images/product/Full-Body_Low_Absorption_Tile (N Series)/Crackstone.png",
    description: "耐脏、低吸水，专为厨房与阳台设计。"
  },
  {
    name: "低吸通体耐磨砖（平面）",
    image: "/images/product/Low-absorption_through-body_wear-resistant_bricks(flat)/Cloud_Sandstone.png",
    description: "表面平整光滑，现代简约风格首选。"
  },
  {
    name: "原边仿古（半抛亮面系列）",
    image: "/images/product/Raw_Edge_Antique(Semi-Polished Glossy Series)/Fog_Stone.png",
    description: "融合亮面与仿古风格，复古而不失现代感。"
  },
  {
    name: "原边仿古（亚光系列）",
    image: "/images/product/Original_Edge_Antique(Matte Series)/Bruma.png",
    description: "经典亚光质感，还原复古工艺。"
  },
  
];
const artTileSeries=[
  {
    name: "艺术砖（方）",
    image: "/images/product/Art_Tile(Square)/Joycourt.png",
    description: "经典亚光质感，还原复古工艺。"
  },
  {
    name: "艺术砖（长）",
    image: "/images/product/Art_Tile (long)/Color_Rhapsody_Series.png",
    description: "经典亚光质感，还原复古工艺。"
  },
  {
    name: "艺术砖（组图）",
    image: "/images/product/Art_Tile(group photo)/No_Name_19.png",
    description: "经典亚光质感，还原复古工艺。"
  },

]

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-20 pb-16 px-6 md:px-16 bg-gray-50 min-h-screen">

  {/* 第一块：经典砖系列 */}
  <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
    Classic Plain Tile 系列
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {classicPlainSeries.map((series, idx) => (
      <SeriesCard key={idx} {...series} />
    ))}
  </div>

  {/* 第二块：艺术砖系列 */}
  <h2 className="text-3xl font-bold text-center text-gray-800 mt-20 mb-10">
    Art Tile 系列
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {artTileSeries.map((series, idx) => (
      <SeriesCard key={idx} {...series} />
    ))}
  </div>

</div>
    
  );
};

export default Products;
