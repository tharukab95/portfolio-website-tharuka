"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#050812] via-[#0a0e27] to-[#0f1629] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,217,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(168,85,247,0.03)_1px,transparent_1px)] bg-[size:80px_80px] opacity-40" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#00d9ff]/8 via-[#a855f7]/5 to-transparent rounded-full blur-3xl animate-float" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#10b981]/6 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-6xl mx-auto z-10">
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-3 px-6 py-3 glass-glow rounded-full border border-[#00d9ff]/40 bg-gradient-to-r from-[#00d9ff]/15 via-[#a855f7]/10 to-transparent">
              <span className="w-2 h-2 bg-[#00d9ff] rounded-full animate-pulse-subtle" />
              <span className="text-sm font-semibold text-[#00d9ff] tracking-widest uppercase font-heading">Get In Touch</span>
              <span className="w-2 h-2 bg-[#a855f7] rounded-full animate-pulse-subtle" style={{ animationDelay: '0.5s' }} />
            </span>
          </div>
          <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold mb-8 tracking-tight font-heading">
            <span className="block text-white mb-2">Let&apos;s</span>
            <span className="block text-gradient">Connect</span>
          </h2>
          <div className="w-40 h-1 bg-gradient-to-r from-transparent via-[#00d9ff] via-[#a855f7] to-transparent mx-auto animate-gradient rounded-full" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 font-heading">
                Contact Information
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:tharukabandara95@gmail.com"
                  className="flex items-center gap-4 glass-glow rounded-xl p-4 hover-lift group border border-[#00d9ff]/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#00d9ff]/20 to-[#00d9ff]/10 rounded-xl flex items-center justify-center border border-[#00d9ff]/30 group-hover:border-[#a855f7]/50 transition-colors">
                    <svg className="w-6 h-6 text-[#00d9ff] group-hover:text-[#a855f7] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#64748b] font-semibold uppercase tracking-wide">Email</div>
                    <div className="text-xl text-white font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#00d9ff] group-hover:to-[#33e0ff] transition-all duration-300">tharukabandara95@gmail.com</div>
                  </div>
                </a>
                
                <a
                  href="tel:+94777102824"
                  className="flex items-center gap-4 glass-glow rounded-xl p-4 hover-lift group border border-[#a855f7]/20"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#a855f7]/20 to-[#a855f7]/10 rounded-xl flex items-center justify-center border border-[#a855f7]/30 group-hover:border-[#10b981]/50 transition-colors">
                    <svg className="w-6 h-6 text-[#a855f7] group-hover:text-[#10b981] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#64748b] font-semibold uppercase tracking-wide">Phone</div>
                    <div className="text-xl text-white font-bold group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#a855f7] group-hover:to-[#c084fc] transition-all duration-300">+94 777 102 824</div>
                  </div>
                </a>
                
                <div className="flex items-start gap-4 glass-glow rounded-xl p-4 border border-[#10b981]/20">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#10b981]/20 to-[#10b981]/10 rounded-xl flex items-center justify-center border border-[#10b981]/30 flex-shrink-0">
                    <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm text-[#64748b] font-semibold uppercase tracking-wide">Location</div>
                    <div className="text-xl text-white font-bold">Kadawatha, Sri Lanka</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-white mb-8 font-heading">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/tharuka-bandara"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-glow rounded-xl flex items-center justify-center hover:bg-[#00d9ff]/10 hover:border-[#00d9ff]/50 transition-all duration-300 hover:scale-110 border border-[#00d9ff]/20"
                  aria-label="LinkedIn"
                >
                  <svg className="w-7 h-7 text-[#00d9ff]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/tharukab95"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-glow rounded-xl flex items-center justify-center hover:bg-[#a855f7]/10 hover:border-[#a855f7]/50 transition-all duration-300 hover:scale-110 border border-[#a855f7]/20"
                  aria-label="GitHub"
                >
                  <svg className="w-7 h-7 text-[#a855f7]" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-[#888888] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-glow border border-[#00d9ff]/20 rounded-xl focus:ring-2 focus:ring-[#00d9ff]/50 focus:border-[#00d9ff]/40 outline-none transition-all duration-200 text-white/90 placeholder-[#64748b] font-light bg-transparent"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#cbd5e1] mb-3 uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 glass-glow border border-[#00d9ff]/20 rounded-xl focus:ring-2 focus:ring-[#00d9ff]/50 focus:border-[#00d9ff]/40 outline-none transition-all duration-200 text-white/90 placeholder-[#64748b] font-light bg-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-[#cbd5e1] mb-3 uppercase tracking-wide">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 glass-glow border border-[#00d9ff]/20 rounded-xl focus:ring-2 focus:ring-[#00d9ff]/50 focus:border-[#00d9ff]/40 outline-none transition-all duration-200 resize-none text-white/90 placeholder-[#64748b] font-light bg-transparent"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#00d9ff] via-[#a855f7] to-[#10b981] text-white rounded-xl font-medium hover:scale-[1.02] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 shadow-lg hover:shadow-xl hover:shadow-[#00d9ff]/30 font-heading animate-gradient"
              >
                {status === "sending"
                  ? "Sending..."
                  : status === "success"
                  ? "✓ Message Sent!"
                  : "Send Message"}
              </button>
              
              {status === "error" && (
                <p className="text-gradient-primary text-sm font-light">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
