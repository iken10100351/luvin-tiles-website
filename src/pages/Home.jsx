import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function HomePage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Banner with Swiper */}
      <section className="relative w-full h-screen">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-full"
        >
          {[
            '/images/Tile-banner/banner1.webp',
            '/images/Tile-banner/banner2.webp',
            '/images/Tile-banner/banner3.webp',
            '/images/Tile-banner/banner4.webp',
            '/images/Tile-banner/banner5.webp',
            '/images/Tile-banner/banner6.webp',
          ].map((src, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-screen">
                <img src={src} alt={`Banner ${index + 1}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4">
                    LUVIN AUSTRALIA
                  </h1>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Product Categories with Swiper per card */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Explore Our Tile Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
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
              pdf: "/files/Base_Decor.pdf"
            },
            {
              name: "Ceramic mosics",
              images: [
                "/images/Ceramic_mosics/banner1.webp", 
                "/images/Ceramic_mosics/banner2.webp",
                "/images/Ceramic_mosics/banner3.webp",
                "/images/Ceramic_mosics/banner4.webp",
              ],
              pdf: "/files/Ceramic_mosics.pdf"
            },
            {
              name: "Flower Bird",
              images: [
                "/images/Flower_bird/banner1.webp", 
                "/images/Flower_bird/banner2.webp",
                "/images/Flower_bird/banner3.webp",
                "/images/Flower_bird/banner4.webp",
              ],
              pdf: "/files/Flower_bird.pdf"
            },
          ].map((tile, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition flex flex-col">
              <Swiper
                pagination={{ clickable: true }}
                loop
                className="w-full h-48"
              >
                {tile.images.map((imgSrc, i) => (
                  <SwiperSlide key={i}>
                    <img src={imgSrc} alt={`${tile.name} ${i + 1}`} className="w-full h-48 object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-xl font-medium mb-4">{tile.name}</h3>
                <a
                  href={tile.pdf}
                  download
                  className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                  Download PDF
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section with Image Layout */}
      <section className="bg-gray-100 py-16 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-semibold mb-6">About LUVIN AUSTRALIA</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>While many are still searching for the ideal home, we’ve been quietly shaping it—tile by tile—for over 20 years.</p>
              <p>From our base in Anhui, China, we blend craftsmanship with creativity, allowing natural textures and timeless design to bring warmth and personality into modern living spaces.</p>
              <p>ROMA DILUO is built on decades of experience and a deep respect for both tradition and innovation. Every tile we create is more than just a surface—it's a reflection of our attention to detail, our passion for materials, and our belief that good design should feel effortless.</p>
              <p>From subtle earth tones to bold, expressive patterns, our collections are made to complement the rhythms of everyday life—calm, elegant, and quietly confident.</p>
              <p>What we offer is not just a product, but a way to bring beauty and balance into your space. Carefully designed, precisely made, and always with feeling.</p>
            </div>
          </div>
          {/* Image */}
          <div>
            <img
              src="/images/home.webp"
              alt="About ROMA DILUO"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* CTA */}
<section className="py-16 px-6 md:px-20 text-center">
<h2 className="text-3xl font-semibold mb-4">Visit Our Showroom Today</h2>
<p className="text-lg mb-6">Book a visit or contact us for expert design consultation.</p>
<a href="/contact" className="inline-block bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">
Contact Us
</a>
</section>
</div>
);
}
