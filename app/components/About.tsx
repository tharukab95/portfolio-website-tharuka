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
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232 1.232 3.228 0 4.46s-3.228 1.232-4.46 0L14.3 19.8m-4.6 0a2.25 2.25 0 01-1.591-.659L5 14.5m14.8.8v2.25a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 17.75v-2.25m15 0h-2.25m-15 0H3m15 0v2.25A2.25 2.25 0 0115.75 22H5.25A2.25 2.25 0 013 19.75V17.5m15 0v-2.25c0-.414-.336-.75-.75-.75h-3.5a.75.75 0 00-.75.75v2.25m0 0H9m1.5-12v5.714a2.25 2.25 0 01-.659 1.591L5 14.5" />
        </svg>
      ),
    },
    {
      title: "Leadership",
      description: "Remaining calm under pressure while leading teams through complex technical challenges. Served as both emotional and technical backbone at Surge Global.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15m-16.5 18v-5.25c0-1.794 1.456-3.25 3.25-3.25h6.5c1.794 0 3.25 1.456 3.25 3.25V21M4.5 3v4.5m0-4.5h15v4.5M4.5 8.25h15M9 12.75h.008v.008H9v-.008zm3 0h.008v.008H12v-.008zm3 0h.008v.008H15v-.008z" />
        </svg>
      ),
    },
    {
      title: "Cloud Infrastructure",
      description: "Led cloud infrastructure migrations delivering significant cost savings, CI/CD pipeline optimizations, and on-call rotations resolving production issues.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      ),
    },
    {
      title: "Team Player",
      description: "Committed to fostering environments where everyone can excel. Former President of Hackers' Club at UOP, mentoring junior engineers.",
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00d9ff]/12 via-[#00b8d4]/8 to-transparent rounded-full blur-3xl animate-float-3d opacity-50" />
        <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-[#0099cc]/10 via-[#00d9ff]/6 to-transparent rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#00d9ff]/30 bg-gradient-to-r from-[#00d9ff]/10 via-[#33e0ff]/8 to-transparent">
              <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#00d9ff] tracking-widest uppercase font-heading">About Me</span>
              <span className="w-2 h-2 bg-[#33e0ff] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Crafting</span>
            <span className="block text-gradient">Digital Excellence</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#00d9ff] via-[#33e0ff] to-transparent mx-auto animate-gradient rounded-full" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              data-card-index={index}
              className={`group interactive-card glass-glow rounded-2xl p-8 border border-white/10 bg-[#0f1629]/90 backdrop-blur-xl overflow-hidden relative ${
                visibleCards.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 150}ms`,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Subtle Background Gradient with alternating colors */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                index % 2 === 0 
                  ? 'bg-gradient-to-br from-[#00d9ff]/5 via-[#6366f1]/3 to-transparent'
                  : 'bg-gradient-to-br from-[#33e0ff]/5 via-[#8b5cf6]/3 to-transparent'
              }`} />
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-start gap-5 mb-6">
                  <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center border transition-all duration-500 relative overflow-hidden ${
                    index % 2 === 0
                      ? 'bg-gradient-to-br from-[#00d9ff]/20 to-[#6366f1]/15 text-[#00d9ff] border-[#00d9ff]/20 group-hover:border-[#6366f1]/40 group-hover:bg-gradient-to-br group-hover:from-[#00d9ff]/30 group-hover:to-[#6366f1]/20'
                      : 'bg-gradient-to-br from-[#33e0ff]/20 to-[#8b5cf6]/15 text-[#33e0ff] border-[#33e0ff]/20 group-hover:border-[#8b5cf6]/40 group-hover:bg-gradient-to-br group-hover:from-[#33e0ff]/30 group-hover:to-[#8b5cf6]/20'
                  }`}>
                    {/* Subtle shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="relative z-10">
                      {feature.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-3xl font-bold text-white mb-3 font-heading transition-colors duration-500 ${
                      index % 2 === 0 ? 'group-hover:text-[#00d9ff]' : 'group-hover:text-[#8b5cf6]'
                    }`}>
                      {feature.title}
                    </h3>
                    <div className={`h-0.5 w-20 rounded-full mb-4 group-hover:w-32 transition-all duration-500 ${
                      index % 2 === 0 
                        ? 'bg-gradient-to-r from-[#00d9ff] to-[#6366f1]'
                        : 'bg-gradient-to-r from-[#33e0ff] to-[#8b5cf6]'
                    }`} />
                  </div>
                </div>
                <p className="text-lg text-[#e2e8f0] leading-relaxed font-normal group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Subtle Corner Glow with alternating colors */}
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 ${
                index % 2 === 0
                  ? 'bg-gradient-to-br from-[#00d9ff]/10 via-[#6366f1]/5 to-transparent'
                  : 'bg-gradient-to-br from-[#33e0ff]/10 via-[#8b5cf6]/5 to-transparent'
              }`} />
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        <div className={`glass-glow rounded-2xl p-12 text-center border border-[#00d9ff]/20 bg-gradient-to-r from-[#00d9ff]/5 via-[#33e0ff]/5 to-transparent backdrop-blur-xl transition-all duration-1000 ${
          isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
        }`} style={{ transitionDelay: '600ms' }}>
          <p className="text-2xl sm:text-3xl text-white leading-relaxed max-w-5xl mx-auto font-medium">
            Great engineering isn&apos;t just about code—it&apos;s about{" "}
            <span className="text-[#00d9ff] font-semibold">communication</span>,{" "}
            <span className="text-[#33e0ff] font-semibold">collaboration</span>, and{" "}
            <span className="text-[#00b8d4] font-semibold">unwavering commitment</span> to excellence.
          </p>
        </div>
      </div>
    </section>
  );
}
