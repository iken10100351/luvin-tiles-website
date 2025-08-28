// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();

  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LUVIN Australia",
    url: "https://luvinau.com",
    email: "mailto:contact@luvinau.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "KMP ASSOCIATES, LEVEL M2, 525 COLLINS STREET",
      addressLocality: "Melbourne",
      addressRegion: "VIC",
      postalCode: "3000",
      addressCountry: "AU",
    },
  };

  const linkClass =
    "text-sm text-gray-700 hover:text-black hover:underline underline-offset-4 decoration-gray-400 transition";

  const handleBackToTop = (e) => {
    e.preventDefault();
    // 平滑滚动回当前页面顶部
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#f5f2ec] text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand & tagline */}
        <div>
          <div className="text-2xl font-extrabold tracking-wide">
            LUVIN <span className="text-[#c1a97d]">AUSTRALIA</span>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-gray-700">
            Tiles designed for modern living — crafted with care, inspired by
            nature, and made to last.
          </p>

          {/* （已移除社交媒体链接） */}
        </div>

        {/* Site Nav */}
        <nav aria-label="Footer navigation">
          <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase mb-4">
            Explore
          </h3>
          <ul className="space-y-2">
            <li><Link to="/#top" className={linkClass}>Home</Link></li>
            <li><Link to="/products" className={linkClass}>Products</Link></li>
            <li><Link to="/samples" className={linkClass}>Project Samples</Link></li>
            <li><Link to="/sustainability" className={linkClass}>Sustainability</Link></li>
            <li><Link to="/about" className={linkClass}>About Us</Link></li>
            <li><Link to="/contact" className={linkClass}>Contact</Link></li>
          </ul>
        </nav>

        {/* Collections */}
        <nav aria-label="Collections">
          <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase mb-4">
            Collections
          </h3>
          <ul className="space-y-2">
            <li>
              <Link to="/products#classic-plain" className={linkClass}>
                Classic Plain Tile Collection
              </Link>
            </li>
            <li>
              <Link to="/products#art-tile" className={linkClass}>
                Art Tile Collection
              </Link>
            </li>
            <li>
              <a href="/#collections" className={linkClass}>
                Explore on Home
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold tracking-wider text-gray-900 uppercase mb-4">
            Contact
          </h3>
          <address className="not-italic text-sm space-y-3">
            <p className="flex items-start gap-3">
              {/* location icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" className="mt-0.5 fill-current">
                <path d="M12 2a7 7 0 0 1 7 7c0 5.25-7 13-7 13S5 14.25 5 9a7 7 0 0 1 7-7zm0 4.2A2.8 2.8 0 1 0 12 11.8 2.8 2.8 0 0 0 12 6.2z" />
              </svg>
              KMP ASSOCIATES, LEVEL M2, 525 COLLINS STREET, MELBOURNE VIC 3000, AUSTRALIA
            </p>
            <p className="flex items-center gap-3">
              {/* email icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 3.2-8 5.3-8-5.3V6l8 5.3L20 6v1.2z" />
              </svg>
              <a href="mailto:contact@luvinau.com" className="hover:text-black hover:underline underline-offset-4 decoration-gray-400 transition">
                contact@luvinau.com
              </a>
            </p>
            <p className="flex items-center gap-3">
              {/* time icon */}
              <svg width="18" height="18" viewBox="0 0 24 24" className="fill-current">
                <path d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm1 5h-2v6l5 3 1-1.7-4-2.3V7z" />
              </svg>
              Mon–Fri: 8:00am – 4:00pm
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
          <p>© {year} LUVIN Australia. All rights reserved.</p>

          {/* 回到当前页顶部 */}
          <button
            onClick={handleBackToTop}
            className="inline-flex items-center gap-2 font-medium hover:text-black transition"
            aria-label="Back to top"
            title="Back to top"
            type="button"
          >
            Back to top
            <svg width="16" height="16" viewBox="0 0 24 24" className="fill-current">
              <path d="M12 8l6 6H6z" transform="rotate(180 12 12)" />
            </svg>
          </button>
        </div>
      </div>

      {/* SEO: Organization structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
    </footer>
  );
};

export default Footer;
