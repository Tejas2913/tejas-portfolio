
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section scroll spy
  useEffect(() => {
    const sectionIds = ['about', 'projects', 'skills', 'contact'];

    const getActiveSection = () => {
      // Trigger line = 25% from top of viewport
      const triggerY = window.innerHeight * 0.25;

      let closest: string = '';
      let closestDist = Infinity;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        // Distance from trigger line to the section's top edge (prefer sections above trigger)
        const dist = Math.abs(rect.top - triggerY);
        // Section must be visible on screen: top < bottom of viewport, bottom > 0
        if (rect.top < window.innerHeight && rect.bottom > 0 && dist < closestDist) {
          closestDist = dist;
          closest = id;
        }
      }

      if (closest) setActiveSection(closest);
    };

    // Run once on mount
    getActiveSection();

    window.addEventListener('scroll', getActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', getActiveSection);
  }, []);

  const isActive = (section: string) => activeSection === section;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-gray-800/30 transition-all duration-300 ${scrolled
      ? 'bg-[#0b0f19]/95 backdrop-blur-lg shadow-lg shadow-black/20'
      : 'bg-[#0b0f19]/80 backdrop-blur-md'
      }`}>
      <div className={`max-w-[1100px] mx-auto px-6 flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-14' : 'h-16'
        }`}>
        <div className="font-bold text-lg tracking-tight hover:text-indigo-400 transition-colors cursor-pointer">
          TEJAS <span className="text-indigo-500">R M</span>
        </div>
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-400">
          <a
            href="#about"
            className={`hover:text-white transition-all focus-visible:text-white focus-visible:outline-none ${isActive('about') ? 'text-white border-b-2 border-indigo-500' : ''
              }`}
          >
            About
          </a>
          <a
            href="#projects"
            className={`hover:text-white transition-all focus-visible:text-white focus-visible:outline-none ${isActive('projects') ? 'text-white border-b-2 border-indigo-500' : ''
              }`}
          >
            Projects
          </a>
          <a
            href="#skills"
            className={`hover:text-white transition-all focus-visible:text-white focus-visible:outline-none ${isActive('skills') ? 'text-white border-b-2 border-indigo-500' : ''
              }`}
          >
            Skills
          </a>
          <a
            href="#contact"
            className={`hover:text-white transition-all focus-visible:text-white focus-visible:outline-none ${isActive('contact') ? 'text-white border-b-2 border-indigo-500' : ''
              }`}
          >
            Connect
          </a>
          <a
            href="https://drive.google.com/file/d/15YZmIZ5MO-b1vZvBaykifm_O0F24P_OJ/view?usp=sharing"
            download
            className="px-4 py-1.5 bg-indigo-600/20 hover:bg-indigo-600/30 text-indigo-400 text-xs font-semibold border border-indigo-500/30 rounded transition-all focus-visible:ring-2 focus-visible:ring-indigo-500"
            title="Download Resume (Updated Mar 2026)"
          >
            Resume ↓
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
