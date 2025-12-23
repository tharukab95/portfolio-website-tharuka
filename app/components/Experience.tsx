export default function Experience() {
  const experiences = [
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
        "Led pivotal efforts in periodically migrating infrastructure to newly established cloud environments with estimated potential cost savings of up to one-third through effective communication and collaboration with various teams at Sky.",
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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-16 text-center">
          Work Experience
        </h2>
        
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-200 via-teal-200 to-blue-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-0 md:pl-24">
                <div className="absolute left-6 md:left-6 top-2 w-4 h-4 bg-slate-900 rounded-full border-4 border-white shadow-lg hidden md:block"></div>
                
                <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-slate-100">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-xl text-slate-700 font-semibold mb-2">
                        {exp.company}
                      </p>
                    </div>
                    <span className="text-slate-600 font-medium text-sm sm:text-base whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-slate-700 leading-relaxed flex items-start">
                        <span className="text-teal-600 mr-3 mt-1.5">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium"
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

