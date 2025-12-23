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
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      title: "Payment Platform (Multi-Gateway)",
      description: "Built a payment platform from scratch, integrating multiple gateways to handle transactions across various products/services, adhering to OAuth 2.0 standards.",
      role: "Lead Developer",
      technologies: ["ReactJS", "Next.js", "Node.js", "Express", "Stripe", "Global Payments", "ComBank", "GCP", "MongoDB"],
      impact: "Enabled seamless payment processing across multiple products and services",
      gradient: "from-purple-500 to-pink-600",
    },
    {
      title: "Online Grocery Retailing System",
      description: "Architected and led the development of an online grocery retailing system, encompassing customer, rider, and merchant interfaces, along with deployment setup.",
      role: "Lead Architect & Developer",
      technologies: ["Flutter", "ReactJS", "Next.js", "Node.js", "Express", "Firebase", "AWS", "GCP", "MongoDB", "Google Maps Platform"],
      impact: "Complete end-to-end solution serving multiple user types",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      title: "Cost-Effective Monitoring Architecture",
      description: "Designed a cost-effective monitoring architecture, utilizing Grafana, Prometheus, Loki, and Docker to present role-based dashboards, reducing server costs.",
      role: "Architect",
      technologies: ["Grafana", "Prometheus", "Loki", "Docker", "GCP"],
      impact: "Significant reduction in server costs through optimized monitoring",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Monolithic Project Management with Nx",
      description: "Introduced monolithic project management approach, enabling scalable projects with reusable components using Nx.",
      role: "Technical Lead",
      technologies: ["Nx", "Angular", "Express"],
      impact: "Improved scalability and code reusability across projects",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      title: "Encrypted HLS Video Streaming Platform",
      description: "Developed encrypted video streaming service utilizing HLS protocol to securely deliver content to a broad audience while tracking individual user engagement metrics.",
      role: "Software Engineer",
      technologies: ["Angular", "Java", "FFmpeg", "Spring Boot", "MySQL", "GCP"],
      impact: "Secure content delivery with comprehensive user analytics",
      gradient: "from-teal-500 to-cyan-600",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="projects" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 glass rounded-full mb-4">
            <span className="text-sm font-medium text-purple-400">Projects</span>
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
            <span className="text-white">Featured </span>
            <span className="text-gradient">Work</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-index={index}
              className={`glass rounded-2xl p-6 hover-lift group overflow-hidden transition-all duration-1000 ${
                visibleItems.has(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              <div className="relative z-10">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 bg-gradient-to-r ${project.gradient} text-white rounded-full text-xs font-semibold mb-3`}>
                    {project.role}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 leading-relaxed mb-4 text-sm">
                  {project.description}
                </p>
                
                {project.impact && (
                  <div className="mb-4 p-3 glass border-l-4 border-cyan-500 rounded-r-lg">
                    <p className="text-xs text-slate-300 italic">
                      {project.impact}
                    </p>
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 pt-4 border-t border-white/10">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 glass border border-white/10 text-slate-300 rounded-lg text-xs font-medium hover:border-cyan-500/50 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
