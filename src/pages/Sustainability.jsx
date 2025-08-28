// src/pages/Sustainability.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

/* ---------- Black/Gray SVG primitives (no external assets) ---------- */

const TileGrid = ({ stroke = "rgba(0,0,0,0.18)", id = "tiles" }) => (
  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
    <defs>
      <pattern id={id} width="56" height="56" patternUnits="userSpaceOnUse">
        <path d="M0 56 V0 M56 0 H0" stroke={stroke} strokeWidth="1" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);

const LeavesArt = () => (
  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
    <defs>
      <linearGradient id="leafg-black" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="rgba(0,0,0,0.22)" />
        <stop offset="1" stopColor="rgba(0,0,0,0.06)" />
      </linearGradient>
    </defs>
    {[...Array(14)].map((_, i) => {
      const cx = (i * 73) % 100 + 5;
      const cy = ((i * 37) % 100) + 5;
      const rot = (i * 29) % 80 - 40;
      const rx = 70 + (i % 5) * 10;
      const ry = 120 + ((i * 7) % 40);
      return (
        <g key={i} transform={`translate(${cx}%, ${cy}%) rotate(${rot})`} opacity="0.65">
          <ellipse rx={rx} ry={ry} fill="url(#leafg-black)" />
          <line x1="0" y1={-ry} x2="0" y2={ry} stroke="rgba(0,0,0,0.5)" strokeWidth="2" />
        </g>
      );
    })}
  </svg>
);

const WaterCycleArt = () => (
  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
    {/* droplets */}
    {[...Array(16)].map((_, i) => {
      const x = (i * 6.1 * 10) % 100;
      const y = (i * 9.3 * 10) % 100;
      const r = 2 + (i % 4);
      return (
        <g key={i} transform={`translate(${x}%, ${y}%)`} opacity="0.5">
          <path
            d="M0,-12 L8,0 A8,8 0 1 1 -8,0 Z"
            fill="rgba(0,0,0,0.22)"
            transform={`scale(${r / 6})`}
          />
        </g>
      );
    })}
    {/* circular pixels */}
    {[...Array(4)].map((_, i) => {
      const cx = 20 + i * 20;
      const cy = 30 + (i % 2) * 25;
      const rad = 12 + i * 2;
      return (
        <g key={`c${i}`} opacity="0.35">
          {[...Array(36)].map((__, a) => {
            const ang = (a * 300) / 36;
            const x = cx + rad * Math.cos((ang * Math.PI) / 180);
            const y = cy + rad * Math.sin((ang * Math.PI) / 180);
            return <rect key={a} x={x} y={y} width="1.5" height="1.5" fill="rgba(0,0,0,0.45)" />;
          })}
        </g>
      );
    })}
  </svg>
);

const ShieldSafetyArt = () => (
  <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
    <g transform="translate(50%, 45%)" opacity="0.55">
      <polygon
        points="0,-140 110,-70 92,80 0,130 -92,80 -110,-70"
        fill="rgba(0,0,0,0.30)"
        stroke="rgba(0,0,0,0.50)"
        strokeWidth="2"
      />
      <polygon
        points="0,-110 90,-50 76,60 0,100 -76,60 -90,-50"
        fill="rgba(0,0,0,0.20)"
      />
    </g>
    {/* footprints */}
    <g opacity="0.45">
      <g transform="translate(40%,65%) rotate(-12)">
        <ellipse cx="0" cy="40" rx="26" ry="42" fill="rgba(0,0,0,0.45)" />
        {[-22, 0, 22].map((dx, i) => (
          <ellipse key={i} cx={dx} cy="0" rx="7" ry="10" fill="rgba(0,0,0,0.45)" />
        ))}
      </g>
      <g transform="translate(60%,67%) rotate(12)">
        <ellipse cx="0" cy="40" rx="26" ry="42" fill="rgba(0,0,0,0.45)" />
        {[-22, 0, 22].map((dx, i) => (
          <ellipse key={i} cx={dx} cy="0" rx="7" ry="10" fill="rgba(0,0,0,0.45)" />
        ))}
      </g>
    </g>
  </svg>
);

/* ---------- UI atoms ---------- */

const Pillar = ({ icon, title, desc }) => (
  <div
    className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
    data-aos="fade-up"
  >
    <div className="text-2xl">{icon}</div>
    <h4 className="mt-3 text-lg font-semibold text-gray-900">{title}</h4>
    <p className="mt-2 text-gray-700 leading-relaxed">{desc}</p>
  </div>
);

const Stat = ({ value, unit, label }) => (
  <div className="text-center" data-aos="zoom-in">
    <div className="text-4xl md:text-5xl font-bold text-gray-900">
      {value}
      <span className="text-2xl align-super ml-1">{unit}</span>
    </div>
    <div className="mt-2 text-gray-700">{label}</div>
  </div>
);

/* ---------- Page ---------- */

export default function Sustainability() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-16 bg-white text-gray-800">
      {/* HERO — light gray with black tile grid, matches Home's clean look */}
      <section className="relative h-[42vh] md:h-[52vh] rounded-b-3xl overflow-hidden" data-aos="fade">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50 to-slate-100" />
        <TileGrid id="tiles-hero" stroke="rgba(0,0,0,0.16)" />
        <div className="relative h-full max-w-7xl mx-auto px-6 md:px-16 flex items-center">
          <div className="max-w-3xl text-gray-900">
            <h1 className="text-3xl md:text-5xl font-bold">Our Commitment to Sustainability</h1>
            <p className="mt-4 md:text-lg leading-relaxed text-gray-700">
              Rooted in <span className="font-semibold">Anhui, China</span>, LUVIN blends craftsmanship and engineering
              to build surfaces that last longer, perform better, and tread lighter—without compromising design.
            </p>
          </div>
        </div>
      </section>

      {/* Four pillars (clean cards) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mt-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Pillar
            icon="🌱"
            title="Eco Materials"
            desc="Low-emission body and glazes, with recycled mineral content on select lines—designed for longevity to reduce replacements."
          />
          <Pillar
            icon="💧"
            title="Responsible Manufacturing"
            desc="Closed-loop water systems and efficient kilns in our Anhui base to lower energy and water per m²."
          />
          <Pillar
            icon="♻️"
            title="Circular Design"
            desc="Durable, low-absorption, easy-clean finishes; paper-based, recyclable packaging; minimized one-time plastics."
          />
          <Pillar
            icon="👣"
            title="Health & Safety"
            desc="Low-VOC inks/additives, slip-resistance options and hygiene-focused finishes for everyday spaces."
          />
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mt-14">
        <div className="rounded-xl border bg-gray-50 p-6 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat value="20+" unit="yrs" label="tile-making expertise" />
            <Stat value="≤0.5" unit="%" label="water absorption (select full-body series)" />
            <Stat value="30" unit="%" label="recycled content (up to, eligible lines)" />
            <Stat value="100" unit="%" label="paper-based recyclable packaging goal" />
          </div>
          <p className="mt-6 text-sm text-gray-600">
            * Actual metrics vary by series/spec; we continually publish and improve core environmental data.
          </p>
        </div>
      </section>

      {/* Monochrome “image” cards using black SVG art */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mt-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Eco materials */}
        <article className="relative rounded-xl overflow-hidden border bg-white" data-aos="fade-up">
          <div className="absolute inset-0">
            <LeavesArt />
            <TileGrid id="tiles-leaves" stroke="rgba(0,0,0,0.12)" />
          </div>
          <div className="relative p-6">
            <h3 className="text-gray-900 text-xl font-semibold">Eco-friendly Materials</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Optimized, low-emission recipes and stable body formulations—on select ranges we introduce recycled inputs
              while preserving consistency, texture, and long-term performance.
            </p>
          </div>
        </article>

        {/* Manufacturing */}
        <article className="relative rounded-xl overflow-hidden border bg-white" data-aos="fade-up" data-aos-delay="100">
          <div className="absolute inset-0">
            <WaterCycleArt />
            <TileGrid id="tiles-water" stroke="rgba(0,0,0,0.12)" />
          </div>
          <div className="relative p-6">
            <h3 className="text-gray-900 text-xl font-semibold">Responsible Manufacturing</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Water recycling, heat-recovery and digital firing control reduce per-m² energy and water; robust QA cuts rework and scrap.
            </p>
          </div>
        </article>

        {/* Health & Safety */}
        <article className="relative rounded-xl overflow-hidden border bg-white" data-aos="fade-up" data-aos-delay="200">
          <div className="absolute inset-0">
            <ShieldSafetyArt />
            <TileGrid id="tiles-shield" stroke="rgba(0,0,0,0.10)" />
          </div>
          <div className="relative p-6">
            <h3 className="text-gray-900 text-xl font-semibold">Health & Safety</h3>
            <p className="mt-3 text-gray-700 leading-relaxed">
              Low-VOC chemistries, easy-clean finishes and slip-resistance options for kitchens, bathrooms and outdoor steps.
            </p>
          </div>
        </article>
      </section>

      {/* Brand story / Anhui origin — keeps Home vibe */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mt-16" data-aos="fade-up">
        <div className="rounded-xl border bg-white p-6 md:p-10">
          <h3 className="text-2xl font-semibold text-gray-900">Made in Anhui · Crafted with Care</h3>
          <p className="mt-4 leading-relaxed text-gray-700">
            Anchored in Anhui’s ceramic ecosystem, LUVIN pairs traditional craft with modern process control—from glaze
            chemistry to press pressure and firing curves—so each collection balances tactility, longevity and responsibility.
            With our partners, we advance greener mining, logistics and packaging year after year.
          </p>
        </div>
      </section>

      {/* CTA — black pill buttons (same as Home/Navbar) */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 mt-14">
        <div className="rounded-xl border bg-gray-50 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-xl font-semibold text-gray-900">Ready to build responsibly?</h4>
            <p className="mt-2 text-gray-700">
              Talk to our team for sustainability specs, documentation and project-specific recommendations.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/contact"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium
                         bg-gray-900/90 text-white hover:bg-gray-900 transition
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
            >
              Contact Us
            </a>
            <a
              href="/products#classic-plain"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium
                         bg-white border border-gray-300 hover:bg-gray-100 transition
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
            >
              Explore Products
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
