
import React from 'react';

const Certifications: React.FC = () => {
  const certs = [
    {
      title: "1st Place \u2013 Hackathon 2026",
      issuer: 'Hackathon 2026 \u2013 "No Teams. No Limits. Just You. Code for 24 Hours."',
      date: "2026",
      description: "Secured 1st place in a 24-hour individual hackathon focused on rapid system design, independent execution, and full-stack AI implementation under time constraints.",
      skills: ["System design", "Full-stack AI", "Rapid prototyping", "Independent execution"],
      impact: "Demonstrated ability to architect, build, and ship a complete AI-powered system solo within 24 hours under competitive pressure.",
      isHighlight: true,
      driveLink: "https://drive.google.com/file/d/17AdrtEg0_G3kQfbdPzOkIxA96z6pmAxs/view?usp=sharing"
    },
    {
      title: "Google Data Analytics Professional Certificate",
      issuer: "Google",
      date: "2024",
      description: "Completed a structured program covering the full analytics lifecycle including SQL querying, data cleaning, exploratory analysis, and Tableau visualization.",
      skills: ["Data transformation", "Statistical reasoning", "Dashboard design", "Insight communication"],
      impact: "Strengthened ability to convert raw data into actionable business insights.",
      verifyLink: "https://drive.google.com/file/d/1BdDfNamYSI_c8ggnUoHAv3k18vyx6ZSu/view?usp=sharing"
    },
    {
      title: "Deloitte Cyber Simulation",
      issuer: "Deloitte (Forage)",
      date: "2024",
      description: "Simulated cybersecurity incident response by analyzing web activity logs to identify suspicious patterns.",
      skills: ["Log analysis", "Threat detection reasoning", "Risk assessment"],
      impact: "Improved structured investigation and anomaly detection capability.",
      verifyLink: "https://drive.google.com/file/d/1B35bpvLkBoyALY2HG2gVZC2rPaKtidvq/view?usp=sharing"
    },
    {
      title: "Deloitte Data Analytics Simulation",
      issuer: "Deloitte (Forage)",
      date: "2024",
      description: "Conducted forensic-style compensation data analysis and created structured dashboards.",
      skills: ["Data classification", "Fairness metric analysis", "Executive-level reporting"],
      impact: "Enhanced capability to deliver executive-level insights through data classification and fairness analysis.",
      verifyLink: "https://drive.google.com/file/d/1Z4bLlIkW8AAv5RSq4XC6Gz8Wb7OypHtW/view?usp=sharing"
    },
    {
      title: "Deloitte Technology Simulation",
      issuer: "Deloitte (Forage)",
      date: "2024",
      description: "Performed requirement analysis and structured solution scoping for dashboard implementation.",
      skills: ["Technical documentation", "Business-technical alignment", "Solution design"],
      impact: "Bridged the gap between technical implementation and business requirements via structured solution design.",
      verifyLink: "https://drive.google.com/file/d/1DYNWpmNWV5VpKdNKyZBubY8WE4rFvs7O/view?usp=sharing"
    }
  ];

  return (
    <section className="px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Certifications</h2>
          <div className="h-px bg-indigo-500/30 flex-grow"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {certs.map((cert, idx) => (
            <div key={idx} className={`relative bg-[#111827] p-8 rounded-2xl border flex flex-col reveal opacity-0 translate-y-8 transition-all duration-700 ease-out hover:-translate-y-1 hover:shadow-xl ${cert.isHighlight
              ? 'border-yellow-400/40 shadow-[0_0_25px_rgba(250,204,21,0.15)] hover:border-yellow-400/60'
              : 'border-gray-800 hover:border-gray-700'
              }`}>
              {cert.isHighlight && (
                <div className="absolute top-4 right-4 px-3 py-1 text-xs font-mono rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-400/30">
                  🥇 1st Place
                </div>
              )}
              <div className="flex flex-col mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-indigo-400">{cert.issuer}</span>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-gray-600">{cert.date}</span>
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{cert.title}</h3>
                {cert.isHighlight && (
                  <span className="inline-block mt-2 text-[10px] uppercase font-mono tracking-wider text-yellow-400">
                    Achievement Highlight
                  </span>
                )}
              </div>

              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {cert.description}
              </p>

              {(cert.driveLink || cert.verifyLink) && (
                <a
                  href={cert.driveLink || cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-6 inline-flex items-center px-4 py-2 text-sm font-semibold rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white transition-all duration-300 shadow-[0_0_15px_rgba(99,102,241,0.3)] w-fit"
                >
                  View Certificate
                </a>
              )}

              <div className="mt-auto pt-6 border-t border-gray-800/50">
                <div className="flex flex-wrap gap-2 mb-6">
                  {cert.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="px-2 py-0.5 bg-gray-800/50 text-gray-500 text-[10px] font-medium rounded border border-gray-700">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex items-start gap-3 bg-[#0b0f19] p-4 rounded-xl border border-gray-800/30">
                  <div className="text-indigo-500 mt-0.5 text-xs font-bold uppercase tracking-tighter">Impact</div>
                  <p className="text-gray-300 text-xs leading-relaxed italic">
                    "{cert.impact}"
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
