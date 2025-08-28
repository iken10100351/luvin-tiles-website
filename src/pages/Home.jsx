// src/pages/Home.jsx
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLocation } from "react-router-dom";
import "swiper/css/bundle";

export default function Home() {
  const location = useLocation();

  // ✅ 只允许 Home 页内部的锚点；无效或不存在就回到 #top，并清理 URL 的 hash
  useEffect(() => {
    if (location.pathname !== "/") return;

    const allowed = new Set(["top", "collections", "about", "cta"]);
    const rawHash = (location.hash || "").replace(/^#/, "");
    const targetId = allowed.has(rawHash) ? rawHash : "top";

    // 如果 hash 非法或不是本页锚点，清理掉 hash，避免以后再次受影响
    if (rawHash && !allowed.has(rawHash)) {
      window.history.replaceState(null, "", "/");
    }

    const scroll = () => {
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      else window.scrollTo({ top: 0, behavior: "smooth" }); // 双保险
    };

    // 等一帧让布局/图片先渲染，再滚动；再补一次兜底
    requestAnimationFrame(scroll);
    const t = setTimeout(scroll, 300);
    return () => clearTimeout(t);
  }, [location.pathname, location.hash]);

  const heroImages = [
    "/images/Tile-banner/banner1.webp",
    "/images/Tile-banner/banner2.webp",
    "/images/Tile-banner/banner3.webp",
    "/images/Tile-banner/banner4.webp",
    "/images/Tile-banner/banner5.webp",
  ];

  const tiles = [
    {
      name: "Base Decor",
      images: [
        "/images/Base_Decor/banner2.webp",
        "/images/Base_Decor/banner3.webp",
        "/images/Base_Decor/banner4.webp",
        "/images/Base_Decor/banner5.webp",
        "/images/Base_Decor/banner6.webp",
        "/images/Base_Decor/banner7.webp",
      ],
      pdf: "/files/Base_Decor.pdf",
    },
    {
      name: "Ceramic mosaics",
      images: [
        "/images/Ceramic_mosics/banner1.webp",
        "/images/Ceramic_mosics/banner2.webp",
        "/images/Ceramic_mosics/banner3.webp",
        "/images/Ceramic_mosics/banner4.webp",
      ],
      pdf: "/files/Ceramic_mosics.pdf",
    },
    {
      name: "Flower Bird",
      images: [
        "/images/Flower_bird/banner1.webp",
        "/images/Flower_bird/banner2.webp",
        "/images/Flower_bird/banner3.webp",
        "/images/Flower_bird/banner4.webp",
      ],
      pdf: "/files/Flower_bird.pdf",
    },
  ];

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner */}
      <section id="top" className="relative w-full h-[70vh] md:h-screen scroll-mt-28">
        <Swiper
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop
          preloadImages={false}
          lazy={{ loadPrevNext: true, loadPrevNextAmount: 1 }}
          className="w-full h-full"
          aria-label="LUVIN AUSTRALIA hero banner"
        >
          {heroImages.map((src, index) => (
            <SwiperSlide key={src}>
              <div className="relative w-full h-full">
                <img
                  data-src={src}
                  src={src}
                  alt={`Hero banner ${index + 1} showcasing ROMA DILUO tiles`}
                  className="swiper-lazy w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="swiper-lazy-preloader" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4 tracking-wide">
                    LUVIN AUSTRALIA
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Product Categories */}
      <section id="collections" className="py-16 px-6 md:px-20 scroll-mt-28">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-12">
          Explore Our Tile Collections
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tiles.map((tile) => (
            <article
              key={tile.name}
              className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition flex flex-col"
            >
              <Swiper
                pagination={{ clickable: true }}
                loop
                preloadImages={false}
                lazy={{ loadPrevNext: true }}
                className="w-full"
                aria-label={`${tile.name} preview carousel`}
              >
                {tile.images.map((imgSrc, i) => (
                  <SwiperSlide key={imgSrc}>
                    <div className="w-full h-48 md:h-56 lg:h-64 relative">
                      <img
                        data-src={imgSrc}
                        src={imgSrc}
                        alt={`${tile.name} sample ${i + 1}`}
                        className="swiper-lazy w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="swiper-lazy-preloader" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-medium mb-4">{tile.name}</h3>
                <a
                  href={tile.pdf}
                  download
                  className="mt-auto inline-block bg-gray-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition"
                  aria-label={`Download ${tile.name} catalogue PDF`}
                >
                  Download PDF
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-gray-100 py-16 px-6 md:px-20 scroll-mt-28">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-10">
            About LUVIN AUSTRALIA
          </h2>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          <div
            className="relative rounded-2xl overflow-hidden min-h-[260px] md:min-h-[380px]"
            style={{
              backgroundImage: "url('/images/Tile-banner/anhui.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
              <div
                className="w-full max-w-[760px] text-white font-bold leading-relaxed text-left text-base md:text-lg"
                style={{ hyphens: "none", wordBreak: "normal", overflowWrap: "break-word" }}
              >
                <p className="mb-4">
                  While many are still searching for the ideal home, we’ve been quietly
                  shaping it—tile by tile—for over 20 years.
                </p>
                <p>
                  From our base in Anhui, China, we blend craftsmanship with creativity,
                  allowing natural textures and timeless design to bring warmth and
                  personality into modern living spaces.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="space-y-6 text-lg leading-relaxed font-bold">
              <p>
                ROMA DILUO is built on decades of experience and a deep respect for both
                tradition and innovation. Every tile we create is more than just a
                surface—it&apos;s a reflection of our attention to detail, our passion for
                materials, and our belief that good design should feel effortless.
              </p>
              <p>
                From subtle earth tones to bold, expressive patterns, our collections
                complement the rhythms of everyday life—calm, elegant, and quietly
                confident.
              </p>
              <p>
                What we offer is not just a product, but a way to bring beauty and balance
                into your space. Carefully designed, precisely made, and always with
                feeling.
              </p>
            </div>

            <div className="mt-8 w-full">
              <div className="w-full aspect-[16/10] md:aspect-[16/9]">
                <img
                  src="/images/home.webp"
                  alt="ROMA DILUO showroom and material textures"
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-16 px-6 md:px-20 text-center scroll-mt-28">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Visit Our Showroom Today
        </h2>
        <p className="text-lg mb-6">
          Book a visit or contact us for expert design consultation.
        </p>
        <a
          href="/contact"
          className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
