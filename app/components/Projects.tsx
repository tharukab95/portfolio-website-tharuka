"use client";

import { useEffect, useRef, useState } from "react";

export default function Projects() {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const projects = [
    {
      title: "SwarmLib - Programming Framework for Robot Swarms",
      description: "Contributed to designing the behavioral architecture and implementing lower-level behaviors. Developed an algorithm for advanced global behavior, facilitating swarm aggregation.",
      role: "Final Year Project",
      technologies: ["C++", "Java"],
      impact: "Published research papers and won Best Paper award at MERCon 2020",
    },
    {
      title: "Payment Platform (Multi-Gateway)",
      description: "Built a payment platform from scratch, integrating multiple gateways to handle transactions across various products/services, adhering to OAuth 2.0 standards.",
      role: "Lead Developer",
      technologies: ["ReactJS", "Next.js", "Node.js", "Express", "Stripe", "Global Payments", "ComBank", "GCP", "MongoDB"],
      impact: "Enabled seamless payment processing across multiple products and services",
    },
    {
      title: "Online Grocery Retailing System",
      description: "Architected and led the development of an online grocery retailing system, encompassing customer, rider, and merchant interfaces, along with deployment setup.",
      role: "Lead Architect & Developer",
      technologies: ["Flutter", "ReactJS", "Next.js", "Node.js", "Express", "Firebase", "AWS", "GCP", "MongoDB", "Google Maps Platform"],
      impact: "Complete end-to-end solution serving multiple user types",
    },
    {
      title: "Cost-Effective Monitoring Architecture",
      description: "Designed a cost-effective monitoring architecture, utilizing Grafana, Prometheus, Loki, and Docker to present role-based dashboards, reducing server costs.",
      role: "Architect",
      technologies: ["Grafana", "Prometheus", "Loki", "Docker", "GCP"],
      impact: "Significant reduction in server costs through optimized monitoring",
    },
    {
      title: "Monolithic Project Management with Nx",
      description: "Introduced monolithic project management approach, enabling scalable projects with reusable components using Nx.",
      role: "Technical Lead",
      technologies: ["Nx", "Angular", "Express"],
      impact: "Improved scalability and code reusability across projects",
    },
    {
      title: "Encrypted HLS Video Streaming Platform",
      description: "Developed encrypted video streaming service utilizing HLS protocol to securely deliver content to a broad audience while tracking individual user engagement metrics.",
      role: "Software Engineer",
      technologies: ["Angular", "Java", "FFmpeg", "Spring Boot", "MySQL", "GCP"],
      impact: "Secure content delivery with comprehensive user analytics",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1629] via-[#0a0e27] to-[#050812] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-[#3b82f6]/12 via-[#60a5fa]/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-[#2563eb]/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#3b82f6]/30 bg-gradient-to-r from-[#3b82f6]/10 via-[#60a5fa]/8 to-transparent">
              <span className="w-2 h-2 bg-[#3b82f6] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#3b82f6] tracking-widest uppercase font-heading">Projects</span>
              <span className="w-2 h-2 bg-[#60a5fa] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Featured</span>
            <span className="block text-gradient">Work</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#3b82f6] via-[#60a5fa] to-transparent mx-auto animate-gradient rounded-full" />
        </div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`group interactive-card glass-glow rounded-2xl p-8 border border-white/10 bg-[#0f1629]/90 backdrop-blur-xl overflow-hidden relative h-full flex flex-col ${
                visibleItems.has(index)
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
                  ? 'bg-gradient-to-br from-[#3b82f6]/5 via-[#8b5cf6]/3 to-transparent'
                  : index % 3 === 1
                  ? 'bg-gradient-to-br from-[#60a5fa]/5 via-[#a78bfa]/3 to-transparent'
                  : 'bg-gradient-to-br from-[#3b82f6]/5 via-[#6366f1]/3 to-transparent'
              }`} />
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Role Badge */}
                <div className="mb-6">
                  <span className={`inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-bold text-white shadow-lg border border-white/30 font-heading backdrop-blur-sm ${
                    index % 3 === 0
                      ? 'bg-gradient-to-r from-[#3b82f6] via-[#8b5cf6] to-[#a78bfa]'
                      : index % 3 === 1
                      ? 'bg-gradient-to-r from-[#60a5fa] via-[#a78bfa] to-[#c4b5fd]'
                      : 'bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#818cf8]'
                  }`}>
                    {project.role}
                  </span>
                </div>
                
                {/* Title */}
                <h3 className={`text-xl font-bold text-white mb-3 font-heading transition-colors duration-500 ${
                  index % 3 === 0 ? 'group-hover:text-[#3b82f6]' 
                  : index % 3 === 1 ? 'group-hover:text-[#a78bfa]'
                  : 'group-hover:text-[#818cf8]'
                }`}>
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-[#e2e8f0] leading-relaxed mb-4 text-sm font-normal flex-grow group-hover:text-white transition-colors">
                  {project.description}
                </p>
                
                {/* Impact */}
                {project.impact && (
                  <div className={`mb-6 p-4 glass border-l-4 rounded-xl ${
                    index % 3 === 0
                      ? 'border-[#3b82f6]/40 bg-[#3b82f6]/5'
                      : index % 3 === 1
                      ? 'border-[#a78bfa]/40 bg-[#a78bfa]/5'
                      : 'border-[#818cf8]/40 bg-[#818cf8]/5'
                  }`}>
                    <p className="text-xs text-[#cbd5e1] italic font-normal">
                      {project.impact}
                    </p>
                  </div>
                )}
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10 mt-auto">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`skill-tag px-3 py-1.5 glass border border-white/15 text-[#e2e8f0] rounded-lg text-xs font-semibold transition-all duration-300 cursor-default ${
                        index % 3 === 0
                          ? 'hover:border-[#3b82f6]/40 hover:text-[#3b82f6] hover:bg-[#3b82f6]/10'
                          : index % 3 === 1
                          ? 'hover:border-[#a78bfa]/40 hover:text-[#a78bfa] hover:bg-[#a78bfa]/10'
                          : 'hover:border-[#818cf8]/40 hover:text-[#818cf8] hover:bg-[#818cf8]/10'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Subtle Corner Glow with varying colors */}
              <div className={`absolute top-0 right-0 w-40 h-40 opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500 ${
                index % 3 === 0
                  ? 'bg-gradient-to-br from-[#3b82f6]/10 via-[#8b5cf6]/5 to-transparent'
                  : index % 3 === 1
                  ? 'bg-gradient-to-br from-[#60a5fa]/10 via-[#a78bfa]/5 to-transparent'
                  : 'bg-gradient-to-br from-[#3b82f6]/10 via-[#6366f1]/5 to-transparent'
              }`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
