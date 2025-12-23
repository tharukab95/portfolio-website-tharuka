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
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      title: "SwarmLib: Programming Framework for Swarm Robotics",
      authors: "T.Bandara, M.Bandara, N.Adhikari, R.Ragel, I.Nawinne",
      venue: "ESCaPe 2020 Project Symposium",
      link: "https://bit.ly/ESCaPe2020_Proceedings",
      year: "2020",
      gradient: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="publications" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-5xl mx-auto z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 glass rounded-full mb-4">
            <span className="text-sm font-medium text-yellow-400">Research & Publications</span>
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
            <span className="text-white">Academic </span>
            <span className="text-gradient">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-orange-500 mx-auto rounded-full" />
        </div>
        
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-8 hover-lift transition-all duration-1000 ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${pub.gradient} rounded-xl flex items-center justify-center`}>
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {pub.title}
                    </h3>
                  </div>
                  
                  <p className="text-slate-300 mb-3">
                    <span className="font-semibold text-slate-200">Authors:</span> {pub.authors}
                  </p>
                  <p className="text-slate-400 mb-4">
                    <span className="font-semibold text-slate-300">Venue:</span> {pub.venue}
                  </p>
                  
                  {pub.award && (
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${pub.gradient} text-white rounded-lg font-semibold text-sm shadow-lg mb-4`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {pub.award}
                    </div>
                  )}
                </div>
                <span className="text-slate-500 font-medium text-sm whitespace-nowrap ml-4">
                  {pub.year}
                </span>
              </div>
              
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-200 group"
              >
                View Publication
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
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
          ))}
        </div>
      </div>
    </section>
  );
}
