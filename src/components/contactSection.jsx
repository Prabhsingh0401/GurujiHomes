import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const infoCards = [
    { icon: Phone, title: "Phone", value: "+971 50 289 1582\n  ,  +971 50 681 6994" },
    { icon: Mail, title: "Email", value: "info@baithome.co" },
    { icon: MapPin, title: "Address", value: "Office 204, Mohammed Saleh Tower, Al Maktoum St Deira Dubai UAE" },
    { icon: Clock, title: "Reception Hours", value: "24/7 Available" },
  ];

  return (
    <section className="py-16 px-6 bg-white" id="contactus">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A2A3B]">
          Get In Touch
        </h2>
        <p className="text-[#1D80B2] mt-2">
          Have questions? We're here to help make your stay perfect.
        </p>
      </div>

      {/* Main Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* LEFT: FORM */}
        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-300">
          
          {/* Small top label */}
          <p className="text-sm text-gray-600 mb-1">— Get In Touch</p>

          {/* Title */}
          <h2 className="text-2xl font-semibold text-[#0A2A3B] mb-6">
            Request Free Consultation
          </h2>

          <form className="space-y-4">
            {/* Name */}
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Name *</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#125476]"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Email Address *</label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#125476]"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block mb-1 text-gray-700 text-sm">Phone Number *</label>
              <input
                type="tel"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#125476]"
              />
            </div>

            {/* Check-in & Check-out (Single line) */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-gray-700 text-sm">Check-in *</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#125476]"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-gray-700 text-sm">Check-out *</label>
                <input
                  type="date"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#125476]"
                />
              </div>
            </div>

            {/* Adults & Children (Single line) */}
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block mb-1 text-gray-700 text-sm">Adults *</label>
                <input
                  type="number"
                  min="1"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#125476]"
                />
              </div>
              <div className="flex-1">
                <label className="block mb-1 text-gray-700 text-sm">Children</label>
                <input
                  type="number"
                  min="0"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#125476]"
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="bg-[#125476] text-white px-6 py-2 rounded-md text-sm hover:bg-[#0E415C] transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT: CONTACT INFO CARDS */}
        <div className="flex flex-col gap-6">
          {infoCards.map((card, index) => {
            const Icon = card.icon;
            return (
              <div
                key={index}
                className="bg-white p-5 rounded-xl shadow-sm border border-gray-200 flex items-center gap-4"
              >
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6 text-[#125476]" />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0A2A3B]">{card.title}</h4>
                  <p className="text-[#1D80B2] text-sm font-semibold">{card.value}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}