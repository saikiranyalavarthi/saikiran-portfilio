import React from "react";
import Lottie from "lottie-react";
import educationAnimation from "../assets/Robot Futuristic Animation.json"; // Replace with your file path

const ResumeSection = () => {
  const experience = [
    {
      title: "Full Stack Developer",
      company: "D4 Interactive Pvt Ltd",
      location: "Hyderabad",
      duration: "March 2024 – Present",
      points: [
        "Developing full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
        "Built responsive and performant UIs using Tailwind CSS and Bootstrap.",
        "Created and consumed REST APIs, integrated third-party APIs like Blogger API.",
        "Participated in Agile development and deployment lifecycle.",
      ],
    },
    {
      title: "Front end Developer",
      company: "Suvira Facilities Pvt Ltd",
      location: "Hyderabad",
      duration: "Feb 2023 –  Feb 2024",
      points: [
        "Managed and updated company WordPress websites.",
        "Handled billing data, records, and website inquiries.",
        "Collaborated with digital teams to maintain security and design consistency.",
      ],
    },
    {
      title: "Full Stack Developer Trainee (Prepbytes Internship)",
      company: "Prepbytes",
      location: "Remote",
      duration: "April 2022 – Dec 2022",
      points: [
        "Learned full-stack web development using React.js, Node.js, and MongoDB.",
        "Built real-time projects and personal portfolio websites.",
        "Understood project workflows, GitHub, and deployment practices.",
      ],
    },
    {
      title: "Production Supervisor",
      company: "GS Alloy Castings Ltd",
      location: "Vijayawada",
      duration: "Jan 2021 – March 2022",
      points: [
        "Supervised production of iron and steel casting components.",
        "Coordinated manufacturing for BHEL, HAL, and other major clients.",
        "Maintained shift targets and ensured quality control.",
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <h2 className="text-4xl font-bold mb-12 text-yellow-400 text-center">
        Resume
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Lottie Animation */}
        <div className="flex justify-center">
          <Lottie
            animationData={educationAnimation}
            loop={true}
            className="w-[500px] md:w-[500px] lg:w-[500px]"
          />
        </div>

        {/* Experience Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-yellow-300">
            💼 Work Experience
          </h3>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-4 border-yellow-500 pl-4">
                <h4 className="text-lg font-semibold text-amber-300">
                  {exp.title}
                </h4>
                <p className="text-gray-300">
                  {exp.company} – {exp.location}
                </p>
                <p className="text-sm text-gray-400">{exp.duration}</p>
                <ul className="list-disc ml-5 mt-2 text-gray-400 text-sm space-y-1">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
