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
      gradient: "from-[#00d9ff] to-[#33e0ff]",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
    },
    {
      category: "Frontend",
      skills: ["Next.js", "React", "Angular", "Flutter"],
      gradient: "from-[#a855f7] to-[#c084fc]",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      category: "Backend",
      skills: ["NestJS", "GraphQL", "Spring Boot", "Express", "REST APIs"],
      gradient: "from-[#10b981] to-[#34d399]",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      ),
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Terraform", "Serverless Framework", "AWS CDK", "Docker"],
      gradient: "from-[#00d9ff] to-[#a855f7]",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1A9 9 0 105.6 19.7 1 1 0 103.14 18l2.7-2.3A1 1 0 005.6 15.1a7 7 0 1110.2-2.1 5 5 0 105.1 7.1h-.1a4 4 0 10-3.7-5.6l-2.7 2.3z" />
        </svg>
      ),
    },
    {
      category: "Monitoring & Tools",
      skills: ["Grafana", "Prometheus", "Loki", "Concourse CI", "Jest", "Git"],
      gradient: "from-[#a855f7] to-[#10b981]",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Oracle", "H2"],
      gradient: "from-[#10b981] to-[#00d9ff]",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
        </svg>
      ),
    },
  ];

  const stats = [
    { number: "5+", label: "Years Experience", gradient: "from-[#00d9ff] to-[#33e0ff]" },
    { number: "20+", label: "Technologies", gradient: "from-[#a855f7] to-[#c084fc]" },
    { number: "10+", label: "Projects", gradient: "from-[#10b981] to-[#34d399]" },
  ];

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050812] via-[#0a0e27] to-[#0f1629] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#a855f7]/15 via-[#00d9ff]/10 to-transparent rounded-full blur-3xl animate-float-3d opacity-60" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-[#10b981]/12 to-transparent rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#a855f7]/40 bg-gradient-to-r from-[#a855f7]/15 via-[#00d9ff]/10 to-transparent">
              <span className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#a855f7] tracking-widest uppercase font-heading">Skills & Technologies</span>
              <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Technical</span>
            <span className="block text-gradient">Expertise</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#00d9ff] via-[#a855f7] to-transparent mx-auto animate-gradient rounded-full" />
        </div>
        
        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              data-category-index={index}
              className={`group interactive-card glass-glow rounded-2xl p-8 border-2 border-white/10 bg-[#0f1629]/90 backdrop-blur-xl overflow-hidden relative ${
                visibleCategories.has(index)
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-10 scale-95'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/10">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${category.gradient} flex items-center justify-center text-white shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden`}>
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    <div className="relative z-10">
                      {category.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d9ff] group-hover:to-[#a855f7] transition-all duration-500">
                    {category.category}
                  </h3>
                </div>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="skill-tag px-4 py-2 glass border border-white/20 text-[#e2e8f0] rounded-xl text-sm font-semibold hover:border-[#00d9ff]/50 hover:text-[#00d9ff] hover:bg-[#00d9ff]/10 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} style={{ transitionDelay: '600ms' }}>
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group interactive-card glass-glow rounded-2xl p-10 text-center border-2 border-white/10 bg-[#0f1629]/90 backdrop-blur-xl relative overflow-hidden"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                <div className={`text-7xl font-bold mb-4 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent font-heading group-hover:scale-110 transition-transform duration-500`}>
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
