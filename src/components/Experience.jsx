import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const ExperienceItem = ({ position, company, location, period, description, skills, index }) => {
  // Alternate animations based on index for visual interest
  const isEven = index % 2 === 0;
  const animationDirection = isEven ? "fade-left" : "fade-right";
  const animationDelay = 200 + (index * 100);
  
  return (
    <div 
      className="relative mb-12 last:mb-0"
      data-aos={animationDirection}
      data-aos-duration="1000"
      data-aos-delay={animationDelay}
    >
      {/* Timeline connector */}
      {index < 100 && (
        <div className="absolute left-[7px] top-[24px] h-full w-[2px] bg-[#1B1B1B]/20"></div>
      )}
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-[6px] h-4 w-4 rounded-full bg-[#1B1B1B]"></div>
      
      <div className="ml-10 bg-white/50 p-6 rounded-lg shadow-sm border border-[#1B1B1B]/10 hover:shadow-md transition-shadow">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-[#1B1B1B] mb-1 sm:mb-0">{position}</h3>
          <div className="flex items-center text-[#1B1B1B]/70 text-sm font-medium">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{period}</span>
          </div>
        </div>
        
        <div className="flex items-center mb-4">
          <Briefcase className="h-4 w-4 mr-2 text-[#1B1B1B]/70" />
          <span className="font-medium text-[#1B1B1B]/80">{company}</span>
          <span className="mx-2 text-[#1B1B1B]/50">•</span>
          <div className="flex items-center text-[#1B1B1B]/70">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{location}</span>
          </div>
        </div>
        
        <p className="text-[#1B1B1B]/80 mb-4">{description}</p>
        
        {skills && skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs rounded-md bg-[#1B1B1B]/10 text-[#1B1B1B]/80 font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {

  const experiences = [
    {
      position: "Web developer Intern",
      company: "WMSU",
      location: "Zamboanga City",
      period: "Feb 2025 - Present",
      description: "Supporting the development of the university's procurement system by implementing new features and improving user interfaces. Collaborating with senior developers to integrate database solutions and enhance system security protocols.",
      skills: ["PHP", "JQuery", "Bootstrap 5", "MySQL", "React"]
    },
    {
      position: "Freelance Web Developer",
      company: "Self Employed",
      location: "Zamboanga City",
      period: "Mar 2023 - Dec 2024",
      description: "Designed and developed custom websites and web applications for small businesses and individual clients. Managed multiple projects simultaneously while meeting deadlines and exceeding client expectations through responsive design and SEO optimization.",
      skills: ["React", "NextJS", "Tailwind", "PostgreSQL"]
    },
    {
      position: "Web Developer",
      company: "Self Employed",
      location: "Zamboanga City",
      period: "Jun 2021 - Feb 2022",
      description: "Built static websites for local businesses, focusing on mobile responsiveness and modern design principles. Created user-friendly content management solutions allowing clients to easily update their websites without technical knowledge.",
      skills: ["HTML", "CSS", "JavaScript", "PHP", "Django"]
    }
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
    });
  }, []);

  return (
    <main className="min-h-screen bg-[#efefef] py-20" id="experience">
      <div className="container mx-auto px-4 md:px-8">
        <div 
          className="mb-12 text-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-[#1B1B1B] mb-4"
          >
            Professional Experience
          </motion.h2>
          <p className="text-[#1B1B1B]/80 max-w-2xl mx-auto">
            My journey in the world of software development and the valuable experience I've gained along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto pl-4">
          {experiences.map((exp, index) => (
            <ExperienceItem 
              key={index}
              {...exp}
              index={index}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Experience;