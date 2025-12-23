export default function Publications() {
  const publications = [
    {
      title: "A Programming Framework for Robot Swarms",
      authors: "T.Bandara, M.Bandara, N.Adhikari, R.Ragel, I.Nawinne",
      venue: "MERCon 2020 International Multidisciplinary Engineering Research Conference",
      award: "Best Paper - Robotics and Intelligent Systems Track",
      link: "https://ieeexplore.ieee.org/document/9185206",
      year: "2020",
    },
    {
      title: "SwarmLib: Programming Framework for Swarm Robotics",
      authors: "T.Bandara, M.Bandara, N.Adhikari, R.Ragel, I.Nawinne",
      venue: "ESCaPe 2020 Project Symposium",
      link: "https://bit.ly/ESCaPe2020_Proceedings",
      year: "2020",
    },
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-16 text-center">
          Research & Publications
        </h2>
        
        <div className="space-y-8">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-100"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-slate-700 mb-2">
                    <span className="font-semibold">Authors:</span> {pub.authors}
                  </p>
                  <p className="text-slate-600 mb-2">
                    <span className="font-semibold">Venue:</span> {pub.venue}
                  </p>
                  {pub.award && (
                    <div className="inline-block mt-3 px-4 py-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 rounded-lg font-semibold text-sm shadow-md">
                      🏆 {pub.award}
                    </div>
                  )}
                </div>
                <span className="text-slate-500 font-medium text-sm whitespace-nowrap ml-4">
                  {pub.year}
                </span>
              </div>
              
              <a
                href={pub.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
              >
                View Publication
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

