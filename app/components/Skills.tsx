"use client";

import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillCategories = [
    {
      category: "Languages",
      skills: ["TypeScript", "Java", "C++", "Node.js", "JavaScript"],
      icon: "💻",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      category: "Frontend",
      skills: ["Next.js", "React", "Angular", "Flutter"],
      icon: "🎨",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      category: "Backend",
      skills: ["NestJS", "GraphQL", "Spring Boot", "Express", "REST APIs"],
      icon: "⚙️",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Terraform", "Serverless Framework", "AWS CDK", "Docker"],
      icon: "☁️",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      category: "Monitoring & Tools",
      skills: ["Grafana", "Prometheus", "Loki", "Concourse CI", "Jest", "Git"],
      icon: "📊",
      gradient: "from-cyan-500 to-teal-600",
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Oracle", "H2"],
      icon: "🗄️",
      gradient: "from-purple-500 to-indigo-600",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 glass rounded-full mb-4">
            <span className="text-sm font-medium text-blue-400">Skills & Technologies</span>
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
            <span className="text-white">Technical </span>
            <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </div>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 hover-lift group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-14 h-14 bg-gradient-to-br ${category.gradient} rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className={`px-4 py-2 bg-gradient-to-r ${category.gradient} text-white rounded-lg text-sm font-semibold hover:scale-110 transition-all duration-300 cursor-default shadow-lg`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`mt-20 grid md:grid-cols-3 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="glass rounded-2xl p-8 text-center hover-lift">
            <div className="text-5xl font-extrabold text-gradient mb-2">5+</div>
            <div className="text-slate-400 font-medium">Years Experience</div>
          </div>
          <div className="glass rounded-2xl p-8 text-center hover-lift">
            <div className="text-5xl font-extrabold text-gradient mb-2">20+</div>
            <div className="text-slate-400 font-medium">Technologies</div>
          </div>
          <div className="glass rounded-2xl p-8 text-center hover-lift">
            <div className="text-5xl font-extrabold text-gradient mb-2">10+</div>
            <div className="text-slate-400 font-medium">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
}
