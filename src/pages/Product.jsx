// src/pages/Products.jsx
import React, { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import SeriesCard from "../components/SeriesCard";

/* ====== 数据保持你的原始内容 ====== */
const classicPlainSeries = [
  {
    name: "Full-Body Low-Absorption Stair Tile",
    image: "/images/product/Low_Absorption_Stair_Tile/Beige_Sand.webp",
    description:
      "Engineered for enhanced safety, these tiles are specifically designed for stair applications, suitable for both indoor and outdoor environments.",
  },
  {
    name: "Low-Absorption Full-Body Wear-Resistant Tile (SG Series)",
    image:
      "/images/product/Full-Body_Low_Absorption_Tile (SG Series)/Golden_Sand.webp",
    description:
      "Featuring a refined sand-like texture with superior abrasion resistance, ideal for high-traffic commercial and residential spaces.",
  },
  {
    name: "Low-Absorption Full-Body Wear-Resistant Tile (N Series)",
    image:
      "/images/product/Full-Body_Low_Absorption_Tile (N Series)/Crackstone.webp",
    description:
      "With excellent stain resistance and low water absorption, this series is specially crafted for kitchens and balconies.",
  },
  {
    name: "Low-Absorption Full-Body Wear-Resistant Tile (Flat Surface)",
    image:
      "/images/product/Low-absorption_through-body_wear-resistant_bricks(flat)/Cloud_Sandstone.webp",
    description:
      "A smooth and even finish that complements modern minimalist design, making it a top choice for contemporary interiors.",
  },
  {
    name: "Natural Edge Rustic Tile (Semi-Polished Series)",
    image:
      "/images/product/Raw_Edge_Antique(Semi-Polished Glossy Series)/Fog_Stone.webp",
    description:
      "Combining a semi-polished surface with rustic character, this series achieves a timeless vintage look with a modern touch.",
  },
  {
    name: "Natural Edge Rustic Tile (Matte Series)",
    image: "/images/product/Original_Edge_Antique(Matte Series)/Bruma.webp",
    description:
      "Classic matte finish that faithfully reflects traditional craftsmanship, offering an authentic rustic appeal.",
  },
];

const artTileSeries = [
  {
    name: "Art Tile (Square Series)",
    image: "/images/product/Art_Tile(Square)/Joycourt.webp",
    description:
      "A timeless square-format tile with a classic matte finish, designed to bring vintage charm and versatile elegance into modern interiors.",
  },
  {
    name: "Art Tile (Rectangular Series)",
    image: "/images/product/Art_Tile (long)/Color_Rhapsody_Series.webp",
    description:
      "Rectangular tiles with refined matte textures, combining geometric balance and artisanal heritage for creative, linear design expressions.",
  },
  {
    name: "Art Tile (Collection Series)",
    image: "/images/product/Art_Tile(group photo)/No_Name_19.webp",
    description:
      "A curated range of artistic tiles in varied dimensions, crafted to capture traditional craftsmanship while offering diverse design possibilities.",
  },
];

/* ================== 页面组件 ================== */
export default function Products() {
  const { hash } = useLocation();
  const navigate = useNavigate();
  const tabsRef = useRef(null);
  const classicRef = useRef(null);
  const artRef = useRef(null);
  const [activeTab, setActiveTab] = useState("classic");

  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  // 计算需要避让的高度：固定导航 + sticky 标签栏 + 余量
  const getOffset = () => {
    const nav = document.querySelector("nav");
    const navH = nav ? nav.offsetHeight : 0;
    const tabsH = tabsRef.current ? tabsRef.current.offsetHeight : 0;
    return navH + tabsH + 16; // 16px margin
  };

  // 自定义平滑滚动（避免锚点遮挡 & 闪屏）
  const smoothJump = (id, updateHash = true) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - getOffset();
    if (updateHash) window.history.replaceState(null, "", `#${id}`);
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  // 首次带 hash 进来，按自定义偏移定位
  useEffect(() => {
    if (!hash) return;
    requestAnimationFrame(() => smoothJump(hash.slice(1), false));
    // 初始 activeTab
    setActiveTab(hash === "#art-tile" ? "art" : "classic");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash]);

  // ScrollSpy：滚动中高亮当前分区的标签（带过渡，不闪屏）
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          if (e.target.id === "classic-plain") setActiveTab("classic");
          if (e.target.id === "art-tile") setActiveTab("art");
        });
      },
      {
        rootMargin: `-${getOffset()}px 0px -70% 0px`, // 进入视口上方偏移后即判定
        threshold: 0,
      }
    );
    if (classicRef.current) obs.observe(classicRef.current);
    if (artRef.current) obs.observe(artRef.current);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // 标签 pill 的美化样式（含 active 状态）
  const pill = (isActive) =>
    `px-4 py-2 rounded-full transition-all duration-300
     ${isActive
       ? "bg-slate-900 text-white shadow-lg ring-1 ring-black/10"
       : "bg-white/80 text-gray-800 shadow-sm hover:shadow ring-1 ring-black/5 hover:ring-black/10 backdrop-blur"
     }`;

  return (
    <div className="pt-20 pb-16 px-6 md:px-16 bg-gray-50 min-h-screen">
      {/* 顶部标签栏（sticky + 玻璃态） */}
      <div
        ref={tabsRef}
        className="sticky top-16 z-30 -mx-6 md:-mx-16 px-6 md:px-16 py-3
                   bg-gray-50/70 backdrop-blur supports-[backdrop-filter]:backdrop-blur-md
                   border-b border-gray-200"
      >
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            className={pill(activeTab === "classic")}
            onClick={() => smoothJump("classic-plain")}
          >
            Classic Plain
          </button>
          <button
            type="button"
            className={pill(activeTab === "art")}
            onClick={() => smoothJump("art-tile")}
          >
            Art Tiles
          </button>

          <div className="ml-auto flex gap-3">
            <button
              type="button"
              onClick={() => navigate("/sample")}
              className="px-4 py-2 rounded-full bg-white/80 text-gray-800 shadow-sm
                         hover:shadow ring-1 ring-black/5 hover:ring-black/10 backdrop-blur
                         transition-all duration-300"
            >
              Case Studies
            </button>
            <a
              href="/contact"
              className="px-4 py-2 rounded-full bg-slate-900 text-white hover:bg-black
                         font-medium transition-colors duration-200 shadow"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* ===== Classic Plain ===== */}
      <section
        id="classic-plain"
        ref={classicRef}
        aria-labelledby="classic-plain-heading"
        className="scroll-mt-[140px]"
      >
        <div className="text-center mt-10 mb-8" data-aos="fade-up">
          <h2
            id="classic-plain-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Classic Plain Tile Collection
            </span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-slate-900 to-slate-600" />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {classicPlainSeries.map((series, idx) => (
            <div
              key={idx}
              className="group will-change-transform transition-transform duration-300 hover:-translate-y-1"
            >
              <SeriesCard {...series} />
            </div>
          ))}
        </div>
      </section>

      {/* ===== Art Tiles ===== */}
      <section
        id="art-tile"
        ref={artRef}
        aria-labelledby="art-tile-heading"
        className="scroll-mt-[140px] mt-20"
      >
        <div className="text-center mb-8" data-aos="fade-up">
          <h2
            id="art-tile-heading"
            className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
          >
            <span className="bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
              Art Tile Collection
            </span>
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-slate-900 to-slate-600" />
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="50"
        >
          {artTileSeries.map((series, idx) => (
            <div
              key={idx}
              className="group will-change-transform transition-transform duration-300 hover:-translate-y-1"
            >
              <SeriesCard {...series} />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
