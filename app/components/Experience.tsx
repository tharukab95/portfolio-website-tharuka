"use client";

import { useEffect, useRef, useState } from "react";

export default function Experience() {
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
      { threshold: 0.2 }
    );

    const items = sectionRef.current?.querySelectorAll('[data-index]');
    items?.forEach((item) => observer.observe(item));

    return () => {
      items?.forEach((item) => observer.unobserve(item));
    };
  }, []);

  const experiences = [
    {
      company: "IGT1Lanka & Sitecore",
      role: "Lead Software Engineer",
      period: "May 2025 - Present",
      achievements: [
        "Leading the Sitecore demo team in architecting and developing high-impact, interactive demo sites that effectively showcase platform capabilities and drive sales conversions.",
        "Designing and building engaging, production-quality demo experiences that empower the sales team to deliver compelling product demonstrations to potential customers.",
        "Collaborating closely with sales and product teams to understand customer needs and translate them into visually stunning, technically robust demo solutions.",
      ],
      technologies: ["Sitecore", "Next.js", "React", "TypeScript", ".NET", "C#", "Azure", "Git"],
    },
    {
      company: "Surge Global",
      role: "Senior Software Engineer",
      period: "May 2024 - May 2025",
      achievements: [
        "Collaborated directly with clients to guide them through technical decisions and required formalities.",
        "Acted as the emotional and technical backbone of the team during challenges, helping deliver a successful product and uphold the company's reputation.",
      ],
      technologies: ["Next.js", "Nest.js", "TypeScript", "Git", "AWS Services", "Terraform"],
    },
    {
      company: "Axinom & Sky Group UK",
      role: "Senior Software Engineer",
      period: "Sept 2022 - Mar 2024",
      achievements: [
        "Collaborated as an internal resource at both Axinom Pvt Ltd and Sky Group Limited, contributing to backend developments for Now TV.",
        "Gained practical experience in building, managing, and maintaining critical components for a leading OTT streaming service.",
        "Led pivotal efforts in periodically migrating infrastructure to newly established cloud environments with estimated potential cost savings of up to one-third.",
        "Spearheaded initiatives to streamline CI/CD pipeline, mitigating risks of release failures, and actively implemented improvements.",
        "Participated in on-call rotations to address production issues promptly and prioritize resolutions based on severity levels.",
      ],
      technologies: ["Node.js", "GraphQL", "TypeScript", "AWS Serverless", "Serverless Framework", "AWS CDK", "Concourse CI", "Jest"],
    },
    {
      company: "CodeGen International Sri Lanka",
      role: "Software Engineer",
      period: "Oct 2020 - July 2022",
      achievements: [
        "Developed encrypted video streaming service utilizing HLS protocol to securely deliver content to a broad audience while tracking individual user engagement metrics.",
      ],
      technologies: ["Angular", "Java", "FFmpeg", "Spring Boot", "MySQL", "GCP"],
    },
    {
      company: "DirectFN Sri Lanka",
      role: "Software Engineer Trainee",
      period: "Feb 2019 - Aug 2019",
      achievements: [
        "Contributed predominantly to backend server developments facilitating algorithmic trading within stock market brokerage applications.",
        "Engineered an algorithm utilizing the 'AKKA' toolkit to elect leaders within distributed backend server clusters, ensuring service consistency.",
        "Designed and implemented database management systems from the ground up, incorporating comprehensive testing and support for multiple databases.",
      ],
      technologies: ["Java", "AKKA", "State machines", "Oracle", "MySQL", "H2"],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f1629] via-[#0a0e27] to-[#050812] overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,217,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#0ea5e9]/10 via-[#38bdf8]/6 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#0284c7]/8 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#0ea5e9]/30 bg-gradient-to-r from-[#0ea5e9]/10 via-[#38bdf8]/8 to-transparent">
              <span className="w-2 h-2 bg-[#0ea5e9] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#0ea5e9] tracking-widest uppercase font-heading">Experience</span>
              <span className="w-2 h-2 bg-[#38bdf8] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Professional</span>
            <span className="block text-gradient">Journey</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#0ea5e9] via-[#38bdf8] to-transparent mx-auto animate-gradient rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#00d9ff]/40 via-[#00b8d4]/30 to-[#0099cc]/20 hidden lg:block opacity-50" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative pl-0 lg:pl-24 transition-all duration-1000 ${visibleItems.has(index)
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 -translate-x-10'
                  }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Timeline Dot with varying colors */}
                <div className={`absolute left-6 top-8 w-4 h-4 rounded-full border-4 border-[#050812] shadow-xl hidden lg:block z-10 animate-glow-pulse ${index % 2 === 0
                  ? 'bg-gradient-to-br from-[#0ea5e9] to-[#6366f1]'
                  : 'bg-gradient-to-br from-[#38bdf8] to-[#818cf8]'
                  }`} />

                {/* Experience Card */}
                <div className="group interactive-card glass-glow rounded-2xl p-8 border border-white/10 bg-[#0f1629]/90 backdrop-blur-xl overflow-hidden relative">
                  {/* Subtle Background Gradient with alternating colors */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${index % 2 === 0
                    ? 'bg-gradient-to-br from-[#0ea5e9]/5 via-[#6366f1]/3 to-transparent'
                    : 'bg-gradient-to-br from-[#38bdf8]/5 via-[#818cf8]/3 to-transparent'
                    }`} />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 pb-6 border-b border-white/10">
                      <div className="flex-1 mb-4 sm:mb-0">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-2 h-2 rounded-full animate-pulse-subtle ${index % 2 === 0
                            ? 'bg-gradient-to-br from-[#0ea5e9] to-[#6366f1]'
                            : 'bg-gradient-to-br from-[#38bdf8] to-[#818cf8]'
                            }`} />
                          <h3 className={`text-3xl font-bold text-white font-heading transition-colors duration-500 ${index % 2 === 0 ? 'group-hover:text-[#0ea5e9]' : 'group-hover:text-[#818cf8]'
                            }`}>
                            {exp.role}
                          </h3>
                        </div>
                        <p className={`text-2xl font-semibold pl-5 font-heading ${index % 2 === 0 ? 'text-[#0ea5e9]' : 'text-[#818cf8]'
                          }`}>
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-lg text-[#cbd5e1] font-semibold whitespace-nowrap sm:ml-4 px-4 py-2 glass rounded-xl border border-white/10">
                        {exp.period}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-4 mb-8 pl-5">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-lg text-[#e2e8f0] leading-relaxed flex items-start group/item font-normal">
                          <span className={`mr-4 mt-1.5 text-xl font-bold ${index % 2 === 0 ? 'text-[#0ea5e9]' : 'text-[#818cf8]'
                            }`}>▸</span>
                          <span className="group-hover/item:text-white transition-colors">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10 pl-5">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className={`skill-tag px-4 py-2 glass border border-white/15 text-[#e2e8f0] rounded-xl text-sm font-semibold transition-all duration-300 cursor-default ${index % 2 === 0
                            ? 'hover:border-[#0ea5e9]/40 hover:text-[#0ea5e9] hover:bg-[#0ea5e9]/10'
                            : 'hover:border-[#818cf8]/40 hover:text-[#818cf8] hover:bg-[#818cf8]/10'
                            }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Subtle Corner Glow */}
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#00d9ff]/10 to-transparent opacity-0 group-hover:opacity-100 blur-3xl transition-opacity duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
