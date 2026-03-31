
import React from 'react';

const Skills: React.FC = () => {
  const skillGroups = [
    {
      title: "AI & Machine Learning",
      icon: "🧠",
      items: ["NumPy", "Pandas", "Scikit-learn", "SciPy", "Feature Engineering", "Statistical Modeling"]
    },
    {
      title: "Computer Vision",
      icon: "👁️",
      items: ["OpenCV", "MediaPipe Pose", "Geometric Modeling"]
    },
    {
      title: "NLP & Intelligent Systems",
      icon: "💬",
      items: ["Resume parsing", "Skill extraction", "Similarity scoring", "Explainable ML"]
    },
    {
      title: "Deep Learning",
      icon: "⚡",
      items: ["TensorFlow", "PyTorch", "Model Optimization"]
    },
    {
      title: "Data Analytics",
      icon: "📊",
      items: ["SQL", "Tableau", "EDA", "Visualization"]
    },
    {
      title: "Backend & Full-Stack",
      icon: "💻",
      items: ["Python", "Django", "Firebase", "REST APIs", "SQLite", "MySQL"]
    },
    {
      title: "Tools & Environment",
      icon: "🛠️",
      items: ["Git", "VS Code", "Virtual Environments"]
    },
    {
      title: "Professional Skills",
      icon: "💡",
      items: ["Analytical Thinking", "System Design Mindset", "Research Orientation", "Technical Documentation"]
    }
  ];

  return (
    <section id="skills" className="px-6 scroll-mt-24">
      <div className="max-w-[1100px] mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          <div className="h-px bg-indigo-500/30 flex-grow"></div>
        </div>

        <p className="text-gray-400 text-base mb-16 max-w-[700px]">
          Structured technical expertise across AI research, production systems, and applied engineering.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {skillGroups.map((group, idx) => (
            <div key={idx} className="reveal opacity-0 translate-y-8 transition-all duration-700 ease-out" style={{ transitionDelay: `${idx * 50}ms` }}>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6 border-b border-gray-800 pb-2 flex items-center gap-2">
                <span className="text-sm opacity-40 text-gray-500">{group.icon}</span>
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.items.map((skill, sIdx) => (
                  <li key={sIdx} className="text-gray-300 text-sm flex items-center gap-2.5 group/item cursor-default transition-all duration-300 hover:text-white hover:translate-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-600 group-hover/item:bg-indigo-500 transition-all duration-300 group-hover/item:scale-125"></span>
                    <span className="transition-all">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
