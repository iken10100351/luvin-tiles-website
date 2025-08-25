import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// 图片数据
const leftSlides = [
    { src: "/images/SwiperBox/SwiperBox1.webp", title: "Full-Body Low-Absorption Stair Tiles", desc: "Full-body low-absorption stair tiles are specifically designed for staircases and steps. Featuring a dense structure and anti-slip surface, these tiles offer low water absorption and high durability, ensuring safety and longevity in high-traffic environments. Perfect for residential, commercial, and public spaces, they combine functionality with sleek design." },
    { src: "/images/SwiperBox/SwiperBox2.webp", title: "Low-Absorption Full-Body Wear-Resistant Tiles (SG Series)", desc: "Low-absorption full-body wear-resistant tiles are crafted with high-density materials that ensure minimal water absorption and outstanding durability. Featuring uniform color and a natural texture throughout the tile body, they are ideal for high-traffic areas such as shopping malls, corridors, kitchens, and outdoor spaces—perfect for those seeking both functionality and aesthetic appeal." },
    { src: "/images/SwiperBox/SwiperBox3.webp", title: "Low-Absorption Full-Body Wear-Resistant Tiles (N Series)", desc: "The N Series low-absorption full-body wear-resistant tiles are crafted with advanced technology, offering uniform structure, exceptional abrasion resistance, and minimal water absorption. Ideal for high-traffic areas such as malls, stations, schools, and hospitals, they also provide aesthetic versatility for modern architectural design." },
    { src: "/images/SwiperBox/SwiperBox4.webp", title: "Low-Absorption Full-Body Wear-Resistant Tiles (SG Series)", desc: "This SG Series highlights the authentic recreation of natural textures, with soft yet powerful linear surfaces reminiscent of weathered stone. The organic gradient and fine-grain finish make it ideal for both expansive applications and mixed-material designs, offering a calm and sophisticated spatial experience." },
    { src: "/images/SwiperBox/SwiperBox5.webp", title: "Low-Absorption Full-Body Wear-Resistant Tiles (SG Series)", desc: "This SG Series centers on geometric textures with bold contrasts between depth and roughness. The tile surface offers a multi-dimensional feel, making it a perfect choice for creative commercial settings. It enhances both walls and floors with dramatic and expressive character." },  
];

const rightSlides = [
  { src: "/images/banner37.webp", title: "Left Two", desc: "Description for left two." },
];

// 单个轮播框组件
const SwiperBox = ({ slides }) => (
  <Swiper
  modules={[Autoplay, Pagination]}
  autoplay={{ delay: 3000 }}
  pagination={{ clickable: true }}
  loop={true}
  speed={800} // ✅ 平滑切换速度
  className="w-full"
>
    {slides.map((slide, index) => (
      <SwiperSlide key={index}>
        <div className="flex flex-col items-center">
          <img
            src={slide.src}
            alt={slide.title}
            loading="lazy"
            className="max-w-full h-auto"
          />
          <div className="text-center mt-2">
            <h3 className="text-lg font-bold text-gray-800">{slide.title}</h3>
            <p className="text-sm text-gray-600">{slide.desc}</p>
          </div>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

// 主组件：页面中部居中展示
const DualHeroSwiper = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-white px-4">
      <div className="flex flex-col md:flex-row gap-10 max-w-[1600px] w-full justify-center items-start">
        <div className="w-full md:w-1/2">
          <SwiperBox slides={leftSlides} />
        </div>
        <div className="w-full md:w-1/2">
          <SwiperBox slides={rightSlides} />
        </div>
      </div>
    </section>
  );
};

export default DualHeroSwiper;
