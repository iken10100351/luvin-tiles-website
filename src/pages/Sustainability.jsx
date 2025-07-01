import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Sustainability = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-20 pb-16 px-6 md:px-16 bg-white min-h-screen text-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Commitment to Sustainability</h2>
      
      <section className="mb-12" data-aos="fade-up">
        <h3 className="text-xl font-semibold mb-2">🌱 Eco-friendly Materials</h3>
        <p>
          We prioritize low-emission, durable tiles that reduce the need for frequent replacements,
          helping to conserve resources and reduce landfill waste.
        </p>
      </section>

      <section className="mb-12" data-aos="fade-up">
        <h3 className="text-xl font-semibold mb-2">♻️ Responsible Manufacturing</h3>
        <p>
          Our factories operate with water recycling systems and low-energy kilns to minimize our
          environmental footprint.
        </p>
      </section>

      <section className="mb-12" data-aos="fade-up">
        <h3 className="text-xl font-semibold mb-2">👣 Customer Health & Safety</h3>
        <p>
          All LUVIN tiles are certified non-toxic and safe for home and commercial use, with anti-slip
          options that promote safety in all spaces.
        </p>
      </section>
    </div>
  );
};

export default Sustainability;
