// src/pages/About.jsx
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ValueCard = ({ icon, title, text, delay = 0 }) => (
  <div
    className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
    data-aos="fade-up"
    data-aos-delay={delay}
  >
    <div className="text-2xl">{icon}</div>
    <h4 className="mt-3 text-lg font-semibold text-gray-900">{title}</h4>
    <p className="mt-2 text-gray-700 leading-relaxed">{text}</p>
  </div>
);

const StepCard = ({ step, title, text }) => (
  <div
    className="rounded-xl border bg-white p-6 shadow-sm hover:shadow-md transition"
    data-aos="fade-up"
  >
    <div className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-gray-900 text-white text-sm font-semibold">
      {step}
    </div>
    <h5 className="mt-3 text-lg font-semibold text-gray-900">{title}</h5>
    <p className="mt-2 text-gray-700 leading-relaxed">{text}</p>
  </div>
);

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white text-gray-800 pt-20 pb-16">
      {/* 顶部标题（与 Home 一致的简洁风） */}
      <section className="px-6 md:px-16">
  <div className="max-w-7xl mx-auto">
    <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 text-left">
      About Us
    </h1>
    <p className="mt-4 max-w-3xl text-[17px] text-gray-700 leading-relaxed text-left">
      New to Queensland, backed by <span className="font-semibold">40+ years of combined experience</span> in importing
      and wholesaling ceramic tiles across Australia. We bring reliable products, clear service, and on-trend
      collections crafted for modern living.
    </p>
  </div>
</section>

      {/* 双栏：左文案 / 右图片（呼应 Home 的 About 区块） */}
      <section className="mt-12 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* 左：文案 */}
          <div className="text-[17px] leading-relaxed space-y-5" data-aos="fade-right">
            <p>
              LUVIN Tiles exists to make specification simple and dependable. We focus on products that perform and a
              supply model that shows up—so projects stay on time and on brief.
            </p>
            <p>
              Our Classic Plain Tile Collection lays a calm, timeless foundation; the Art Tile Collection adds depth
              and character. Every range is curated with durability, consistency, and real-world maintenance in mind.
            </p>
            <p>
              Because availability matters, we actively monitor inventories and lead times. When we confirm stock, it’s
              meaningful. When you need guidance, we provide technical clarity—finish, slip, absorption, and beyond.
            </p>
          </div>

          {/* 右：图片（用你已有素材，风格与首页一致） */}
          <div className="w-full aspect-[16/10] md:aspect-[16/9] rounded-xl overflow-hidden shadow-lg" data-aos="fade-left">
            <img
              src="/images/home.webp"
              alt="Showroom textures and warm tones"
              className="w-full h-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* 我们的差异化（卡片风格与站点统一） */}
      <section className="mt-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">What sets us apart</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ValueCard
              icon="🧱"
              title="Built for Everyday Use"
              text="Low-absorption, wear-resistant options and easy-clean finishes—ready for homes and high-traffic spaces."
            />
            <ValueCard
              icon="🎨"
              title="Design with Substance"
              text="Classic plains for calm, enduring bases; art tiles for character and storytelling."
              delay={50}
            />
            <ValueCard
              icon="🚚"
              title="Reliable Supply"
              text="Active stock management, clear ETAs, and transparent updates so you can plan with confidence."
              delay={100}
            />
            <ValueCard
              icon="🤝"
              title="Trade-First Service"
              text="Specification support, sampling, and responsive after-sales for retailers, builders, and designers."
              delay={150}
            />
          </div>
        </div>
      </section>

      {/* 工作方式（四步） */}
      <section className="mt-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-6">How we work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StepCard
              step="1"
              title="Source"
              text="Partner with experienced factories in Anhui and beyond—aligned on material quality and consistency."
            />
            <StepCard
              step="2"
              title="Design & Test"
              text="Balance color, texture, and performance. Validate slip, absorption, and surface quality before release."
            />
            <StepCard
              step="3"
              title="Stock & Forecast"
              text="Maintain practical inventories and refine forecasts with retail partners to meet real demand."
            />
            <StepCard
              step="4"
              title="Support"
              text="Trade-friendly samples, clear technical details, and responsive after-sales—project to project."
            />
          </div>
        </div>
      </section>

      {/* 安徽根系（与 Home 左侧背景文案卡一致的风格） */}
      <section className="mt-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-stretch">
          {/* 背景卡：与 Home 相同的样式与语气 */}
          <div
            className="relative rounded-xl overflow-hidden min-h-[260px] md:min-h-[360px] shadow-lg"
            style={{
              backgroundImage: "url('/images/Tile-banner/anhui.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            data-aos="fade-up"
          >
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
              <div className="w-full max-w-[760px] text-white font-bold leading-relaxed text-left text-base md:text-lg">
                <p className="mb-4">
                  From our base in Anhui, China, we blend craftsmanship and engineering—tile by tile—for enduring,
                  real-world performance.
                </p>
                <p>
                  Natural tones, thoughtful textures, and consistent quality come together to support contemporary
                  Australian spaces.
                </p>
              </div>
            </div>
          </div>

          {/* 右：图集（延用你的横幅素材） */}
          <div className="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="100">
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow">
              <img
                src="/images/Tile-banner/banner2.webp"
                alt="Classic plains for modern interiors"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow">
              <img
                src="/images/Tile-banner/banner3.webp"
                alt="Art tiles with expressive patterns"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow col-span-2">
              <img
                src="/images/Tile-banner/banner4.webp"
                alt="Details and textures that last"
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA（与全站一致的黑色胶囊按钮） */}
      <section className="mt-16 px-6 md:px-16">
        <div className="max-w-7xl mx-auto rounded-xl border bg-gray-50 p-6 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold">Let’s build something enduring</h3>
            <p className="mt-2 text-gray-700">
              Ask for samples, specifications, or stock info—our team is here to help.
            </p>
          </div>
          <div className="flex gap-3">
            <a
              href="/sample"
              className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium
                         bg-gray-900/90 text-white hover:bg-gray-900 transition
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
            >
              Request Casese
            </a>
            <a
              href="/products"
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
