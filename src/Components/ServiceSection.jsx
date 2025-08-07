// src/components/RealServicesSection.jsx
import {
  FaLaptopCode,
  FaBullhorn,
  FaWordpress,
  FaMobileAlt,
  FaReact,
  FaCode,
  FaGlobe,
  FaSearch,
  FaShareAlt,
} from "react-icons/fa";

const realServices = [
  {
    icon: <FaGlobe size={40} />,
    title: "Website Design",
    description: "Creative and modern web designs with user-first experiences.",
  },
  {
    icon: <FaBullhorn size={40} />,
    title: "Digital Marketing",
    description:
      "Grow your online presence and drive results with proven strategies.",
  },
  {
    icon: <FaWordpress size={40} />,
    title: "WordPress Developer",
    description: "Custom WordPress themes and plugins for any business need.",
  },
  {
    icon: <FaMobileAlt size={40} />,
    title: "App Developer",
    description: "Native and cross-platform mobile apps with stunning UI/UX.",
  },
  {
    icon: <FaReact size={40} />,
    title: "React Developer",
    description:
      "Component-based SPA development using modern React techniques.",
  },
  {
    icon: <FaCode size={40} />,
    title: "Full Stack Developer",
    description: "Building scalable frontend and backend systems end-to-end.",
  },
  {
    icon: <FaReact size={40} />,
    title: "React Native Developer",
    description: "High-performance apps for Android & iOS using React Native.",
  },
  {
    icon: <FaSearch size={40} />,
    title: "SEO Specialist",
    description: "Boost your Google rankings and increase traffic organically.",
  },
  {
    icon: <FaShareAlt size={40} />,
    title: "Social Media Marketing",
    description: "Grow your brand awareness across all major platforms.",
  },
];

export default function RealServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#0f172a] text-white py-20 px-6 md:px-20"
    >
      <div className="text-center mb-16">
        <h2 className="text-yellow-400 text-3xl tracking-widest mb-2">
          SERVICES
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {realServices.map((service, index) => (
          <div
            key={index}
            className="bg-[#1e293b] hover:bg-[#334155] transition-all duration-300 rounded-xl shadow-md p-8 text-center transform hover:-translate-y-2 hover:shadow-lg group"
          >
            <div className="text-yellow-400 mb-6 group-hover:scale-110 transition duration-300">
              {service.icon}
            </div>
            <h4 className="text-xl font-semibold mb-3 group-hover:text-yellow-400">
              {service.title}
            </h4>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
