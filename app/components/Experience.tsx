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
      gradient: "from-[#00d9ff] to-[#33e0ff]",
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
      gradient: "from-[#a855f7] to-[#c084fc]",
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
      gradient: "from-[#10b981] to-[#34d399]",
    },
    {
      company: "CodeGen International Sri Lanka",
      role: "Software Engineer",
      period: "Oct 2020 - July 2022",
      achievements: [
        "Developed encrypted video streaming service utilizing HLS protocol to securely deliver content to a broad audience while tracking individual user engagement metrics.",
      ],
      technologies: ["Angular", "Java", "FFmpeg", "Spring Boot", "MySQL", "GCP"],
      gradient: "from-[#00d9ff] to-[#a855f7]",
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
      gradient: "from-[#a855f7] to-[#10b981]",
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#00d9ff]/12 via-[#a855f7]/8 to-transparent rounded-full blur-3xl animate-float" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-[#10b981]/10 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#00d9ff]/40 bg-gradient-to-r from-[#00d9ff]/15 via-[#a855f7]/10 to-transparent">
              <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#00d9ff] tracking-widest uppercase font-heading">Experience</span>
              <span className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Professional</span>
            <span className="block text-gradient">Journey</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#00d9ff] via-[#a855f7] to-transparent mx-auto animate-gradient rounded-full" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#00d9ff] via-[#a855f7] to-[#10b981] hidden lg:block opacity-30 animate-gradient" />

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
                {/* Timeline Dot */}
                <div className={`absolute left-6 top-8 w-5 h-5 bg-gradient-to-br ${exp.gradient} rounded-full border-4 border-[#050812] shadow-xl hidden lg:block z-10 animate-glow-pulse`} />

                {/* Experience Card */}
                <div className="group interactive-card glass-glow rounded-2xl p-8 border-2 border-white/10 bg-[#0f1629]/90 backdrop-blur-xl overflow-hidden relative">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6 pb-6 border-b border-white/10">
                      <div className="flex-1 mb-4 sm:mb-0">
                        <div className="flex items-center gap-3 mb-3">
                          <div className={`w-3 h-3 bg-gradient-to-br ${exp.gradient} rounded-full animate-pulse-subtle`} />
                          <h3 className="text-3xl font-bold text-white font-heading group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d9ff] group-hover:to-[#a855f7] transition-all duration-500">
                            {exp.role}
                          </h3>
                        </div>
                        <p className={`text-2xl font-semibold bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent pl-6 font-heading`}>
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-lg text-[#cbd5e1] font-semibold whitespace-nowrap sm:ml-4 px-4 py-2 glass rounded-lg border border-white/10">
                        {exp.period}
                      </span>
                    </div>

                    {/* Achievements */}
                    <ul className="space-y-4 mb-8 pl-6">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-lg text-[#e2e8f0] leading-relaxed flex items-start group/item font-normal">
                          <span className={`text-2xl mr-4 mt-1 bg-gradient-to-r ${exp.gradient} bg-clip-text text-transparent font-bold`}>▸</span>
                          <span className="group-hover/item:text-white transition-colors">{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-3 pt-6 border-t border-white/10 pl-6">
                      {exp.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="skill-tag px-5 py-2 glass border border-white/20 text-[#e2e8f0] rounded-xl text-sm font-semibold hover:border-[#00d9ff]/50 hover:text-[#00d9ff] hover:bg-[#00d9ff]/10 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${exp.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
