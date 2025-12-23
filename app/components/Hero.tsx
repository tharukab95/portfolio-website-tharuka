"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 40,
        y: (e.clientY / window.innerHeight - 0.5) * 40,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-[#050812] via-[#0a0e27] to-[#0f1629]">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Gradient Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-[#00d9ff]/20 via-[#a855f7]/10 to-transparent rounded-full blur-3xl animate-float-3d opacity-60"
          style={{
            transform: `translate(${mousePosition.x * 0.2}px, ${mousePosition.y * 0.2}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-[700px] h-[700px] bg-gradient-to-br from-[#a855f7]/15 via-[#10b981]/10 to-transparent rounded-full blur-3xl animate-float opacity-50"
          style={{
            animationDelay: '2s',
            transform: `translate(${-mousePosition.x * 0.15}px, ${-mousePosition.y * 0.15}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#10b981]/12 via-[#00d9ff]/8 to-transparent rounded-full blur-3xl animate-float opacity-40"
          style={{
            animationDelay: '1s',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Animated Grid Pattern */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-50"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            transition: 'transform 0.5s ease-out',
          }}
        />

        {/* Radial Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#050812]/40 to-[#050812]" />

        {/* Animated Shimmer Effect */}
        <div className="absolute inset-0 animate-shimmer pointer-events-none" />
      </div>

      <div className="relative max-w-7xl mx-auto w-full pt-32 pb-20 z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className={`space-y-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-6">
              <div className="inline-block px-6 py-3 glass-glow rounded-full mb-2 border border-[#00d9ff]/30 bg-gradient-to-r from-[#00d9ff]/10 via-[#a855f7]/5 to-transparent hover:border-[#a855f7]/50 transition-all duration-500">
                <span className="text-sm font-medium text-[#00d9ff] tracking-wide font-heading">LEAD SOFTWARE ENGINEER</span>
              </div>

              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight font-heading">
                <span className={`block text-white/90 font-light transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  Hi, I&apos;m
                </span>
                <span className={`block text-gradient font-light mt-2 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  Tharuka
                </span>
                <span className={`block text-gradient font-light transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                  Bandara
                </span>
              </h1>

              <div className={`space-y-4 pt-4 transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="h-px w-32 bg-gradient-to-r from-[#00d9ff] via-[#a855f7] to-[#10b981] animate-gradient" />
                <p className="text-xl sm:text-2xl text-[#cbd5e1] font-light leading-relaxed max-w-2xl">
                  Crafting exceptional digital experiences through elegant code and thoughtful architecture
                </p>
              </div>
            </div>

            <p className={`text-lg text-[#94a3b8] max-w-xl leading-relaxed font-light transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Building mission-critical systems for leading platforms, architecting scalable infrastructure,
              and delivering solutions that stand the test of time.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 pt-6 transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Link
                href="#projects"
                className="group relative px-10 py-4 bg-gradient-to-r from-[#3b82f6] via-[#6366f1] to-[#8b5cf6] text-white rounded-xl font-medium overflow-hidden transition-all duration-500 hover:scale-[1.05] shadow-lg hover:shadow-xl hover:shadow-[#6366f1]/40 animate-gradient"
              >
                <span className="relative z-10 flex items-center gap-3 tracking-wide font-heading">
                  View Projects
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#3b82f6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>

              <Link
                href="/Tharuka_Bandara_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-10 py-4 glass-glow border border-[#00d9ff]/20 text-white rounded-xl font-medium hover:border-[#a855f7]/50 transition-all duration-500 flex items-center justify-center gap-3 tracking-wide hover:bg-[#00d9ff]/5 font-heading"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </Link>
            </div>

            {/* Social Links */}
            <div className={`flex gap-4 pt-4 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a
                href="https://www.linkedin.com/in/tharuka-bandara"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-glow rounded-xl flex items-center justify-center hover:bg-[#00d9ff]/10 hover:border-[#00d9ff]/50 transition-all duration-300 border border-[#00d9ff]/20 hover:scale-110 hover:rotate-3 group"
                aria-label="LinkedIn"
              >
                <svg className="w-6 h-6 text-[#00d9ff] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://github.com/tharukab95"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 glass-glow rounded-xl flex items-center justify-center hover:bg-[#a855f7]/10 hover:border-[#a855f7]/50 transition-all duration-300 border border-[#a855f7]/20 hover:scale-110 hover:-rotate-3 group"
                aria-label="GitHub"
              >
                <svg className="w-6 h-6 text-[#a855f7] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image - Seamlessly Integrated with Hero Background */}
          <div className={`relative lg:justify-self-end transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-10 scale-95'}`}>
            <div
              className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[420px] lg:h-[420px] mx-auto lg:mx-0"
              style={{
                transform: `translate(${mousePosition.x * 0.15}px, ${mousePosition.y * 0.15}px) rotateY(${mousePosition.x * 0.05}deg)`,
                transition: 'transform 0.2s ease-out',
              }}
            >
              {/* Animated Border Glow - Matching Hero Gradient */}
              <div className="absolute -inset-3 bg-gradient-to-br from-[#00d9ff]/40 via-[#a855f7]/30 to-[#10b981]/30 rounded-3xl blur-2xl animate-glow-pulse opacity-70" />
              <div className="absolute -inset-1.5 bg-gradient-to-br from-[#00d9ff]/20 via-[#a855f7]/15 to-[#10b981]/20 rounded-3xl blur-xl animate-gradient opacity-50" />

              {/* Image Container with Matching Gradient Overlay */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden glass-glow border-2 border-[#00d9ff]/30 group cursor-pointer">
                {/* Multi-layer Gradient Overlay Matching Hero Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/25 via-[#a855f7]/20 to-[#10b981]/25 opacity-70 group-hover:opacity-90 transition-opacity duration-700 z-10 mix-blend-soft-light" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050812]/60 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#00d9ff]/10 via-transparent to-[#10b981]/10 z-10 group-hover:opacity-100 opacity-0 transition-opacity duration-700" />

                {/* Animated Shimmer Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 z-10" />

                <Image
                  src="/images/profile_photo_tharuka.png"
                  alt="Tharuka Bandara"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 z-0"
                  priority
                  sizes="(max-width: 768px) 320px, (max-width: 1024px) 384px, 420px"
                />
              </div>

              {/* Decorative Floating Elements */}
              <div className="absolute -top-8 -right-8 w-20 h-20 border-2 border-[#00d9ff]/30 rotate-45 animate-float-3d rounded-xl opacity-60" style={{ animationDelay: '1s' }} />
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-2 border-[#a855f7]/30 -rotate-45 animate-float-3d rounded-xl opacity-60" style={{ animationDelay: '2s' }} />
              <div className="absolute top-1/2 -right-12 w-12 h-12 border-2 border-[#10b981]/30 rotate-12 animate-float rounded-lg opacity-50" style={{ animationDelay: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-[#64748b] tracking-widest uppercase font-light font-heading">Scroll</span>
          <svg className="w-5 h-5 text-[#00d9ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}
