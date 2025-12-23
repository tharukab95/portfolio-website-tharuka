export default function Skills() {
  const skillCategories = [
    {
      category: "Languages",
      skills: ["TypeScript", "Java", "C++", "Node.js", "JavaScript"],
    },
    {
      category: "Frontend",
      skills: ["Next.js", "React", "Angular", "Flutter"],
    },
    {
      category: "Backend",
      skills: ["NestJS", "GraphQL", "Spring Boot", "Express", "REST APIs"],
    },
    {
      category: "Cloud & DevOps",
      skills: ["AWS", "GCP", "Terraform", "Serverless Framework", "AWS CDK", "Docker"],
    },
    {
      category: "Monitoring & Tools",
      skills: ["Grafana", "Prometheus", "Loki", "Concourse CI", "Jest", "Git"],
    },
    {
      category: "Databases",
      skills: ["MySQL", "MongoDB", "Oracle", "H2"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-16 text-center">
          Skills & Technologies
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-6 border border-slate-100 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4 pb-2 border-b border-slate-200">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

