import React from "react";

export default function Contact() {
  return (
    <div className="bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-20">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 text-left">
          Contact Us
        </h2>
        <p className="mt-3 text-gray-700 max-w-3xl">
          Tell us a little about your project and we’ll get back with stock,
          samples, and specification details.
        </p>

        <div className="mt-10 grid md:grid-cols-5 gap-10">
          {/* Info */}
          <aside className="md:col-span-2 rounded-xl border bg-gray-50 p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Address</h3>
              <p className="text-gray-700 mt-1">KMP ASSOCIATES, LEVEL M2, 525 COLLINS STREET, MELBOURNE VIC 3000, AUSTRALIA</p>
            </div>
            <div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Hours</h3>
              <p className="text-gray-700 mt-1">
                Monday – Friday <br /> 8:00am – 4:00pm
              </p>
            </div>
          </aside>

          {/* Form */}
          <form
            action="https://formspree.io/f/mzzgrrgk"
            method="POST"
            className="md:col-span-3 rounded-xl border bg-white p-6 shadow-sm space-y-4"
          >
            <input type="hidden" name="_next" value="/thankyou.html" />
            {/* 如果从 /samples 跳转会带 ?samples=... 这里把它自动放入表单 */}
            <input
              type="hidden"
              name="selected_samples"
              value={typeof window !== "undefined" ? new URLSearchParams(window.location.search).get("samples") || "" : ""}
            />

            <div>
              <label className="block text-sm font-medium text-gray-900">Name *</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Your name"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-900">Company</label>
                <input
                  type="text"
                  name="company"
                  className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Company name (optional)"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-900">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                  placeholder="Phone (optional)"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">Email *</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-900">
                Message *
              </label>
              <textarea
                name="message"
                required
                className="mt-1 w-full border border-gray-300 rounded-md p-3 h-32 resize-vertical focus:outline-none focus:ring-2 focus:ring-gray-900"
                placeholder="Project details, timelines, quantities…"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center rounded-full px-6 py-2.5 text-sm font-medium
                         bg-gray-900/90 text-white hover:bg-gray-900 transition
                         focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
