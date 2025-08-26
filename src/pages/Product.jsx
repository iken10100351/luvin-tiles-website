// src/pages/Products.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import SeriesCard from "../components/SeriesCard";

const classicPlainSeries = [
  {
    name: "Full-Body Low-Absorption Stair Tile",
    image: "/images/product/Low_Absorption_Stair_Tile/Beige_Sand .webp",
    description: "Engineered for enhanced safety, these tiles are specifically designed for stair applications, suitable for both indoor and outdoor environments."
  },
  {
    name: "Low-Absorption Full-Body Wear-Resistant Tile (SG Series)",
    image: "/images/product/Full-Body_Low_Absorption_Tile (SG Series)/Golden_Sand.webp",
    description: "Featuring a refined sand-like texture with superior abrasion resistance, ideal for high-traffic commercial and residential spaces."
  },
  {
    name: "Low-Absorption Full-Body Wear-Resistant Tile (N Series)",
    image: "/images/product/Full-Body_Low_Absorption_Tile (N Series)/Crackstone.webp",
    description: "With excellent stain resistance and low water absorption, this series is specially crafted for kitchens and balconies."
  },
  {
    name: "Low-Absorption Full-Body Wear-Resistant Tile (Flat Surface)",
    image: "/images/product/Low-absorption_through-body_wear-resistant_bricks(flat)/Cloud_Sandstone.webp",
    description: "A smooth and even finish that complements modern minimalist design, making it a top choice for contemporary interiors."
  },
  {
    name: "Natural Edge Rustic Tile (Semi-Polished Series)",
    image: "/images/product/Raw_Edge_Antique(Semi-Polished Glossy Series)/Fog_Stone.webp",
    description: "Combining a semi-polished surface with rustic character, this series achieves a timeless vintage look with a modern touch."
  },
  {
    name: "Natural Edge Rustic Tile (Matte Series)",
    image: "/images/product/Original_Edge_Antique(Matte Series)/Bruma.webp",
    description: "Classic matte finish that faithfully reflects traditional craftsmanship, offering an authentic rustic appeal."
  },
  
];
const artTileSeries=[
  {
    name: "Art Tile (Square Series)",
    image: "/images/product/Art_Tile(Square)/Joycourt.webp",
    description: "A timeless square-format tile with a classic matte finish, designed to bring vintage charm and versatile elegance into modern interiors."
  },
  {
    name: "Art Tile (Rectangular Series)",
    image: "/images/product/Art_Tile (long)/Color_Rhapsody_Series.webp",
    description: "Rectangular tiles with refined matte textures, combining geometric balance and artisanal heritage for creative, linear design expressions."
  },
  {
    name: "Art Tile (Collection Series)",
    image: "/images/product/Art_Tile(group photo)/No_Name_19.webp",
    description: "A curated range of artistic tiles in varied dimensions, crafted to capture traditional craftsmanship while offering diverse design possibilities."
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
    Classic Plain Tile Collection
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {classicPlainSeries.map((series, idx) => (
      <SeriesCard key={idx} {...series} />
    ))}
  </div>

  {/* 第二块：艺术砖系列 */}
  <h2 className="text-3xl font-bold text-center text-gray-800 mt-20 mb-10">
    Art Tile Collection
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
