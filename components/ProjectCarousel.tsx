import React, { useState } from "react";

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  status: string;
  accent: string;
  description: string;
  impact?: string;
  metrics: { title: string; items: { label: string; value: string }[] };
  capabilities: { title: string; items?: string[]; stack?: string[] }[];
  links: { label: string; url?: string; onClick?: () => void; primary: boolean; disabled?: boolean }[];
  type: string;
  onOpenPreview: () => void;
}

interface Props {
  projects: ProjectData[];
  emoji: string;
  label: string;
  subtitle: string;
}

const ProjectCarousel: React.FC<Props> = ({ projects, emoji, label, subtitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => setActiveIndex((prev) => (prev + 1) % projects.length);
  const handlePrev = () => setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);

  const getShadowRgb = (accent: string) => {
    if (accent === 'indigo') return '99,102,241';
    if (accent === 'violet') return '139,92,246';
    if (accent === 'cyan') return '6,182,212';
    return '16,185,129';
  };

  return (
    <div className="mb-24 relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-xl">{emoji}</span>
          <h3 className="text-2xl font-bold text-white">{label}</h3>
        </div>
        {/* Desktop Navigation Arrows */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={handlePrev} disabled={activeIndex === 0} aria-label="Previous project"
            className={`w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 ${activeIndex === 0 ? 'opacity-20 cursor-not-allowed' : 'hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>
          <button onClick={handleNext} disabled={activeIndex === projects.length - 1} aria-label="Next project"
            className={`w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center transition-all duration-300 ${activeIndex === projects.length - 1 ? 'opacity-20 cursor-not-allowed' : 'hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)] text-white'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>
      </div>
      <p className="text-gray-400 text-sm mb-10">{subtitle}</p>

      <div className="relative overflow-visible">
        <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
          {projects.map((proj, idx) => (
            <div key={proj.id} className={`min-w-full px-1 transition-opacity duration-500 ${activeIndex === idx ? 'opacity-100' : 'opacity-40 scale-[0.98]'}`}>
              <div className={`bg-[#111827] rounded-3xl border border-gray-800 hover:border-${proj.accent}-500/50 overflow-hidden flex flex-col lg:flex-row lg:h-[480px] group transition-all duration-700 ease-out hover:shadow-[0_0_30px_rgba(${getShadowRgb(proj.accent)},0.15)]`}>
                <div className="p-8 lg:p-12 lg:w-3/5 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`px-3 py-1 bg-${proj.status === 'Completed' ? 'green' : 'amber'}-900/30 text-${proj.status === 'Completed' ? 'green' : 'amber'}-400 text-xs font-mono rounded-full border border-${proj.status === 'Completed' ? 'green' : 'amber'}-500/20`}>
                      {proj.status}
                    </span>
                    <span className="text-gray-500 text-xs font-mono uppercase tracking-widest">{proj.category}</span>
                  </div>
                  <h4 className="text-2xl md:text-3xl font-bold text-white mb-2">{proj.title}</h4>
                  {proj.impact && <p className="text-gray-400 text-sm mb-6">{proj.impact}</p>}

                  {/* Metrics Snapshot */}
                  <div className={`bg-[#0b0f19] border border-${proj.accent}-500/20 rounded-xl p-4 mb-8`}>
                    <div className={`text-[10px] uppercase font-mono tracking-wider text-${proj.accent}-400 mb-3`}>{proj.metrics.title}</div>
                    <div className="grid grid-cols-3 gap-4">
                      {proj.metrics.items.map((m, midx) => (
                        <div key={midx}>
                          <div className="text-white font-bold text-lg">{m.value}</div>
                          <div className="text-gray-500 text-[10px] leading-tight mt-1">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack (inline) */}
                  {proj.capabilities.filter(cap => cap.stack).map((cap, cidx) => (
                    <div key={cidx} className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {cap.stack!.map((tag) => (
                          <span key={tag} className="px-2.5 py-1 bg-gray-800 text-gray-400 text-[11px] rounded font-mono">{tag}</span>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-wrap gap-4">
                    {proj.links.map((link, lidx) => (
                      <a key={lidx} href={link.url} onClick={link.onClick} target={link.url ? "_blank" : undefined} rel={link.url ? "noopener noreferrer" : undefined}
                        className={`px-6 py-2.5 text-sm font-semibold rounded-lg transition-all duration-300 ${link.disabled ? 'cursor-not-allowed opacity-50' : ''} ${link.primary
                          ? `bg-${proj.accent === 'emerald' ? 'emerald' : 'indigo'}-600 hover:bg-${proj.accent === 'emerald' ? 'emerald' : 'indigo'}-500 text-white shadow-[0_0_15px_rgba(${proj.accent === 'emerald' ? '16,185,129' : '99,102,241'},0.3)]`
                          : 'bg-gray-800 hover:bg-gray-700 text-white border border-gray-700'
                        }`}>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Visual Preview Side */}
                <div className="lg:w-2/5 bg-[#1a2233] relative flex items-center justify-center p-8 border-l border-gray-800">
                  <div className={`absolute inset-0 bg-gradient-to-br from-${proj.accent}-500/10 to-transparent`}></div>
                  {proj.id === 'resume' && (
                    <div onClick={proj.onOpenPreview} className="relative z-10 w-full aspect-square max-w-[280px] bg-[#0b0f19] rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer hover:border-indigo-500/50 transition-colors duration-300 group">
                      <div className="p-8 text-center space-y-4">
                        <div className="inline-block p-4 rounded-full bg-indigo-500/10 mb-2 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                        </div>
                        <h5 className="text-white font-mono text-xs tracking-widest uppercase opacity-60">NLP Screening Engine</h5>
                        <div className="flex gap-1 justify-center">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-indigo-500/40 rounded-full animate-pulse" style={{ animationDelay: `${i*150}ms` }}></div>)}
                        </div>
                      </div>
                    </div>
                  )}
                  {proj.id === 'vision' && (
                    <div onClick={proj.onOpenPreview} className="relative z-10 w-full aspect-square max-w-[280px] bg-[#0b0f19] rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer hover:border-violet-500/50 transition-colors duration-300">
                      <div className="relative w-40 h-52">
                        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-violet-400 animate-pulse-slow"></div>
                        <div className="absolute top-12 left-8 w-1.5 h-1.5 rounded-full bg-violet-400/70"></div>
                        <div className="absolute top-12 right-8 w-1.5 h-1.5 rounded-full bg-violet-400/70"></div>
                        <div className="absolute top-24 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-violet-400/70"></div>
                        <div className="absolute top-32 left-6 w-1.5 h-1.5 rounded-full bg-violet-400/70"></div>
                        <div className="absolute top-32 right-6 w-1.5 h-1.5 rounded-full bg-violet-400/70"></div>
                        <div className="absolute bottom-8 left-10 w-1.5 h-1.5 rounded-full bg-violet-400/70"></div>
                        <div className="absolute bottom-8 right-10 w-1.5 h-1.5 rounded-full bg-violet-400/70"></div>
                        <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                          <line x1="50%" y1="16" x2="32" y2="48" stroke="#a78bfa" strokeWidth="1" />
                          <line x1="50%" y1="16" x2="68%" y2="48" stroke="#a78bfa" strokeWidth="1" />
                          <line x1="32" y1="48" x2="50%" y2="96" stroke="#a78bfa" strokeWidth="1" />
                          <line x1="68%" y1="48" x2="50%" y2="96" stroke="#a78bfa" strokeWidth="1" />
                          <line x1="50%" y1="96" x2="24" y2="128" stroke="#a78bfa" strokeWidth="1" />
                          <line x1="50%" y1="96" x2="76%" y2="128" stroke="#a78bfa" strokeWidth="1" />
                          <line x1="24" y1="128" x2="40" y2="168" stroke="#a78bfa" strokeWidth="1" />
                          <line x1="76%" y1="128" x2="60%" y2="168" stroke="#a78bfa" strokeWidth="1" />
                        </svg>
                      </div>
                    </div>
                  )}
                  {proj.id === 'nlpplayground' && (
                    <div onClick={proj.onOpenPreview} className="relative z-10 w-full aspect-square max-w-[280px] bg-[#0b0f19] rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer hover:border-indigo-500/50 transition-colors duration-300 group">
                      <div className="p-8 text-center space-y-4">
                        <div className="inline-block p-4 rounded-full bg-indigo-500/10 mb-2 border border-indigo-500/20 group-hover:bg-indigo-500/20 transition-all duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                        </div>
                        <h5 className="text-white font-mono text-xs tracking-widest uppercase opacity-60">NLP Playground</h5>
                        <div className="flex gap-1 justify-center">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-indigo-500/40 rounded-full animate-pulse" style={{ animationDelay: `${i*150}ms` }}></div>)}
                        </div>
                      </div>
                    </div>
                  )}
                  {proj.id === 'ecg' && (
                    <div onClick={proj.onOpenPreview} className="relative z-10 w-full aspect-square max-w-[280px] bg-[#0b0f19] rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer hover:border-cyan-500/50 transition-colors duration-300 group">
                      <div className="p-8 text-center space-y-4">
                        <div className="inline-block p-4 rounded-full bg-cyan-500/10 mb-2 border border-cyan-500/20 group-hover:bg-cyan-500/20 transition-all duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                        </div>
                        <h5 className="text-white font-mono text-xs tracking-widest uppercase opacity-60">ECG Anomaly AI</h5>
                        <div className="flex gap-1 justify-center">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-cyan-500/40 rounded-full animate-pulse" style={{ animationDelay: `${i*150}ms` }}></div>)}
                        </div>
                      </div>
                    </div>
                  )}
                  {proj.id === 'fraudshield' && (
                    <div onClick={proj.onOpenPreview} className="relative z-10 w-full aspect-square max-w-[280px] bg-[#0b0f19] rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer hover:border-emerald-500/50 transition-colors duration-300 group">
                      <div className="p-8 text-center space-y-4">
                        <div className="inline-block p-4 rounded-full bg-emerald-500/10 mb-2 border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-all duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                        </div>
                        <h5 className="text-white font-mono text-xs tracking-widest uppercase opacity-60">Risk Intel System</h5>
                        <div className="flex gap-1 justify-center">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-emerald-500/40 rounded-full animate-pulse" style={{ animationDelay: `${i*150}ms` }}></div>)}
                        </div>
                      </div>
                    </div>
                  )}
                  {proj.id === 'campusflow' && (
                    <div onClick={proj.onOpenPreview} className="relative z-10 w-full aspect-square max-w-[280px] bg-[#0b0f19] rounded-xl border border-gray-700 shadow-2xl flex items-center justify-center overflow-hidden cursor-pointer hover:border-violet-500/50 transition-colors duration-300 group">
                      <div className="p-8 text-center space-y-4">
                        <div className="inline-block p-4 rounded-full bg-violet-500/10 mb-2 border border-violet-500/20 group-hover:bg-violet-500/20 transition-all duration-500">
                          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                        </div>
                        <h5 className="text-white font-mono text-xs tracking-widest uppercase opacity-60">Campus Flow</h5>
                        <div className="flex gap-1 justify-center">
                          {[1,2,3,4,5].map(i => <div key={i} className="w-1 h-3 bg-violet-500/40 rounded-full animate-pulse" style={{ animationDelay: `${i*150}ms` }}></div>)}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8 md:hidden">
        {projects.map((_, i) => (
          <button key={i} onClick={() => setActiveIndex(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-6 bg-indigo-500' : 'bg-gray-700'}`}
            aria-label={`Go to slide ${i + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
