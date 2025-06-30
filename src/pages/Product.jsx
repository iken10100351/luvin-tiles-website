import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "../components/ProductCard";

const tileData = {
  normal: [
    {
      type: "Rustic Edge Matte Finish (Antique Series)",
      title: "Flow Grey",
      color: "Neutral Grey",
      size: "450×450mm",
      description: "Matte grey tone with rustic edging for a natural vintage touch.",
      details: "Featuring flowing textures and a soft matte finish, this tile captures the essence of nature. The uncut edge mimics handcrafted vintage tiles, adding character and depth. Ideal for patios, boutique cafés, or antique-style interiors.",
      image: "/images/product/product1.png"
    },

    {
      type: "Rustic Edge Anti-slip Tile (Dry Grain Series)",
      title: "Dry Grain Stone Grey",
      color: "Graphite Grey",
      size: "500×500mm",
      description: "Extreme anti-slip performance for high-safety areas.",
      details: "Crafted with a dry-grain finish, this tile offers a tactile, gritty surface while maintaining a rustic and artistic appearance. Rated R12 in slip resistance, it's ideal for wet zones like balconies, bathrooms, and poolside areas. Highly durable and stain-resistant, balancing safety and aesthetics.",
      image: "/images/product/product2.png"
    },
    {
      type: "Rustic Edge Anti-slip Tile (Dry Grain Series)",
      title: "Volcanic Ash Grain Tile",
      color: "Volcanic Grey",
      size: "500×500mm",
      description: "Bold texture with high slip resistance for heavy-traffic areas.",
      details: "This tile features a pronounced dry grain surface for excellent traction and a rugged tactile finish. Its dark grey tone enhances industrial or minimalist spaces. Ideal for stairwells, entryways, and outdoor walkways. Rated R12 for slip resistance and built for long-term durability.",
      image: "/images/product/product3.png"
    },
    {
      type: "Rustic Edge Anti-slip Tile (Dry Grain Series)",
      title: "Light Grey Grain Tile",
      color: "Stone Grey",
      size: "500×500mm",
      description: "Safe and stylish, perfect for bright modern interiors.",
      details: "With its dry-grain textured surface, this tile delivers high slip resistance (R12) and excellent stain protection. The light grey tone brings brightness to any room while maintaining durability and safety. Ideal for kitchens, balconies, stairwells, or any area with heavy daily use.",
      image: "/images/product/product4.png"
    },
    {
      type: "Rustic Edge Anti-slip Tile (Dry Grain Series)",
      title: "Beige Grain Tile",
      color: "Light Beige",
      size: "500×500mm",
      description: "Warm and refined, enhances a cozy ambiance.",
      details: "Featuring a dry-grain textured surface, this tile delivers high slip resistance (R12) and easy maintenance. Its light beige color adds brightness and warmth, making it suitable for kitchens, hallways, or balconies where elegance meets practicality.",
      image: "/images/product/product5.png"
    },
    {
      type: "Rustic Edge Anti-slip Tile (Dry Grain Series)",
      title: "Cream Grain Tile",
      color: "Light Cream",
      size: "500×500mm",
      description: "Delicate and natural, creating a cozy and warm vibe.",
      details: "With an R12 anti-slip dry grain surface, this tile ensures safety and durability in daily use. The light cream tone enhances brightness and softness, ideal for kitchens, hallways, and balconies seeking a serene ambiance.",
      image: "/images/product/product6.png"
    },
    {
      type: "Rustic Edge Tile (Matt Series)",
      title: "Stone-Dot Light Grey",
      color: "Light Grey",
      size: "450×450mm",
      description: "Rich texture with natural matt finish.",
      details: "Featuring a delicate speckled texture and a soft light grey tone, this tile offers an elegant and understated aesthetic. Ideal for modern minimalist or wood-inspired interiors, it balances visual harmony with daily functionality.",
      image: "/images/product/product7.png"
    },
    {
      type: "Rustic Edge Tile (Matt Series)",
      title: "Pebble Grey Tile",
      color: "Pebble Grey",
      size: "450×450mm",
      description: "Natural texture with a speckled stone look.",
      details: "Featuring a matte surface with delicate grain and scattered stone-like speckles, this tile blends natural elegance with practical durability. Ideal for living rooms, kitchens, and walkways, it brings a calm, earthy aesthetic to modern spaces.",
      image: "/images/product/product8.png"
    },
    {
      type: "Rustic Edge Tile (Matt Series)",
      title: "White Marble Vein",
      color: "White with Grey Veins",
      size: "450×450mm",
      description: "Classic marble style with a soft matte texture.",
      details: "Combining timeless white tones with elegant grey veining, this tile delivers a sophisticated and clean aesthetic. The matte finish reduces glare and adds subtlety, making it ideal for living rooms, bathrooms, or contemporary commercial spaces.",
      image: "/images/product/product9.png"
  },
  {
    type: "Rustic Edge Tile (Matt Series)",
    title: "Plain Ivory Tile",
    color: "Ivory",
    size: "450×450mm",
    description: "Soft ivory hue with clean, minimalist design.",
    details: "This tile features a gentle ivory surface with ultra-fine grains, offering a refined yet understated presence. Its matte finish enhances comfort underfoot while reducing visual noise, ideal for cozy interiors, bedrooms, and light-filled spaces.",
    image: "/images/product/product10.png"
  },

    {
    type: "Rustic Edge Tile (Matt Series)",
    title: "Stone-Dot Charcoal",
    color: "Charcoal Grey",
    size: "450×450mm",
    description: "Bold dark tone with rich surface texture.",
    details: "Crafted with a dense speckled surface and deep charcoal finish, this tile brings a strong and grounded aesthetic to any space. Its non-glossy matt texture provides excellent anti-slip performance, perfect for entryways, outdoor areas, or modern industrial interiors.",
    image: "/images/product/product11.png"
  },
    {
  type: "Full-Body Low Absorption Tile (SG Series)",
  title: "Beige Flow Tile",
  color: "Soft Beige",
  size: "450×450mm",
  description: "Smooth sand-like finish with flowing texture.",
  details: "Featuring a gentle gradient and subtle sand grain texture, this tile delivers a soft, calming presence to your interiors. Its full-body composition ensures consistent color and durability, making it ideal for residential and light commercial use.",
  image: "/images/product/product12.png"
  },
    {
  type: "Low Absorption Stair Tile",
  title: "Textured Grey Step",
  color: "Textured Light Grey",
  size: "300×600mm",
  description: "Engineered for durability and step-safety.",
  details: "Designed for stair application, this low absorption tile features a textured grain surface that improves grip and prevents slipping. Its subtle grey tone and elongated shape suit both indoor and outdoor staircases in modern or commercial environments.",
  image: "/images/product/product13.png"
},
{
  type: "Low Absorption Stair Tile",
  title: "Textured Grey Step",
  color: "Mid Grey",
  size: "300×600mm",
  description: "Durable and slip-resistant with a natural stone look.",
  details: "Crafted for high-traffic stairways, this tile combines a rugged grain texture with a sleek mid-grey tone. The extended rectangular shape enhances visual depth while ensuring functionality, ideal for residential or commercial use where safety and style are essential.",
  image: "/images/product/product14.png"

},
{
  type: "Low Absorption Stair Tile",
  title: "Fine Grain Light Grey",
  color: "Light Grey",
  size: "300×600mm",
  description: "Soft texture with dense fine-grain finish.",
  details: "Designed for stair applications, this tile features a dense and uniform fine-grain texture for optimal grip and durability. The light grey tone adds brightness and cleanliness to both indoor and outdoor settings, making it a safe and aesthetic choice for residential or commercial stairs.",
  image: "/images/product/product15.png"
},
{
  type: "Low Absorption Stair Tile",
  title: "Fine Grain Mid Grey",
  color: "Mid Grey",
  size: "300×600mm",
  description: "Textured matte surface with enhanced grip.",
  details: "Crafted with a fine grain surface and mid-grey tone, this tile offers an ideal blend of safety and style for stairs or pathways. Its low water absorption and subtle natural texture make it highly suitable for both indoor and outdoor use.",
  image: "/images/product/product16.png"
},
{
  type: "Low Absorption Stair Tile",
  title: "Fine Grain Light Grey",
  color: "Light Grey",
  size: "300×600mm",
  description: "Refined grainy texture for safety and subtle elegance.",
  details: "This tile features a fine-grained, anti-slip surface in a soft light grey tone. Designed for stairways, corridors, or outdoor pathways, it combines durability with a low water absorption rate, offering long-term performance in both dry and wet conditions.",
  image: "/images/product/product17.png"
},
{
  type: "Low Absorption Stair Tile",
  title: "Fine Grain Dark Grey",
  color: "Dark Grey",
  size: "300×600mm",
  description: "Anti-slip dark grain for bold, practical use.",
  details: "Engineered with a dense fine grain surface, this dark grey tile is ideal for high-traffic stairways and walkways. Its low water absorption and rough texture provide reliable traction, especially suited for commercial and outdoor applications.",
  image: "/images/product/product18.png"
},
{
  type: "Low Absorption Stair Tile",
  title: "Stone Texture Dark Grey",
  color: "Dark Grey",
  size: "300×600mm",
  description: "Natural stone texture with strong grip and bold tone.",
  details: "Designed with a rugged stone-like surface and deep grey coloration, this tile provides excellent traction for staircases and outdoor pathways. Its low water absorption and solid anti-slip performance ensure durability in both residential and commercial environments.",
  image: "/images/product/product19.png"
},
{
  type: "Low Absorption Stair Tile",
  title: "Fine Grain Dark Grey",
  color: "Dark Grey",
  size: "300×600mm",
  description: "Fine-textured matte surface with high durability.",
  details: "With a refined grainy texture and dark grey tone, this tile is ideal for creating a sleek, contemporary stairway or corridor. The low absorption rate and excellent slip resistance make it a reliable option for high-traffic areas, ensuring long-lasting performance and safety.",
  image: "/images/product/product20.png"
},
{
  type: "Low Absorption Stair Tile",
  title: "Fine Grain Charcoal Grey",
  color: "Charcoal Grey",
  size: "300×600mm",
  description: "Subtle grain finish with strong anti-slip performance.",
  details: "Designed for demanding environments, this tile features a deep charcoal grey tone with a soft grainy texture. Its low absorption and robust surface provide enhanced traction, making it perfect for exterior stairs, ramps, or industrial walkways.",
  image: "/images/product/product21.png"
}

    // 你可以继续添加更多
  ],
  art: [
    {
      title: "艺术砖 A",
      description: "艺术拼花，视觉焦点。",
      type: "艺术砖",
      color: "多彩拼接",
      size: "300x300mm",
      details: "适用于背景墙与艺术空间，灵感来源于意大利工艺。",
      image: "/images/art1.jpg"
    }
    // 可添加更多
  ]
};

const Product = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="pt-20 pb-16 px-6 md:px-16 bg-gray-50">
      {/* 普通砖 */}
      <section className="mb-20" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Classic Plain Tile</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tileData.normal.map((tile, idx) => (
            <ProductCard key={idx} {...tile} />
          ))}
        </div>
      </section>

      {/* 艺术砖 */}
      <section data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">艺术砖</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {tileData.art.map((tile, idx) => (
            <ProductCard key={idx} {...tile} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Product;
