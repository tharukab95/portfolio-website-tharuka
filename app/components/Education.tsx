export default function Education() {
  const education = [
    {
      degree: "Masters in Computer Science (Partial)",
      institution: "School of Computing, University of Colombo",
      location: "Sri Lanka",
      details: [],
    },
    {
      degree: "BSc(Eng) in Computer Engineering",
      institution: "Faculty of Engineering, University of Peradeniya",
      location: "Sri Lanka",
      details: ["GPA: 3.55/4.00"],
    },
    {
      degree: "G.C.E Advanced Level",
      institution: "Ananda College",
      location: "Colombo 10, Sri Lanka",
      period: "2005 - 2013",
      details: ["G.C.E A/L: 1A 2B", "G.C.E O/L: 8A 1C"],
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-16 text-center">
          Education
        </h2>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-lg text-slate-700 font-semibold mb-1">
                    {edu.institution}
                  </p>
                  <p className="text-slate-600">{edu.location}</p>
                </div>
                {edu.period && (
                  <span className="text-slate-600 font-medium text-sm sm:text-base whitespace-nowrap mt-2 sm:mt-0 sm:ml-4">
                    {edu.period}
                  </span>
                )}
              </div>
              
              {edu.details.length > 0 && (
                <div className="pt-4 border-t border-slate-100">
                  <ul className="space-y-2">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-slate-700 flex items-center">
                        <span className="text-teal-600 mr-3">▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

