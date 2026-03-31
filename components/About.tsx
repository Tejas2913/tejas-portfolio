
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="px-6 scroll-mt-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">About</h2>
          <div className="h-px bg-indigo-500/30 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-8 space-y-8 text-gray-300 text-lg leading-relaxed reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
            <p>
              I build AI systems that don't just work — they explain themselves. My engineering path evolved deliberately: from backend architecture to full-stack systems, and into applied machine learning driven by a need to make models honest, interpretable, and deployable.
            </p>
            <p>
              Currently pursuing a Master's in AI &amp; Machine Learning, I design pipelines where every component earns its place — from feature extraction and ranking logic to API layers and cloud deployment. I'm drawn to the gap between research accuracy and production reliability, and I build to close it.
            </p>
          </div>

          <div className="md:col-span-4 bg-[#111827] p-8 rounded-2xl border border-gray-800/50 shadow-xl reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
            <h3 className="text-sm font-mono text-indigo-400 uppercase tracking-widest mb-6">Philosophy</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span className="text-gray-300 text-sm">Explainability by default</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span className="text-gray-300 text-sm">Production-ready ML pipelines</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span className="text-gray-300 text-sm">System-first thinking</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-500 mt-1">▹</span>
                <span className="text-gray-300 text-sm">Research-to-deployment bridge</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
