"use client";

import { useEffect, useRef, useState } from "react";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCategories, setVisibleCategories] = useState<Set<number>>(new Set());
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

    const categoryObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-category-index') || '0');
            setVisibleCategories((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
      const categories = sectionRef.current.querySelectorAll('[data-category-index]');
      categories.forEach((cat) => categoryObserver.observe(cat));
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        const categories = sectionRef.current.querySelectorAll('[data-category-index]');
        categories.forEach((cat) => categoryObserver.unobserve(cat));
      }
    };
  }, []);

  const skillCategories = [
    {
      category: "Languages",
      skills: ["TypeScript", "Java", "C++", "Node.js", "JavaScript"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
    },
    {
      category: "Frontend",
      skills: ["Next.js", "React", "Angular", "Flutter"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.43-2.277a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128m0 0a15.998 15.998 0 003.388-1.62m5.43-2.277a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128m0 0a15.998 15.998 0 003.388-1.62M21.75 12a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
    },
    {
      category: "Backend",
      skills: ["NestJS", "GraphQL", "Spring Boot", "Express", "REST APIs"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3V6a3 3 0 013-3h13.5a3 3 0 013 3v5.25a3 3 0 01-3 3m-16.5 0a3 3 0 00-3 3v6a3 3 0 003 3h13.5a3 3 0 003-3v-6a3 3 0 00-3-3m-13.5 0h13.5" />
        </svg>
      ),
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Terraform", "Serverless Framework", "AWS CDK", "Docker"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
        </svg>
      ),
    },
    {
      category: "Monitoring & Tools",
      skills: ["Grafana", "Prometheus", "Loki", "Concourse CI", "Jest", "Git"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Oracle", "H2"],
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience" },
    { number: "20+", label: "Technologies" },
    { number: "10+", label: "Projects" },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050812] via-[#0a0e27] to-[#0f1629] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#06b6d4]/12 via-[#22d3ee]/8 to-transparent rounded-full blur-3xl animate-float-3d opacity-50" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#0891b2]/10 to-transparent rounded-full blur-3xl animate-float opacity-40" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#06b6d4]/30 bg-gradient-to-r from-[#06b6d4]/10 via-[#22d3ee]/8 to-transparent">
              <span className="w-2 h-2 bg-[#06b6d4] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#06b6d4] tracking-widest uppercase font-heading">Skills & Technologies</span>
              <span className="w-2 h-2 bg-[#22d3ee] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Technical</span>
            <span className="block text-gradient">Expertise</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#06b6d4] via-[#22d3ee] to-transparent mx-auto animate-gradient rounded-full" />
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-category-index={index}
              className={`group interactive-card glass-glow rounded-2xl p-8 border border-white/10 bg-[#0f1629]/90 backdrop-blur-xl overflow-hidden relative ${
                visibleCategories.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Subtle Background Gradient with varying colors */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                index % 3 === 0
                  ? 'bg-gradient-to-br from-[#06b6d4]/5 via-[#10b981]/3 to-transparent'
                  : index % 3 === 1
                  ? 'bg-gradient-to-br from-[#22d3ee]/5 via-[#14b8a6]/3 to-transparent'
                  : 'bg-gradient-to-br from-[#06b6d4]/5 via-[#34d399]/3 to-transparent'
              }`} />
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center border transition-all duration-500 relative overflow-hidden ${
                    index % 3 === 0
                      ? 'bg-gradient-to-br from-[#06b6d4]/20 to-[#10b981]/15 text-[#06b6d4] border-[#06b6d4]/20 group-hover:border-[#10b981]/40 group-hover:bg-gradient-to-br group-hover:from-[#06b6d4]/30 group-hover:to-[#10b981]/20'
                      : index % 3 === 1
                      ? 'bg-gradient-to-br from-[#22d3ee]/20 to-[#14b8a6]/15 text-[#22d3ee] border-[#22d3ee]/20 group-hover:border-[#14b8a6]/40 group-hover:bg-gradient-to-br group-hover:from-[#22d3ee]/30 group-hover:to-[#14b8a6]/20'
                      : 'bg-gradient-to-br from-[#06b6d4]/20 to-[#34d399]/15 text-[#06b6d4] border-[#06b6d4]/20 group-hover:border-[#34d399]/40 group-hover:bg-gradient-to-br group-hover:from-[#06b6d4]/30 group-hover:to-[#34d399]/20'
                  }`}>
                    {/* Subtle shimmer */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="relative z-10">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className={`text-2xl font-bold text-white font-heading transition-colors duration-500 ${
                    index % 3 === 0 ? 'group-hover:text-[#06b6d4]' 
                    : index % 3 === 1 ? 'group-hover:text-[#14b8a6]'
                    : 'group-hover:text-[#34d399]'
                  }`}>
                    {category.category}
                  </h3>
                </div>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className={`skill-tag px-4 py-2 glass border border-white/15 text-[#e2e8f0] rounded-xl text-sm font-semibold transition-all duration-300 cursor-default ${
                        index % 3 === 0
                          ? 'hover:border-[#06b6d4]/40 hover:text-[#06b6d4] hover:bg-[#06b6d4]/10'
                          : index % 3 === 1
                          ? 'hover:border-[#14b8a6]/40 hover:text-[#14b8a6] hover:bg-[#14b8a6]/10'
                          : 'hover:border-[#34d399]/40 hover:text-[#34d399] hover:bg-[#34d399]/10'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle Corner Glow with varying colors */}
              <div className={`absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 ${
                index % 3 === 0
                  ? 'bg-gradient-to-br from-[#06b6d4]/10 via-[#10b981]/5 to-transparent'
                  : index % 3 === 1
                  ? 'bg-gradient-to-br from-[#22d3ee]/10 via-[#14b8a6]/5 to-transparent'
                  : 'bg-gradient-to-br from-[#06b6d4]/10 via-[#34d399]/5 to-transparent'
              }`} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group interactive-card glass-glow rounded-2xl p-10 text-center border border-white/10 bg-[#0f1629]/90 backdrop-blur-xl relative overflow-hidden"
            >
              {/* Subtle Background Gradient with varying colors */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                index === 0
                  ? 'bg-gradient-to-br from-[#06b6d4]/5 via-[#10b981]/3 to-transparent'
                  : index === 1
                  ? 'bg-gradient-to-br from-[#22d3ee]/5 via-[#14b8a6]/3 to-transparent'
                  : 'bg-gradient-to-br from-[#06b6d4]/5 via-[#34d399]/3 to-transparent'
              }`} />
              
              <div className="relative z-10">
                <div className={`text-7xl font-bold mb-4 bg-clip-text text-transparent font-heading group-hover:scale-110 transition-transform duration-500 ${
                  index === 0
                    ? 'bg-gradient-to-r from-[#06b6d4] via-[#10b981] to-[#22d3ee]'
                    : index === 1
                    ? 'bg-gradient-to-r from-[#22d3ee] via-[#14b8a6] to-[#34d399]'
                    : 'bg-gradient-to-r from-[#06b6d4] via-[#34d399] to-[#67e8f9]'
                }`}>
                  {stat.number}
                </div>
                <div className="text-xl text-[#e2e8f0] font-semibold group-hover:text-white transition-colors">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
