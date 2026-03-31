
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('tejasrm2004@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="px-6 scroll-mt-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="bg-gradient-to-br from-[#111827] to-[#0b0f19] p-12 lg:p-20 rounded-[40px] border border-gray-800 text-center relative overflow-hidden reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Connect</h2>
          <p className="text-lg md:text-xl text-gray-400 max-w-[650px] mx-auto mb-4 leading-relaxed">
            Open to AI/ML roles, research collaborations, and opportunities to engineer intelligent systems with real-world impact.
          </p>
          <p className="text-sm text-indigo-400/80 font-mono mb-12">
            Open to opportunities &nbsp;·&nbsp; Remote and Bangalore-based roles
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://github.com/Tejas2913"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 bg-gray-800/50 hover:bg-gray-800 text-white font-semibold border border-gray-700 rounded-xl hover:border-gray-500 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" /></svg>
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/tejas-r-m-70205a24b/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 bg-indigo-600/10 hover:bg-indigo-600/20 text-indigo-400 font-semibold border border-indigo-500/20 rounded-xl hover:border-indigo-500/50 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              LinkedIn
            </a>
            <button
              onClick={handleEmailClick}
              className="flex items-center gap-3 px-8 py-3 bg-gray-100 hover:bg-white text-gray-900 font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] relative"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              {copied ? 'Email Copied!' : 'Copy Email'}
            </button>
            <a
              href="https://drive.google.com/file/d/15YZmIZ5MO-b1vZvBaykifm_O0F24P_OJ/view?usp=sharing"
              download
              className="flex items-center gap-3 px-8 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(99,102,241,0.3)] hover:shadow-[0_0_30px_rgba(99,102,241,0.5)]"
              title="Download Resume (Updated Mar 2026)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
              Download Resume
            </a>
          </div>

          <p className="text-gray-500 text-xs mt-6">Resume updated March 2026</p>

          {/* Toast notification */}
          {copied && (
            <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in-up z-50">
              ✓ Email copied to clipboard: tejasrm2004@gmail.com
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translate(-50%, 10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default Contact;
