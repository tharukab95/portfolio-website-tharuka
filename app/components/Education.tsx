"use client";

import { useEffect, useRef, useState } from "react";

export default function Education() {
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

  const education = [
    {
      degree: "Masters in Computer Science (Partial)",
      institution: "School of Computing, University of Colombo",
      location: "Sri Lanka",
      details: [],
      gradient: "from-purple-500 to-pink-600",
      icon: "🎓",
    },
    {
      degree: "BSc(Eng) in Computer Engineering",
      institution: "Faculty of Engineering, University of Peradeniya",
      location: "Sri Lanka",
      details: ["GPA: 3.55/4.00"],
      gradient: "from-cyan-500 to-blue-600",
      icon: "🏛️",
    },
    {
      degree: "G.C.E Advanced Level",
      institution: "Ananda College",
      location: "Colombo 10, Sri Lanka",
      period: "2005 - 2013",
      details: ["G.C.E A/L: 1A 2B", "G.C.E O/L: 8A 1C"],
      gradient: "from-blue-500 to-cyan-600",
      icon: "📚",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 glass rounded-full mb-4">
            <span className="text-sm font-medium text-indigo-400">Education</span>
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
            <span className="text-white">Academic </span>
            <span className="text-gradient">Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 hover-lift transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-x-0'
                  : index % 2 === 0
                  ? 'opacity-0 -translate-x-10'
                  : 'opacity-0 translate-x-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-xl flex items-center justify-center text-2xl flex-shrink-0`}>
                    {edu.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-slate-300 font-semibold mb-1">
                      {edu.institution}
                    </p>
                    <p className="text-slate-400">{edu.location}</p>
                  </div>
                </div>
                {edu.period && (
                  <span className="text-slate-500 font-medium text-sm sm:text-base whitespace-nowrap mt-4 sm:mt-0 sm:ml-4">
                    {edu.period}
                  </span>
                )}
              </div>
              
              {edu.details.length > 0 && (
                <div className="pt-6 border-t border-white/10">
                  <ul className="space-y-2">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-slate-300 flex items-center">
                        <span className={`text-transparent bg-gradient-to-br ${edu.gradient} bg-clip-text mr-3 font-bold`}>▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
