"use client";

import { useEffect, useRef, useState } from "react";

export default function Publications() {
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

  const publications = [
    {
      title: "A Programming Framework for Robot Swarms",
      authors: "T.Bandara, M.Bandara, N.Adhikari, R.Ragel, I.Nawinne",
      venue: "MERCon 2020 International Multidisciplinary Engineering Research Conference",
      award: "Best Paper - Robotics and Intelligent Systems Track",
      link: "https://ieeexplore.ieee.org/document/9185206",
      year: "2020",
    },
    {
      title: "SwarmLib: Programming Framework for Swarm Robotics",
      authors: "T.Bandara, M.Bandara, N.Adhikari, R.Ragel, I.Nawinne",
      venue: "ESCaPe 2020 Project Symposium",
      link: "https://bit.ly/ESCaPe2020_Proceedings",
      year: "2020",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="publications" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050812] via-[#0a0e27] to-[#0f1629] overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#a855f7]/8 via-[#00d9ff]/5 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#10b981]/6 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-5xl mx-auto z-10">
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#a855f7]/40 bg-gradient-to-r from-[#a855f7]/15 via-[#00d9ff]/10 to-transparent">
              <span className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#a855f7] tracking-widest uppercase font-heading">Research & Publications</span>
              <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Academic</span>
            <span className="block text-gradient">Excellence</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#00d9ff] via-[#a855f7] to-transparent mx-auto animate-gradient rounded-full" />
        </div>
        
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`group interactive-card glass-glow rounded-2xl p-8 border-2 border-white/10 bg-[#0f1629]/90 backdrop-blur-xl overflow-hidden relative transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#a855f7] to-[#00d9ff] opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6 pb-6 border-b border-white/10">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#a855f7] to-[#c084fc] flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        <svg className="w-10 h-10 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <h3 className="text-3xl font-bold text-white font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#a855f7] group-hover:to-[#00d9ff] transition-all duration-500">
                        {pub.title}
                      </h3>
                    </div>
                    
                    <p className="text-lg text-[#e2e8f0] mb-3 font-semibold">
                      <span className="text-[#cbd5e1] font-bold">Authors:</span> {pub.authors}
                    </p>
                    <p className="text-base text-[#cbd5e1] mb-4 font-normal">
                      <span className="text-[#e2e8f0] font-semibold">Venue:</span> {pub.venue}
                    </p>
                    
                    {pub.award && (
                      <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#a855f7]/30 to-[#a855f7]/20 border-2 border-[#a855f7]/40 text-[#a855f7] rounded-xl font-bold text-sm mb-4 shadow-lg">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        {pub.award}
                      </div>
                    )}
                  </div>
                  <span className="text-xl text-[#cbd5e1] font-bold whitespace-nowrap ml-4 px-4 py-2 glass rounded-xl border border-white/10">
                    {pub.year}
                  </span>
                </div>
                
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3 glass border-2 border-[#a855f7]/30 rounded-xl text-[#a855f7] font-bold hover:bg-gradient-to-r hover:from-[#a855f7] hover:to-[#00d9ff] hover:text-white hover:border-transparent transition-all duration-300 group"
                >
                  View Publication
                  <svg
                    className="w-5 h-5 group-hover:translate-x-2 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#a855f7] to-[#00d9ff] opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
