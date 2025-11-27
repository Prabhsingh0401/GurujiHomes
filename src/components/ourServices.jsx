import React from "react";
import { 
  Home, 
  ClipboardList, 
  Megaphone, 
  CalendarCheck, 
  Users, 
  Calculator, 
  BedDouble,
  Wrench,
  Truck,
  Laptop
} from "lucide-react";

export default function OurServices() {
  const services = [
    {
      title: "Interior Design & Onboarding",
      desc: "Creating thoughtfully designed interiors and seamless onboarding.",
      icon: Home
    },
    {
      title: "Listing Management",
      desc: "End-to-end management of property listings and updates.",
      icon: ClipboardList
    },
    {
      title: "Marketing",
      desc: "Strategic branding and digital marketing to drive visibility.",
      icon: Megaphone
    },
    {
      title: "Reservations",
      desc: "Efficient booking management and scheduling.",
      icon: CalendarCheck
    },
    {
      title: "Guest Services",
      desc: "Personalized guest support ensuring a premium stay.",
      icon: Users
    },
    {
      title: "Finance & Accounting",
      desc: "Transparent reporting and financial management.",
      icon: Calculator
    },
    {
      title: "Housekeeping",
      desc: "Professional cleaning services for every stay.",
      icon: BedDouble
    },
    {
      title: "Maintenance",
      desc: "Reliable maintenance and property care.",
      icon: Wrench
    },
    {
      title: "Logistics",
      desc: "Managing operations and on-ground coordination.",
      icon: Truck
    },
    {
      title: "IT Department",
      desc: "Technical support and system management.",
      icon: Laptop
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Our Services
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          We cultivate a dynamic corporate culture and a flat, participatory 
          management structure which maximizes teamwork and encourages creative 
          thinking and integrated decision making.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 shadow-sm">
                <Icon className="w-8 h-8 text-gray-700" />
              </div>
              <h3 className="font-semibold text-gray-800 text-lg">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                {service.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
