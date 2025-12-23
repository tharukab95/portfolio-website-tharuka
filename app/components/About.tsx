"use client";

import { useEffect, useRef, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
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

    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-card-index') || '0');
            setVisibleCards((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      const cards = sectionRef.current.querySelectorAll('[data-card-index]');
      cards.forEach((card) => cardObserver.observe(card));
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        const cards = sectionRef.current.querySelectorAll('[data-card-index]');
        cards.forEach((card) => cardObserver.unobserve(card));
      }
    };
  }, []);

  const features = [
    {
      title: "Computer Engineer",
      description: "Strong foundation from the University of Peradeniya and ongoing graduate studies at the University of Colombo. Dedicated to building systems that matter.",
      color: "from-[#00d9ff] to-[#33e0ff]",
      borderColor: "border-[#00d9ff]",
      bgColor: "bg-[#00d9ff]/10",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Leadership",
      description: "Remaining calm under pressure while leading teams through complex technical challenges. Served as both emotional and technical backbone at Surge Global.",
      color: "from-[#a855f7] to-[#c084fc]",
      borderColor: "border-[#a855f7]",
      bgColor: "bg-[#a855f7]/10",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: "Cloud Infrastructure",
      description: "Led cloud infrastructure migrations delivering significant cost savings, CI/CD pipeline optimizations, and on-call rotations resolving production issues.",
      color: "from-[#10b981] to-[#34d399]",
      borderColor: "border-[#10b981]",
      bgColor: "bg-[#10b981]/10",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1A9 9 0 105.6 19.7 1 1 0 103.14 18l2.7-2.3A1 1 0 005.6 15.1a7 7 0 1110.2-2.1 5 5 0 105.1 7.1h-.1a4 4 0 10-3.7-5.6l-2.7 2.3z" />
        </svg>
      ),
    },
    {
      title: "Team Player",
      description: "Committed to fostering environments where everyone can excel. Former President of Hackers' Club at UOP, mentoring junior engineers.",
      color: "from-[#00d9ff] to-[#a855f7]",
      borderColor: "border-[#00d9ff]",
      bgColor: "bg-[#00d9ff]/10",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050812] via-[#0a0e27] to-[#0f1629] overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00d9ff]/15 via-[#a855f7]/10 to-transparent rounded-full blur-3xl animate-float-3d opacity-60" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#10b981]/12 via-[#00d9ff]/8 to-transparent rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#00d9ff]/40 bg-gradient-to-r from-[#00d9ff]/15 via-[#a855f7]/10 to-transparent">
              <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#00d9ff] tracking-widest uppercase font-heading">About Me</span>
              <span className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Crafting</span>
            <span className="block text-gradient">Digital Excellence</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#00d9ff] via-[#a855f7] to-transparent mx-auto animate-gradient rounded-full" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              data-card-index={index}
              className={`group interactive-card glass-glow rounded-2xl p-8 border-2 ${feature.borderColor}/30 bg-[#0f1629]/90 backdrop-blur-xl overflow-hidden relative ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Animated Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className={`flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="relative z-10">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-3 font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d9ff] group-hover:to-[#a855f7] transition-all duration-500">
                      {feature.title}
                    </h3>
                    <div className={`h-1 w-20 bg-gradient-to-r ${feature.color} rounded-full mb-4 group-hover:w-32 transition-all duration-500 shadow-lg`} />
                  </div>
                </div>
                <p className="text-lg text-[#e2e8f0] leading-relaxed font-normal group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className={`glass-glow rounded-2xl p-12 text-center border-2 border-[#00d9ff]/30 bg-gradient-to-r from-[#00d9ff]/10 via-[#a855f7]/10 to-[#10b981]/10 backdrop-blur-xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{ transitionDelay: '600ms' }}>
          <p className="text-2xl sm:text-3xl text-white leading-relaxed max-w-5xl mx-auto font-medium">
            Great engineering isn&apos;t just about code—it&apos;s about{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00d9ff] to-[#33e0ff] font-bold">communication</span>,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#c084fc] font-bold">collaboration</span>, and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#34d399] font-bold">unwavering commitment</span> to excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
