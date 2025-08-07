// src/components/SkillsSection.jsx
import { useEffect, useState } from "react";

const skills = [
  { title: "HTML", percent: 95 },
  { title: "CSS", percent: 85 },
  { title: "Java Script", percent: 90 },
  { title: "React js", percent: 85 },
  { title: "NODE JS", percent: 80 },
  { title: "Express js", percent: 80 },
  { title: "MongoDB", percent: 80 },
  { title: "Next js", percent: 80 },
  { title: "Digital Marketing", percent: 90 },
];

export default function SkillsSection() {
  const [animatedWidths, setAnimatedWidths] = useState([]);

  useEffect(() => {
    // Animate progress bar after component mounts
    const timeouts = skills.map((skill, index) =>
      setTimeout(() => {
        setAnimatedWidths((prev) => {
          const updated = [...prev];
          updated[index] = skill.percent;
          return updated;
        });
      }, index * 200)
    );

    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section
      id="skills"
      className="bg-[#0f172a] text-white py-20 px-6 md:px-20"
    >
      <div className="grid md:grid-cols-2 gap-16">
        {/* Left Text Area */}
        <div>
          <h2 className="text-yellow-400 text-xl tracking-widest mb-2 uppercase">
            Skills
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            All the skills that I have in that field of work are mentioned.
          </h3>
          <p className="text-gray-400">
            As a Full Stack Developer, I specialize in building robust,
            scalable, and efficient web applications from front-end to back-end.
            My experience spans modern JavaScript frameworks like React and
            Next.js, as well as backend technologies such as Node.js, Express,
            and MongoDB.
            <br />
            <br />
            I’m passionate about writing clean, maintainable code and creating
            seamless user experiences. With a deep understanding of REST APIs,
            database design, and cloud services, I transform complex problems
            into elegant digital solutions.
          </p>
        </div>

        {/* Right Progress Bars */}
        <div className="space-y-6">
          {skills.map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="font-semibold">{skill.title}</span>
                <span className="text-yellow-400 font-bold">
                  {skill.percent}%
                </span>
              </div>
              <div className="w-full bg-white/10 h-1.5 rounded">
                <div
                  className="bg-yellow-400 h-1.5 rounded transition-all duration-700"
                  style={{ width: `${animatedWidths[index] || 0}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
