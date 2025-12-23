"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
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

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-slate-900 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto z-10">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 glass rounded-full mb-4">
              <span className="text-sm font-medium text-cyan-400">About Me</span>
            </span>
            <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
              <span className="text-white">Crafting </span>
              <span className="text-gradient">Digital Excellence</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Left Column */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Computer Engineer</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Strong foundation from the University of Peradeniya and ongoing graduate studies 
                  at the University of Colombo. Dedicated to building systems that matter.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Leadership</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Remaining calm under pressure while leading teams through complex technical challenges. 
                  Served as both emotional and technical backbone at Surge Global.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <div className="glass rounded-2xl p-8 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Cloud Infrastructure</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Led cloud infrastructure migrations delivering significant cost savings, 
                  CI/CD pipeline optimizations, and on-call rotations resolving production issues.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 hover-lift">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Team Player</h3>
                </div>
                <p className="text-slate-300 leading-relaxed">
                  Committed to fostering environments where everyone can excel. 
                  Former President of Hackers' Club at UOP, mentoring junior engineers.
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Narrative */}
          <div className="glass rounded-3xl p-10 text-center">
            <p className="text-xl sm:text-2xl text-slate-200 leading-relaxed max-w-4xl mx-auto">
              Great engineering isn't just about code—it's about{" "}
              <span className="text-cyan-400 font-semibold">communication</span>,{" "}
              <span className="text-purple-400 font-semibold">collaboration</span>, and{" "}
              <span className="text-pink-400 font-semibold">unwavering commitment</span> to excellence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
