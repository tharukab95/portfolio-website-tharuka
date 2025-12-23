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
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#22d3ee]/8 via-[#67e8f9]/5 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tr from-[#06b6d4]/6 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-5xl mx-auto z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#22d3ee]/30 bg-gradient-to-r from-[#22d3ee]/10 via-[#67e8f9]/8 to-transparent">
              <span className="w-2 h-2 bg-[#22d3ee] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#22d3ee] tracking-widest uppercase font-heading">Education</span>
              <span className="w-2 h-2 bg-[#67e8f9] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Academic</span>
            <span className="block text-gradient">Background</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#22d3ee] via-[#67e8f9] to-transparent mx-auto animate-gradient rounded-full" />
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => {
            const gradient = "from-[#22d3ee] to-[#67e8f9]";
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
                {/* Subtle Background Gradient with alternating colors */}
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                  index % 2 === 0
                    ? 'bg-gradient-to-br from-[#22d3ee]/5 via-[#10b981]/3 to-transparent'
                    : 'bg-gradient-to-br from-[#67e8f9]/5 via-[#34d399]/3 to-transparent'
                }`} />
                
                <div className="relative z-10">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-start gap-5 flex-1">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center border transition-all duration-500 relative overflow-hidden flex-shrink-0 ${
                        index % 2 === 0
                          ? 'bg-gradient-to-br from-[#22d3ee]/20 to-[#10b981]/15 text-[#22d3ee] border-[#22d3ee]/20 group-hover:border-[#10b981]/40 group-hover:bg-gradient-to-br group-hover:from-[#22d3ee]/30 group-hover:to-[#10b981]/20'
                          : 'bg-gradient-to-br from-[#67e8f9]/20 to-[#34d399]/15 text-[#67e8f9] border-[#67e8f9]/20 group-hover:border-[#34d399]/40 group-hover:bg-gradient-to-br group-hover:from-[#67e8f9]/30 group-hover:to-[#34d399]/20'
                      }`}>
                        {/* Subtle shimmer */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443a55.381 55.381 0 015.25 2.882V15m-9 0l-3 3m0 0l3 3m-3-3h12.5" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <h3 className={`text-3xl font-bold text-white mb-3 font-heading transition-colors duration-500 ${
                          index % 2 === 0 ? 'group-hover:text-[#22d3ee]' : 'group-hover:text-[#34d399]'
                        }`}>
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
                            <span className={`text-2xl mr-4 font-bold ${
                              index % 2 === 0 ? 'text-[#22d3ee]' : 'text-[#34d399]'
                            }`}>▸</span>
                            <span className="group-hover/item:text-white transition-colors">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Subtle Corner Glow with alternating colors */}
                <div className={`absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 ${
                  index % 2 === 0
                    ? 'bg-gradient-to-br from-[#22d3ee]/10 via-[#10b981]/5 to-transparent'
                    : 'bg-gradient-to-br from-[#67e8f9]/10 via-[#34d399]/5 to-transparent'
                }`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
