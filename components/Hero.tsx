import React from 'react';
import profilePhoto from '../src/assets/photo.jpg';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center px-6 pt-20 bg-[#0b0f19]">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">

        {/* LEFT SIDE */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Tejas R M
          </h1>

          <h2 className="text-xl md:text-2xl text-indigo-400 font-mono">
            AI Engineer | Intelligent Systems Developer
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed max-w-[600px]">
            Bridging research-grade AI with production systems — from explainable NLP to dataset-independent computer vision.
          </p>

          <p className="text-gray-500 max-w-[550px]">
            🥇 1st Place Hackathon 2026 &nbsp;·&nbsp; 5 AI Systems Built · 3 Deployed &nbsp;·&nbsp; Cross-domain AI (NLP · CV · Risk · Medical)
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-lg shadow-[0_0_20px_rgba(99,102,241,0.4)] hover:shadow-[0_0_30px_rgba(99,102,241,0.6)] transform hover:-translate-y-1 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 bg-transparent border border-gray-700 hover:border-indigo-500 text-white font-semibold rounded-lg transition-all duration-300 hover:-translate-y-1 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0b0f19]"
            >
              Let’s Connect
            </a>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">

            {/* Glow Ring */}
            <div className="absolute inset-[-6px] rounded-full bg-gradient-to-tr from-indigo-500 to-violet-500 blur-xl opacity-30"></div>

            {/* Image Container */}
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border border-gray-800 shadow-2xl animate-float">
              <img
                src={profilePhoto}
                alt="Tejas R M"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
