import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#f5f2ec] text-gray-800">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <h2 className="text-3xl font-semibold text-center mb-12">Contact Us</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* 表单 */}
          <form
            action="https://formspree.io/f/mzzgrrgk"
            method="POST"
            className="space-y-4 bg-white p-6 rounded shadow"
          >
            <input type="hidden" name="_next" value="/thankyou.html" />
            <input
              type="text"
              name="name"
              placeholder="Name (required)"
              required
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <textarea
              name="message"
              placeholder="Message"
              required
              className="w-full border border-gray-300 p-3 rounded h-32"
            ></textarea>
            <input
              type="email"
              name="email"
              placeholder="Email (required)"
              required
              className="w-full border border-gray-300 p-3 rounded"
            />
            <button
              type="submit"
              className="bg-[#b89b72] text-white font-semibold px-8 py-3 rounded hover:bg-[#a78d67]"
            >
              Send
            </button>
          </form>

          {/* 联系信息 */}
          <div className="bg-[#b89b72] text-white p-8 rounded-lg space-y-4 shadow">
            <div>
              <h3 className="text-lg font-semibold">Address:</h3>
              <p>1B 31 Paringa Road Murarrie QLD 4172</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Phone:</h3>
              <p>(07) 3707 6602</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Hours:</h3>
              <p>Monday to Friday<br />8.00am – 4.00pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
