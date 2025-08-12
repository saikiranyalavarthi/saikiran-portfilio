// src/pages/Projects.jsx
import React from "react";

// Import images from src/assets/
import image6 from "../assets/image6.jpg";
import image7 from "../assets/image7.jpg";
import image8 from "../assets/image8.jpg";
import image9 from "../assets/image9.jpg";
import image10 from "../assets/image10.jpg";
import image11 from "../assets/image11.jpg";

export default function Projects() {
  const projects = [
    {
      title: "Vet & Meet Pet Consultation App",
      image: image6,
      description:
        "A modern pet consultation app where pet owners can book online vet consultations via WhatsApp, integrated with a booking calendar and payment gateway.",
    },
    {
      title: "Pet Shop Ecommerce Website",
      image: image7,
      description:
        "A fast-loading eCommerce site for pet food, accessories, and medicine using WooCommerce and custom WordPress themes.",
    },
    {
      title: "News Website",
      image: image10,
      description:
        "A dynamic Telugu-language news website built with ReactJS and WordPress REST API, featuring category navigation, sliders, and ticker components.",
    },
    {
      title: "IT Solutions Company Site",
      image: image8,
      description:
        "A sleek website for a tech company showcasing IT Infrastructure, SAP Services, Staffing, and Immigration Solutions using Next.js and Tailwind CSS.",
    },
    {
      title: "Coworking Space Booking App",
      image: image9,
      description:
        "Mobile-first app and website for hourly/daily coworking space booking. Includes seat selection, map view, and testimonials.",
    },
    {
      title: "Portfolio Website",
      image: image11,
      description:
        "A personal portfolio showcasing a developer's skills, past projects, blog, and contact information. Built with Next.js, Tailwind CSS, and Framer Motion animations.",
    },
  ];

  return (
    <div
      id="projects"
      className="font-sans py-20 px-6 md:px-20 bg-black text-white"
    >
      <h1 className="text-4xl font-bold text-amber-300 text-center mb-12">
        Our Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-black text-white p-6 rounded-xl shadow-md"
          >
            {/* <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-md mb-4"
            /> */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover rounded-md mb-4 
             filter contrast-125 saturate-150 brightness-105 
             hover:brightness-110 hover:scale-105 transition-transform duration-300"
            />
            <h3 className="text-lg font-semibold text-amber-300 mb-2">
              {proj.title}
            </h3>
            <p className="text-gray-300 text-sm">{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
