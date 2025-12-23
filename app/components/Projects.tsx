export default function Projects() {
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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-16 text-center">
          Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-100 flex flex-col"
            >
              <div className="mb-4">
                <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                  {project.role}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                {project.title}
              </h3>
              
              <p className="text-slate-700 leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>
              
              {project.impact && (
                <p className="text-sm text-slate-600 italic mb-4 border-l-4 border-teal-500 pl-3">
                  {project.impact}
                </p>
              )}
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                  >
                    {tech}
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

