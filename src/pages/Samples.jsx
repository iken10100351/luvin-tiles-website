import React, { useEffect, useMemo, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "living", label: "Living / Kitchen" },
  { key: "bath", label: "Bathroom" },
  { key: "wall", label: "Wall / Ceiling" },
];

// 单卡
const CaseCard = ({ item, onOpen }) => (
  <button
    type="button"
    onClick={() => onOpen(item)}
    className="group text-left rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition"
    data-aos="fade-up"
  >
    <div className="relative aspect-[4/3] bg-gray-100">
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span className="absolute top-2 left-2 rounded-full bg-white/90 text-gray-900 text-xs px-2 py-1">
        {item.categoryLabel}
      </span>
    </div>
    <div className="p-4">
      <div className="text-sm text-gray-500">Project Case</div>
      <div className="mt-1 font-medium text-gray-900">{item.title}</div>
      {item.meta && <div className="mt-1 text-sm text-gray-600">{item.meta}</div>}
    </div>
  </button>
);

// 灯箱
const Lightbox = ({ open, items, current, onClose, onPrev, onNext }) => {
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onPrev, onNext]);

  if (!open) return null;
  const it = items[current];

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/80 flex items-center justify-center p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-w-6xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={it.src}
          alt={it.alt}
          className="w-full h-auto rounded-lg"
          loading="eager"
        />
        <div className="mt-3 text-white">
          <div className="text-lg font-semibold">{it.title}</div>
          <div className="text-white/80 text-sm">{it.meta}</div>
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 bg-white/90 text-gray-900 rounded-full px-3 py-1 text-sm hover:bg-white"
        >
          Close
        </button>
        <button
          onClick={onPrev}
          className="absolute top-1/2 -left-3 translate-x-[-100%] -translate-y-1/2 bg-white/90 text-gray-900 rounded-full px-3 py-1 text-sm hover:bg-white"
        >
          ‹
        </button>
        <button
          onClick={onNext}
          className="absolute top-1/2 -right-3 translate-x-[100%] -translate-y-1/2 bg-white/90 text-gray-900 rounded-full px-3 py-1 text-sm hover:bg-white"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default function Samples() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  // 你的施工案例数据
  const cases = useMemo(
    () => [
      {
        id: "p1",
        title: "Open-plan Living & Kitchen — Matte White Large-Format Floor",
        category: "living",
        categoryLabel: "Living / Kitchen",
        src: "/images/Case/project_1.png",
        alt: "Large-format white porcelain tiles in an open-plan kitchen and living space",
        meta: "Floor | Large-format | Matte white",
      },
      {
        id: "p2",
        title: "Ceiling / Access Panel Detail — Clean Lines & Alignment",
        category: "wall",
        categoryLabel: "Wall / Ceiling",
        src: "/images/Case/project_2.png",
        alt: "Ceiling and access panel finished with tile alignment details",
        meta: "Ceiling detail | Alignment | Minimal trims",
      },
      {
        id: "p3",
        title: "Bathroom — Full-height Wall Cladding",
        category: "bath",
        categoryLabel: "Bathroom",
        src: "/images/Case/project_3.png",
        alt: "Bathroom with full-height wall tiles and linear drain",
        meta: "Wall | Full-height | Wet area",
      },
      {
        id: "p4",
        title: "Feature Wall — Seamless Large-Format Panels",
        category: "wall",
        categoryLabel: "Wall / Ceiling",
        src: "/images/Case/project_4.png",
        alt: "Large-format wall tiles with minimal joints",
        meta: "Wall | Large-format | Minimal joints",
      },
    ],
    []
  );

  const [filter, setFilter] = useState("all");
  const filtered = cases.filter((c) => (filter === "all" ? true : c.category === filter));

  // 灯箱状态
  const [open, setOpen] = useState(false);
  const [idx, setIdx] = useState(0);
  const openAt = (item) => {
    const i = filtered.findIndex((x) => x.id === item.id);
    setIdx(i < 0 ? 0 : i);
    setOpen(true);
  };
  const prev = () => setIdx((i) => (i - 1 + filtered.length) % filtered.length);
  const next = () => setIdx((i) => (i + 1) % filtered.length);

  return (
    <div className="bg-white text-gray-900 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <h1 className="text-3xl md:text-4xl font-semibold">Project Case Studies</h1>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Real installations featuring our Classic Plain and Art Tile lines. Explore finishes, joints,
          alignment and detailing in different spaces.
        </p>

        {/* 筛选 */}
        <div className="mt-6 flex flex-wrap gap-3">
          {FILTERS.map((f) => (
            <button
              key={f.key}
              onClick={() => setFilter(f.key)}
              className={`inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition
                ${filter === f.key
                  ? "bg-gray-900/90 text-white hover:bg-gray-900"
                  : "bg-white border border-gray-300 text-gray-900 hover:bg-gray-100"}`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* 图库 */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filtered.map((it) => (
            <CaseCard key={it.id} item={it} onOpen={openAt} />
          ))}
        </div>
      </div>

      {/* 灯箱 */}
      <Lightbox
        open={open}
        items={filtered}
        current={idx}
        onClose={() => setOpen(false)}
        onPrev={prev}
        onNext={next}
      />
    </div>
  );
}
