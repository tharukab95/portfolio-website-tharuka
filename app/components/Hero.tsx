import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto w-full pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight">
                <span className="block">Tharuka</span>
                <span className="block bg-gradient-to-r from-slate-900 via-blue-900 to-teal-600 bg-clip-text text-transparent">
                  Bandara
                </span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-700">
                Senior Software Engineer
              </h2>
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Engineering Scalable Systems with Precision & Purpose
              </p>
            </div>
            
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Building mission-critical systems for leading OTT platforms, 
              architecting cloud infrastructure, and delivering solutions that 
              scale. Passionate about clean code, distributed systems, and 
              collaborative engineering.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="#projects"
                className="px-8 py-4 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-center"
              >
                View Projects
              </Link>
              <Link
                href="/Tharuka_Bandara_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg font-medium hover:bg-slate-900 hover:text-white transition-all duration-300 text-center"
              >
                Download CV
              </Link>
            </div>
          </div>

          <div className="relative lg:justify-self-end animate-fade-in-delay">
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-teal-200 rounded-3xl transform rotate-6 opacity-20 blur-2xl"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/profile_photo_tharuka.jpg"
                  alt="Tharuka Bandara"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 320px, 384px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

