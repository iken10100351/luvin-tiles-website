import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [prodOpen, setProdOpen] = React.useState(false); // mobile: Products 折叠

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // 统一的“黑色圆角按钮”样式（Samples 的效果）
  const pillClass = ({ isActive }) =>
    [
      "inline-flex items-center rounded-full px-4 py-2 text-sm font-medium transition",
      isActive ? "bg-gray-900 text-white" : "bg-gray-900/90 text-white hover:bg-gray-900",
      "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900",
    ].join(" ");

  return (
    <nav
      className={[
        "w-full fixed top-0 z-50 transition-all",
        scrolled ? "bg-white/90 backdrop-blur shadow-md" : "bg-white/80 backdrop-blur-sm shadow",
      ].join(" ")}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg sm:text-xl tracking-wide font-bold text-gray-900 hover:text-black focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30 rounded-md"
        >
          LUVIN AUSTRALIA
        </Link>

        {/* 桌面菜单 */}
        <div className="hidden md:flex items-center gap-3">
          <NavLink to="/" end className={pillClass}>
            Home
          </NavLink>

          {/* Products（含锚点） */}
          <div className="relative group">
            <button
              type="button"
              className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium bg-gray-900/90 text-white hover:bg-gray-900 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Products
              <svg width="14" height="14" viewBox="0 0 20 20" className="ml-1 opacity-80">
                <path d="M5 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>

            {/* 下拉：指向 /products 页内锚点 */}
            <div
              className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200 absolute left-0 mt-2 w-72 rounded-xl border border-gray-200 bg-white shadow-lg p-2"
              role="menu"
            >
              <Link
                to="/products#classic-plain"
                className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              >
                Classic Plain Tile Collection
              </Link>
              <Link
                to="/products#art-tile"
                className="block rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
              >
                Art Tile Collection
              </Link>

              <div className="h-px bg-gray-200 my-1" />
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  [
                    "block rounded-lg px-3 py-2 text-sm",
                    isActive ? "bg-gray-100 text-gray-900 font-semibold" : "text-gray-800 hover:bg-gray-100",
                  ].join(" ")
                }
              >
                All Products
              </NavLink>
            </div>
          </div>
          <NavLink to="/sample" className={pillClass}>
              Project Casese
          </NavLink>
          <NavLink to="/sustainability" className={pillClass}>
            Sustainability
          </NavLink>

          <NavLink to="/about" className={pillClass}>
            About Us
          </NavLink>

          <NavLink to="/contact" className={pillClass}>
            Contact
          </NavLink>
        </div>

        {/* 移动端汉堡 */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
        >
          <span className="sr-only">Open main menu</span>
          <div className="space-y-1.5">
            <span className={["block h-0.5 w-6 bg-current transition-transform", open ? "translate-y-2 rotate-45" : ""].join(" ")} />
            <span className={["block h-0.5 w-6 bg-current transition-opacity", open ? "opacity-0" : "opacity-100"].join(" ")} />
            <span className={["block h-0.5 w-6 bg-current transition-transform", open ? "-translate-y-2 -rotate-45" : ""].join(" ")} />
          </div>
        </button>
      </div>

      {/* 移动端抽屉 */}
      <div
        id="mobile-menu"
        className={["md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out", open ? "max-h-[520px]" : "max-h-0"].join(" ")}
      >
        <ul className="px-4 pb-4 space-y-2">
          <li>
            <NavLink
              to="/"
              end
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  "block w-full rounded-full px-4 py-2 text-sm font-medium transition",
                  isActive ? "bg-gray-900 text-white" : "bg-gray-900/90 text-white hover:bg-gray-900",
                ].join(" ")
              }
            >
              Home
            </NavLink>
          </li>

          {/* Products（可展开子菜单） */}
          <li>
            <button
              type="button"
              onClick={() => setProdOpen((v) => !v)}
              className="w-full flex items-center justify-between rounded-full px-4 py-2 text-sm font-medium text-white bg-gray-900/90 hover:bg-gray-900 transition"
              aria-expanded={prodOpen}
            >
              <span>Products</span>
              <svg width="16" height="16" viewBox="0 0 20 20" className={["transition-transform", prodOpen ? "rotate-180" : ""].join(" ")}>
                <path d="M5 7l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            <div className={["pl-1 overflow-hidden transition-[max-height] duration-300", prodOpen ? "max-h-64 mt-2" : "max-h-0"].join(" ")}>
              <Link
                to="/products#classic-plain"
                onClick={() => {
                  setOpen(false);
                  setProdOpen(false);
                }}
                className="block w-full rounded-full px-4 py-2 text-sm bg-white text-gray-800 hover:bg-gray-100 border border-gray-200"
              >
                Classic Plain Tile Collection
              </Link>
              <Link
                to="/products#art-tile"
                onClick={() => {
                  setOpen(false);
                  setProdOpen(false);
                }}
                className="block w-full rounded-full px-4 py-2 text-sm bg-white text-gray-800 hover:bg-gray-100 border border-gray-200 mt-2"
              >
                Art Tile Collection
              </Link>
              <NavLink
                to="/products"
                onClick={() => {
                  setOpen(false);
                  setProdOpen(false);
                }}
                className={({ isActive }) =>
                  [
                    "block w-full rounded-full px-4 py-2 text-sm mt-2 transition",
                    isActive ? "bg-gray-900 text-white" : "bg-gray-900/90 text-white hover:bg-gray-900",
                  ].join(" ")
                }
              >
                All Products
              </NavLink>
            </div>
          </li>

          {[
            { label: "Sustainability", to: "/sustainability" },
            { label: "About Us", to: "/about" },
            { label: "Samples", to: "/sample" },
            { label: "Contact", to: "/contact" },
          ].map((i) => (
            <li key={i.to}>
              <NavLink
                to={i.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  [
                    "block w-full rounded-full px-4 py-2 text-sm font-medium transition",
                    isActive ? "bg-gray-900 text-white" : "bg-gray-900/90 text-white hover:bg-gray-900",
                  ].join(" ")
                }
              >
                {i.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
