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
      color: "from-emerald-500 to-teal-600",
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
      color: "from-cyan-500 to-blue-600",
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
      color: "from-purple-500 to-pink-600",
    },
    {
      company: "CodeGen International Sri Lanka",
      role: "Software Engineer",
      period: "Oct 2020 - July 2022",
      achievements: [
        "Developed encrypted video streaming service utilizing HLS protocol to securely deliver content to a broad audience while tracking individual user engagement metrics.",
      ],
      technologies: ["Angular", "Java", "FFmpeg", "Spring Boot", "MySQL", "GCP"],
      color: "from-blue-500 to-cyan-600",
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
      color: "from-pink-500 to-rose-600",
    },
  ];

  return (
    <section 
      ref={sectionRef}
      id="experience" 
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-900 to-slate-950 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 glass rounded-full mb-4">
            <span className="text-sm font-medium text-purple-400">Experience</span>
          </span>
          <h2 className="text-5xl sm:text-6xl font-extrabold mb-4">
            <span className="text-white">Professional </span>
            <span className="text-gradient">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full" />
        </div>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-500 via-cyan-500 to-pink-500 hidden lg:block rounded-full" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                data-index={index}
                className={`relative pl-0 lg:pl-24 transition-all duration-1000 ${
                  visibleItems.has(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 -translate-x-10'
                }`}
              >
                {/* Timeline Dot */}
                <div className={`absolute left-6 top-6 w-6 h-6 bg-gradient-to-br ${exp.color} rounded-full border-4 border-slate-950 shadow-lg glow-effect hidden lg:block z-10`} />
                
                {/* Card */}
                <div className="glass rounded-2xl p-8 hover-lift group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`w-3 h-3 bg-gradient-to-br ${exp.color} rounded-full`} />
                        <h3 className="text-2xl font-bold text-white">
                          {exp.role}
                        </h3>
                      </div>
                      <p className={`text-xl font-semibold bg-gradient-to-r ${exp.color} bg-clip-text text-transparent mb-2`}>
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-slate-400 font-medium text-sm sm:text-base whitespace-nowrap sm:ml-4 mt-2 sm:mt-0">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-slate-300 leading-relaxed flex items-start group/item">
                        <span className={`text-transparent bg-gradient-to-br ${exp.color} bg-clip-text mr-3 mt-1.5 font-bold`}>▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`px-4 py-2 glass border border-white/10 text-slate-300 rounded-lg text-sm font-medium hover:bg-gradient-to-r ${exp.color} hover:text-white transition-all duration-300 cursor-default`}
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
      </div>
    </section>
  );
}
