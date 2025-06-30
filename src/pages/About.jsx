import React from 'react';

const About = () => {
  return (
    <div className="bg-white py-20 px-6 md:px-16 text-center">
      <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-8">
        About Us
      </h1>

      <div className="max-w-3xl mx-auto text-gray-700 text-[17px] leading-relaxed space-y-5 mt-8">
        <p>
          Although we are a newcomer to the Queensland market, LUVIN Tiles has over 40 years combined experience of
          importing and wholesaling ceramic tile products to Australian retailers.
        </p>

        <p>
          This experience has led us to create a wholesale business that is focused on our products and our customers.
          We are continually maintaining, developing and improving our products so that our customers have access to a
          diverse collection that is up to date with the latest trends.
        </p>

        <p>
          We understand that stock availability is important and because of this we place emphasis on ensuring that our
          supply chains are continually monitored. This focus allows us to have
          <span className="font-semibold italic"> the product you want, when you want it.</span>
        </p>
      </div>
    </div>
  );
};

export default About;
