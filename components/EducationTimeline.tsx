
import React from 'react';

const EducationTimeline: React.FC = () => {
  const evolution = [
    {
      year: "2022",
      title: "Engineering Foundations",
      description: "Built backend systems using Django and relational databases. Developed strong understanding of authentication flows, modular design, and structured backend logic."
    },
    {
      year: "2023",
      title: "Full-Stack System Engineering",
      description: "Designed real-time applications integrating Firebase and external APIs. Transitioned from feature coding to workflow-based system architecture."
    },
    {
      year: "2024",
      title: "Structured System Architecture",
      description: "Engineered role-based POS and management systems with database optimization, modular service layers, and real-world constraints. Shifted toward production-style engineering."
    },
    {
      year: "2025",
      title: "AI Specialization & Research Direction",
      description: "Transitioned into AI/ML specialization. Built NLP-driven resume ranking systems and monocular vision-based geometric modeling pipelines. Focused on explainability, ranking logic, and inference transparency."
    },
    {
      year: "2026",
      title: "Production AI Systems & Competitive Engineering",
      description: "Shipped FraudShield AI — a full-stack ensemble ML platform with cloud deployment, JWT auth, and real-time risk inference. Secured 1st place in a 24-hour individual hackathon, demonstrating end-to-end AI system delivery under competitive constraints."
    }
  ];

  return (
    <section className="px-6">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Education */}
        <div className="lg:col-span-5 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white whitespace-nowrap">Education</h2>
            <div className="h-px bg-indigo-500/30 flex-grow"></div>
          </div>

          <div className="space-y-8">
            <div className="group">
              <div className="text-indigo-400 font-mono text-sm mb-2">2025 – Present</div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">Master of Science – Artificial Intelligence & Machine Learning</h3>
              <p className="text-gray-400">Christ University</p>
            </div>

            <div className="group">
              <div className="text-indigo-400 font-mono text-sm mb-2">2022 – 2025</div>
              <h3 className="text-xl font-bold text-white mb-1 group-hover:text-indigo-400 transition-colors">Bachelor of Computer Applications</h3>
              <p className="text-gray-400">Christ University | GPA: 3.62/4</p>
            </div>
          </div>
        </div>

        {/* Evolution */}
        <div className="lg:col-span-7 reveal opacity-0 translate-y-8 transition-all duration-700 ease-out delay-200">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-3xl font-bold text-white whitespace-nowrap">Technical Evolution</h2>
            <div className="h-px bg-indigo-500/30 flex-grow"></div>
          </div>

          <div className="relative ml-4 space-y-8">
            {/* Animated Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-800"></div>
            <div className="absolute left-0 top-0 w-px bg-gradient-to-b from-indigo-500 to-violet-500 timeline-draw"></div>

            {evolution.map((item, idx) => (
              <div key={idx} className="relative pl-10 group" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="absolute left-[-5px] top-1 w-2.5 h-2.5 rounded-full bg-gray-700 border border-gray-900 group-hover:bg-indigo-500 group-hover:scale-125 transition-all duration-300"></div>
                <div className="text-xs font-mono text-indigo-400 mb-2">{item.year}</div>
                <h4 className="text-lg font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed max-w-[500px]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes timeline-draw {
          from { height: 0%; }
          to { height: 100%; }
        }
        .timeline-draw {
          animation: timeline-draw 1.5s ease-out 0.5s both;
        }
      `}</style>
    </section>
  );
};

export default EducationTimeline;
