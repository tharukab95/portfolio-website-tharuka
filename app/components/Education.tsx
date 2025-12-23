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
    },
    {
      degree: "BSc(Eng) in Computer Engineering",
      institution: "Faculty of Engineering, University of Peradeniya",
      location: "Sri Lanka",
      details: ["GPA: 3.55/4.00"],
    },
    {
      degree: "G.C.E Advanced Level",
      institution: "Ananda College",
      location: "Colombo 10, Sri Lanka",
      period: "2005 - 2013",
      details: ["G.C.E A/L: 1A 2B", "G.C.E O/L: 8A 1C"],
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="education" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1629] via-[#0a0e27] to-[#050812] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#10b981]/8 via-[#00d9ff]/5 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#a855f7]/6 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-5xl mx-auto z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#10b981]/40 bg-gradient-to-r from-[#10b981]/15 via-[#00d9ff]/10 to-transparent">
              <span className="w-2 h-2 bg-[#10b981] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#10b981] tracking-widest uppercase font-heading">Education</span>
              <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Academic</span>
            <span className="block text-gradient">Background</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#00d9ff] via-[#a855f7] to-transparent mx-auto animate-gradient rounded-full" />
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => {
            const gradients = [
              "from-[#10b981] to-[#34d399]",
              "from-[#00d9ff] to-[#33e0ff]",
              "from-[#a855f7] to-[#c084fc]",
            ];
            const gradient = gradients[index % gradients.length];
            return (
              <div
                key={index}
                className={`group interactive-card glass-glow rounded-2xl p-8 border-2 border-white/10 bg-[#0f1629]/90 backdrop-blur-xl overflow-hidden relative transition-all duration-1000 ${
                  isVisible
                    ? 'opacity-100 translate-x-0 scale-100'
                    : index % 2 === 0
                    ? 'opacity-0 -translate-x-10 scale-95'
                    : 'opacity-0 translate-x-10 scale-95'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-start gap-5 flex-1">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-white shadow-xl flex-shrink-0 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <svg className="w-10 h-10 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14v9M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-3xl font-bold text-white mb-3 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#10b981] group-hover:to-[#00d9ff] transition-all duration-500">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-[#e2e8f0] font-semibold mb-2 group-hover:text-white transition-colors">
                          {edu.institution}
                        </p>
                        <p className="text-lg text-[#cbd5e1] font-normal">{edu.location}</p>
                      </div>
                    </div>
                    {edu.period && (
                      <span className="text-lg text-[#cbd5e1] font-bold whitespace-nowrap mt-4 sm:mt-0 sm:ml-4 px-4 py-2 glass rounded-xl border border-white/10">
                        {edu.period}
                      </span>
                    )}
                  </div>
                  
                  {edu.details.length > 0 && (
                    <div className="pt-6 border-t border-white/10">
                      <ul className="space-y-3">
                        {edu.details.map((detail, idx) => (
                          <li key={idx} className="text-lg text-[#e2e8f0] flex items-center font-semibold group/item">
                            <span className={`text-2xl mr-4 bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-bold`}>▸</span>
                            <span className="group-hover/item:text-white transition-colors">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Decorative Corner */}
                <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
