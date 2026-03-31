import React, { useState, useEffect } from "react";
import ProjectCarousel from "./ProjectCarousel";
import type { ProjectData } from "./ProjectCarousel";

const Projects: React.FC = () => {
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [visionModalOpen, setVisionModalOpen] = useState(false);
  const [fraudShieldModalOpen, setFraudShieldModalOpen] = useState(false);
  const [nlpPlaygroundModalOpen, setNlpPlaygroundModalOpen] = useState(false);
  const [ecgModalOpen, setEcgModalOpen] = useState(false);
  const [campusFlowModalOpen, setCampusFlowModalOpen] = useState(false);
  const [showProgressToast, setShowProgressToast] = useState(false);

  const individualProjects: ProjectData[] = [
    {
      id: "fraudshield",
      title: "FraudShield AI – Real-Time Risk Intelligence Platform",
      category: "AI + Full-Stack Intelligence System",
      status: "Completed",
      accent: "emerald",
      impact:
        "Real-time fraud detection platform with sub-150ms inference and ensemble-based risk scoring.",
      description:
        "A full-stack AI-powered real-time risk intelligence platform combining ensemble ML, secure auth, voice input, and cloud deployment.",
      metrics: {
        title: "Performance Snapshot",
        items: [
          { label: "Accuracy", value: "92%+" },
          { label: "Latency", value: "<150ms" },
          { label: "Deployment", value: "Cloud" },
        ],
      },
      capabilities: [
        {
          title: "Core Capabilities",
          items: [
            "Ensemble ML scoring",
            "Probability calibration",
            "Voice input integration",
            "Analytics dashboard",
          ],
        },
        {
          title: "Model Design Decisions",
          items: [
            "Chose ensemble (LogReg + SVM + Voting) over single model for calibration stability",
            "Evaluated single-model baselines — observed lower probability reliability",
            "Prioritized interpretable models over black-box for risk explainability",
          ],
        },
        {
          title: "Validation",
          items: [
            "30–50 simulated fraud scenarios tested with consistent inference",
          ],
        },
        {
          title: "Tech Stack",
          stack: ["React", "FastAPI", "Scikit-learn", "JWT", "Vercel"],
        },
        {
          title: "Engineering",
          items: [
            "REST API deployment via FastAPI + Vercel",
            "JWT-based auth with role protection",
            "Modular frontend–backend separation",
          ],
        },
      ],
      links: [
        {
          label: "Live Demo",
          url: "https://fraud-shield-frontend-w549.vercel.app/",
          primary: true,
        },
        {
          label: "GitHub",
          url: "https://github.com/Tejas2913/FraudShield-Frontend",
          primary: false,
        },
      ],
      type: "fraud",
      onOpenPreview: () => setFraudShieldModalOpen(true),
    },

    {
      id: "ecg",
      title: "ECG Anomaly Detection System",
      category: "Deep Learning · Medical AI",
      status: "Completed",
      accent: "cyan",
      impact:
        "Unsupervised anomaly detection system using reconstruction error, designed for scenarios without labeled anomaly datasets.",
      description:
        "Autoencoder-based anomaly detection trained exclusively on normal ECG data, using reconstruction error as the anomaly signal — no labeled anomaly data required.",
      metrics: {
        title: "Performance",
        items: [
          { label: "Accuracy", value: "72%" },
          { label: "ROC-AUC", value: "0.817" },
          { label: "Data", value: "Normal Only" },
        ],
      },
      capabilities: [
        {
          title: "Core System",
          items: [
            "Dense Autoencoder",
            "Reconstruction error scoring",
            "Early stopping",
          ],
        },
        {
          title: "Design Decisions",
          items: [
            "Chose autoencoder over supervised models due to lack of labeled anomaly data",
            "Used reconstruction error as anomaly signal instead of classification",
            "Prioritized unsupervised approach for real-world adaptability",
          ],
        },
        {
          title: "Tech Stack",
          stack: ["Python", "TensorFlow", "Keras", "Streamlit"],
        },
        {
          title: "Engineering",
          items: [
            "Interactive Streamlit dashboard for real-time visualization",
            "Threshold-based anomaly flagging with configurable sensitivity",
          ],
        },
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Tejas2913/ecg-anomaly-detection",
          primary: true,
        },
      ],
      type: "ecg",
      onOpenPreview: () => setEcgModalOpen(true),
    },

    {
      id: "nlpplayground",
      title: "NLP Playground",
      category: "NLP · Full-Stack AI",
      status: "Completed",
      accent: "indigo",
      impact:
        "Interactive NLP system with real-time RNN/LSTM inference.",
      description:
        "Full-stack platform for sentiment analysis, next-word prediction, and text generation with real-time model comparison.",
      metrics: {
        title: "System",
        items: [
          { label: "Models", value: "RNN + LSTM" },
          { label: "Tasks", value: "3" },
          { label: "Inference", value: "Real-time" },
        ],
      },
      capabilities: [
        {
          title: "Tasks",
          items: [
            "Sentiment analysis",
            "Text generation",
            "Next word prediction",
          ],
        },
        {
          title: "Validation",
          items: [
            "20+ interactive test runs across sentiment and sequence tasks",
          ],
        },
        {
          title: "Tech Stack",
          stack: ["React", "FastAPI", "PyTorch"],
        },
        {
          title: "Engineering",
          items: [
            "Frontend–backend integration with REST APIs",
            "Real-time inference without page reload",
          ],
        },
      ],
      links: [
        {
          label: "Live Demo",
          url: "https://nlp-playground-frontend.vercel.app/",
          primary: true,
        },
      ],
      type: "nlp",
      onOpenPreview: () => setNlpPlaygroundModalOpen(true),
    },

    {
      id: "resume",
      title: "Resume Screening System",
      category: "NLP",
      status: "Completed",
      accent: "indigo",
      impact:
        "Explainable ATS ranking engine using similarity scoring.",
      description:
        "Resume ranking system using NLP + explainable reasoning.",
      metrics: {
        title: "Performance",
        items: [
          { label: "Accuracy", value: "85%" },
          { label: "Speed", value: "<2s" },
          { label: "Resumes", value: "100+" },
        ],
      },
      capabilities: [
        {
          title: "Core Engine",
          items: [
            "Resume parsing",
            "Skill extraction",
            "Cosine similarity",
          ],
        },
        {
          title: "Design Decisions",
          items: [
            "Used cosine similarity over transformer embeddings for interpretability and speed",
            "Prioritized explainable ranking over opaque deep learning models",
            "Designed feature-weighting system for recruiter control",
          ],
        },
        {
          title: "Tech Stack",
          stack: ["Python", "spaCy", "Scikit-learn", "Streamlit"],
        },
        {
          title: "Engineering",
          items: [
            "Modular pipeline: parsing → extraction → scoring → ranking",
            "Input validation and error handling for diverse resume formats",
          ],
        },
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Tejas2913/FUTURE_ML_03",
          primary: true,
        },
      ],
      type: "nlp",
      onOpenPreview: () => setResumeModalOpen(true),
    },
  ];

  const teamProjects: ProjectData[] = [
    {
      id: "vision",
      title: "Vision Anthropometrics",
      category: "Computer Vision · Research (Team)",
      status: "In Progress",
      accent: "violet",
      impact:
        "Zero-shot human measurement using geometric landmark inference.",
      description:
        "Monocular RGB pipeline for anthropometric estimation without training data, enabling zero-shot deployment without calibration dependencies.",
      metrics: {
        title: "Evaluation",
        items: [
          { label: "Accuracy", value: "±2–3cm" },
          { label: "Training", value: "None" },
          { label: "Speed", value: "Real-time" },
        ],
      },
      capabilities: [
        {
          title: "My Contribution",
          items: [
            "Designed base system workflow",
            "Built pipeline (MediaPipe → inference)",
            "Defined mapping strategy",
            "Error analysis",
          ],
        },
        {
          title: "Design Decisions",
          items: [
            "Chose geometric landmark inference to avoid dependency on labeled datasets",
            "Avoided supervised learning to enable zero-shot deployment",
            "Prioritized real-time inference over high-complexity deep models",
          ],
        },
        {
          title: "Validation",
          items: [
            "20+ real-world samples validated with consistent accuracy in controlled conditions",
          ],
        },
        {
          title: "Tech Stack",
          stack: ["Python", "MediaPipe", "OpenCV", "NumPy"],
        },
        {
          title: "Engineering",
          items: [
            "End-to-end inference pipeline: camera → landmarks → geometric model → output",
            "Modular architecture for component-level testing",
          ],
        },
      ],
      links: [
        {
          label: "Live Demo",
          url: "https://atelierairp.netlify.app/",
          primary: true,
        },
        {
          label: "GitHub",
          url: "https://github.com/DaraneeshR/frontend_atelier.git",
          primary: false,
        },
      ],
      type: "cv",
      onOpenPreview: () => setVisionModalOpen(true),
    },

    {
      id: "campusflow",
      title: "Campus Flow",
      category: "Full-Stack · AI Integration (Team)",
      status: "Completed",
      accent: "violet",
      impact:
        "Modular full-stack event platform with structured backend architecture and controlled AI generation pipeline.",
      description:
        "AI-enhanced modular event management system with dynamic theme generation, role-based access, and structured backend architecture supporting 7+ functional modules.",
      metrics: {
        title: "System",
        items: [
          { label: "Modules", value: "7+" },
          { label: "Themes", value: "AI" },
          { label: "Type", value: "Full-stack" },
        ],
      },
      capabilities: [
        {
          title: "Backend Architecture",
          items: [
            "Designed modular REST API architecture using Express.js",
            "Implemented role-based access control for organizers and participants",
            "Built dynamic event configuration system with feature toggles",
            "Structured backend to support scalable event workflows",
          ],
        },
        {
          title: "AI System Pipeline (My Contribution)",
          items: [
            "Designed AI interaction layer for dynamic theme generation",
            "Built structured prompt pipeline using Gemini API with controlled inputs",
            "Implemented validation layer to enforce strict JSON schema outputs",
            "Ensured safe frontend rendering through sanitized AI responses",
            "Added deterministic input constraints to reduce variability in generated themes",
          ],
        },
        {
          title: "Tech Stack",
          stack: ["React", "Express.js", "Gemini AI", "Firebase"],
        },
        {
          title: "Engineering",
          items: [
            "REST API architecture with modular route handlers",
            "Input validation and JSON schema enforcement on AI outputs",
          ],
        },
      ],
      links: [
        {
          label: "GitHub",
          url: "https://github.com/Vishwaxs/CAMPUS-FLOW-43",
          primary: true,
        },
      ],
      type: "fullstack",
      onOpenPreview: () => { console.log("Campus Flow clicked"); setCampusFlowModalOpen(true); },
    },
  ];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setResumeModalOpen(false);
        setVisionModalOpen(false);
        setFraudShieldModalOpen(false);
        setNlpPlaygroundModalOpen(false);
        setEcgModalOpen(false);
        setCampusFlowModalOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="projects" className="px-6 scroll-mt-24">
      <div className="max-w-[1100px] mx-auto">

        <h2 className="text-3xl font-bold text-white mb-10">
          Projects
        </h2>

        <ProjectCarousel
          projects={individualProjects}
          emoji="⭐"
          label="AI / ML Systems"
          subtitle="End-to-end AI systems built independently"
        />

        <ProjectCarousel
          projects={teamProjects}
          emoji="🤝"
          label="Collaborative AI Systems"
          subtitle="Team-based systems with key contributions"
        />

        {/* 🏗 Production Systems & Engineering */}
        <div>
          <div className="flex items-center gap-3 mb-10">
            <span className="text-xl">🏗</span>
            <h3 className="text-2xl font-bold text-white">
              Production Systems & Engineering
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Retail POS System",
                status: "Completed",
                summary:
                  "Multi-role retail transaction system with real-time barcode scanning, inventory synchronization, and PDF invoice generation, designed to support cashier–admin workflows and high-frequency checkout operations.",
                impact: "Handles role-based retail workflows with real-time inventory updates and barcode-driven checkout.",
                stack: "MySQL, Python, fpdf, python-barcode, matplotlib",
                github:
                  "https://github.com/Tejas2913/swiftmart-pos-python",
              },
              {
                title: "Hungry Hub",
                status: "Completed",
                summary:
                  "End-to-end order management system with asynchronous workflow handling and real-time SMS-based delivery notifications using Twilio APIs, enabling reliable state transitions from order placement to fulfillment.",
                impact: "Implements asynchronous order lifecycle with real-time user notification via Twilio.",
                stack: "Kotlin, Firebase, Twilio",
                github: "https://github.com/Tejas2913/Hungry-Hub",
              },
              {
                title: "Tag Salon",
                status: "Completed",
                summary:
                  "Multi-admin scheduling system with concurrent appointment management and Firebase-based authentication, designed to handle real-time booking conflicts across multiple service providers.",
                impact: "Supports concurrent booking flows across multiple admins with real-time conflict handling.",
                stack: "Kotlin, Firebase",
                github: "https://github.com/Tejas2913/TAG-Salon",
              },
              {
                title: "Track Tone",
                status: "Completed",
                summary:
                  "Trainer–trainee lifecycle management platform with structured exercise data modeling and role-based interaction flows, enabling personalized progression tracking and session management.",
                impact: "Models structured fitness workflows with role-based interaction and progression tracking.",
                stack: "HTML, CSS, Django, SQLite",
                github: "https://github.com/Tejas2913/Track-Tone",
              },
            ].map((proj, idx) => (
              <div
                key={idx}
                className="bg-[#111827] p-8 rounded-2xl border border-gray-800 hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300 reveal opacity-0 translate-y-8"
              >
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-white">
                    {proj.title}
                  </h4>
                  <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-green-900/20 text-green-400 border border-green-500/20 rounded">
                    {proj.status}
                  </span>
                </div>
                <p className="text-sm text-gray-400 mb-3 leading-relaxed line-clamp-2">
                  {proj.summary}
                </p>
                {proj.impact && (
                  <p className="text-xs text-indigo-400/70 font-mono mb-4 leading-relaxed">
                    {proj.impact}
                  </p>
                )}
                <div className="flex justify-between items-center">
                  <div className="text-[11px] font-mono text-indigo-400">
                    {proj.stack}
                  </div>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-300 text-sm font-semibold"
                  >
                    View Code →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Project Modal */}
        {visionModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-modal-fade-in"
            onClick={() => setVisionModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div
              className="relative z-10 max-w-2xl w-full animate-modal-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setVisionModalOpen(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="mb-6 bg-[#0b0f19] border border-violet-500/20 rounded-xl p-6">
                <div className="text-xs uppercase font-mono tracking-wider text-violet-400 mb-4">Inference Pipeline</div>
                <div className="flex items-center justify-between gap-3 text-[10px] md:text-xs font-mono overflow-x-auto pb-2">
                  {["Camera", "MediaPipe", "Landmarks", "Geometric", "Measure"].map((step, sidx, arr) => (
                    <React.Fragment key={sidx}>
                      <div className="bg-violet-600/20 border border-violet-500/30 rounded px-3 py-2 text-violet-300 whitespace-nowrap">{step}</div>
                      {sidx < arr.length - 1 && <div className="text-violet-500">→</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#111827] to-[#0b0f19] p-12 rounded-2xl border border-violet-500/30 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="inline-block px-4 py-2 bg-amber-900/30 text-amber-400 text-sm font-mono rounded-full border border-amber-500/20">
                    Research in Progress
                  </div>
                  <h3 className="text-3xl font-bold text-white">Vision-Based Anthropometrics</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
                    Advanced computer vision research project utilizing MediaPipe and OpenCV for dataset-independent human body measurement inference.
                  </p>
                  <div className="pt-4">
                    <div className="inline-flex items-center gap-2 text-violet-400 mb-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                      <span className="font-mono text-sm leading-none">Dataset-independent inference via geometric modeling</span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-left">
                      <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                        <div className="text-violet-400 font-bold mb-1">Design Decisions</div>
                        <div className="text-xs text-gray-500">Chose geometric landmark inference to avoid dataset dependency. Avoided supervised learning for zero-shot deployment.</div>
                      </div>
                      <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                        <div className="text-violet-400 font-bold mb-1">Validation</div>
                        <div className="text-xs text-gray-500">20+ real-world samples validated with consistent ±2–3cm accuracy. End-to-end pipeline: camera → landmarks → geometric model → output.</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* FraudShield Project Modal */}
        {fraudShieldModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-modal-fade-in"
            onClick={() => setFraudShieldModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div
              className="relative z-10 max-w-2xl w-full animate-modal-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setFraudShieldModalOpen(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="mb-6 bg-[#0b0f19] border border-emerald-500/20 rounded-xl p-6">
                <div className="text-xs uppercase font-mono tracking-wider text-emerald-400 mb-4">System Architecture</div>
                <div className="flex items-center justify-between gap-3 text-[10px] md:text-xs font-mono overflow-x-auto pb-2">
                  {["Frontend", "Backend API", "Ensemble ML", "Database"].map((step, sidx, arr) => (
                    <React.Fragment key={sidx}>
                      <div className="bg-emerald-600/20 border border-emerald-500/30 rounded px-3 py-2 text-emerald-300 whitespace-nowrap">{step}</div>
                      {sidx < arr.length - 1 && <div className="text-emerald-500">→</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#111827] to-[#0b0f19] p-12 rounded-2xl border border-emerald-500/30 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="inline-block p-4 rounded-full bg-emerald-500/10 mb-2 border border-emerald-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">FraudShield AI Platform</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
                    Real-time risk intelligence platform using ensemble learning to detect and classify digital fraud patterns with 92% calibrated accuracy.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-left pt-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-emerald-400 font-bold mb-1">Ensemble Scorer</div>
                      <div className="text-xs text-gray-500">Voting classifier combining multiple linear and non-linear models.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-emerald-400 font-bold mb-1">Secure Auth</div>
                      <div className="text-xs text-gray-500">JWT-based role protection for administrative risk dashboards.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-emerald-400 font-bold mb-1">Design Decisions</div>
                      <div className="text-xs text-gray-500">Chose ensemble over single model for calibration stability. Prioritized interpretable models for risk explainability.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-emerald-400 font-bold mb-1">Validation</div>
                      <div className="text-xs text-gray-500">30–50 simulated fraud scenarios tested with consistent real-time inference. REST API via FastAPI + Vercel.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* NLP Playground Modal */}
        {nlpPlaygroundModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-modal-fade-in"
            onClick={() => setNlpPlaygroundModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div
              className="relative z-10 max-w-2xl w-full animate-modal-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setNlpPlaygroundModalOpen(false)} className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <div className="mb-6 bg-[#0b0f19] border border-indigo-500/20 rounded-xl p-6">
                <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 mb-4">Inference Pipeline</div>
                <div className="flex items-center justify-between gap-3 text-[10px] md:text-xs font-mono overflow-x-auto pb-2">
                  {["Text Input", "Tokenizer", "RNN / LSTM", "Softmax", "Output"].map((step, sidx, arr) => (
                    <React.Fragment key={sidx}>
                      <div className="bg-indigo-600/20 border border-indigo-500/30 rounded px-3 py-2 text-indigo-300 whitespace-nowrap">{step}</div>
                      {sidx < arr.length - 1 && <div className="text-indigo-500">→</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#111827] to-[#0b0f19] p-12 rounded-2xl border border-indigo-500/30 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="inline-block p-4 rounded-full bg-indigo-500/10 mb-2 border border-indigo-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">NLP Playground</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">Interactive NLP platform for real-time sentiment analysis, next-word prediction, and text generation — powered by RNN and LSTM models.</p>
                  <div className="grid grid-cols-2 gap-4 text-left pt-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-indigo-400 font-bold mb-1">Model Engine</div>
                      <div className="text-xs text-gray-500">RNN and LSTM models with live side-by-side comparison interface.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-indigo-400 font-bold mb-1">Full-Stack API</div>
                      <div className="text-xs text-gray-500">FastAPI backend + React frontend for real-time inference with no page reload.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-indigo-400 font-bold mb-1">Validation</div>
                      <div className="text-xs text-gray-500">20+ interactive test runs across sentiment and sequence tasks with consistent results.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-indigo-400 font-bold mb-1">Engineering</div>
                      <div className="text-xs text-gray-500">Frontend–backend REST integration. Real-time inference without page reload.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ECG Anomaly Detection Modal */}
        {ecgModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-modal-fade-in"
            onClick={() => setEcgModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div
              className="relative z-10 max-w-2xl w-full animate-modal-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setEcgModalOpen(false)} className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
              <div className="mb-6 bg-[#0b0f19] border border-cyan-500/20 rounded-xl p-6">
                <div className="text-xs uppercase font-mono tracking-wider text-cyan-400 mb-4">Detection Pipeline</div>
                <div className="flex items-center justify-between gap-3 text-[10px] md:text-xs font-mono overflow-x-auto pb-2">
                  {["ECG Signal", "Autoencoder", "Reconstruct", "Error Score", "Anomaly Flag"].map((step, sidx, arr) => (
                    <React.Fragment key={sidx}>
                      <div className="bg-cyan-600/20 border border-cyan-500/30 rounded px-3 py-2 text-cyan-300 whitespace-nowrap">{step}</div>
                      {sidx < arr.length - 1 && <div className="text-cyan-500">→</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#111827] to-[#0b0f19] p-12 rounded-2xl border border-cyan-500/30 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="inline-block p-4 rounded-full bg-cyan-500/10 mb-2 border border-cyan-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">ECG Anomaly Detection System</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">Unsupervised anomaly detection on ECG signals using a Dense Autoencoder — no labelled anomalies required. Trained only on normal cardiac data, anomalies are flagged via reconstruction error.</p>
                  <div className="grid grid-cols-2 gap-4 text-left pt-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-cyan-400 font-bold mb-1">Model Architecture</div>
                      <div className="text-xs text-gray-500">6-layer Dense Autoencoder with Dropout and Early Stopping. ROC-AUC: 0.817.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-cyan-400 font-bold mb-1">Interactive Dashboard</div>
                      <div className="text-xs text-gray-500">Streamlit app with real-time ECG visualisation, threshold control, and CSV export.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-cyan-400 font-bold mb-1">Design Decisions</div>
                      <div className="text-xs text-gray-500">Chose autoencoder over supervised models due to lack of labeled anomaly data. Used reconstruction error as anomaly signal.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-cyan-400 font-bold mb-1">Engineering</div>
                      <div className="text-xs text-gray-500">Threshold-based anomaly flagging with configurable sensitivity. Unsupervised approach for real-world adaptability.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Resume Project Modal */}
        {resumeModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-modal-fade-in"
            onClick={() => setResumeModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div
              className="relative z-10 max-w-2xl w-full animate-modal-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setResumeModalOpen(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="mb-6 bg-[#0b0f19] border border-indigo-500/20 rounded-xl p-6">
                <div className="text-xs uppercase font-mono tracking-wider text-indigo-400 mb-4">System Architecture</div>
                <div className="flex items-center justify-between gap-3 text-[10px] md:text-xs font-mono overflow-x-auto pb-2">
                  {["Resume PDF", "spaCy NLP", "Feature Extract", "Cosine Match", "Ranking", "Dashboard"].map((step, sidx, arr) => (
                    <React.Fragment key={sidx}>
                      <div className="bg-indigo-600/20 border border-indigo-500/30 rounded px-3 py-2 text-indigo-300 whitespace-nowrap">{step}</div>
                      {sidx < arr.length - 1 && <div className="text-indigo-500">→</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#111827] to-[#0b0f19] p-12 rounded-2xl border border-indigo-500/30 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="inline-block p-4 rounded-full bg-indigo-500/10 mb-2 border border-indigo-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Resume Screening & Candidate Ranking System</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
                    ATS-style NLP engine using spaCy, cosine similarity and explainable AI to rank candidates.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-left pt-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-indigo-400 font-bold mb-1">Core Engine</div>
                      <div className="text-xs text-gray-500">Resume parsing, skill extraction, similarity ranking.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-indigo-400 font-bold mb-1">Explainable AI</div>
                      <div className="text-xs text-gray-500">Transparent classification reasoning layer.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-indigo-400 font-bold mb-1">Design Decisions</div>
                      <div className="text-xs text-gray-500">Used cosine similarity over transformer embeddings for interpretability and speed. Feature-weighting for recruiter control.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-indigo-400 font-bold mb-1">Engineering</div>
                      <div className="text-xs text-gray-500">Modular pipeline: parsing → extraction → scoring → ranking. Input validation for diverse resume formats.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Campus Flow Modal */}
        {campusFlowModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-modal-fade-in"
            onClick={() => setCampusFlowModalOpen(false)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm"></div>
            <div
              className="relative z-10 max-w-2xl w-full animate-modal-scale-in"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setCampusFlowModalOpen(false)}
                className="absolute -top-12 right-0 text-white/70 hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>

              <div className="mb-6 bg-[#0b0f19] border border-violet-500/20 rounded-xl p-6">
                <div className="text-xs uppercase font-mono tracking-wider text-violet-400 mb-4">System Flow</div>
                <div className="flex items-center justify-between gap-3 text-[10px] md:text-xs font-mono overflow-x-auto pb-2">
                  {["Frontend", "Backend", "AI Theme Engine", "Database"].map((step, sidx, arr) => (
                    <React.Fragment key={sidx}>
                      <div className="bg-violet-600/20 border border-violet-500/30 rounded px-3 py-2 text-violet-300 whitespace-nowrap">{step}</div>
                      {sidx < arr.length - 1 && <div className="text-violet-500">→</div>}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#111827] to-[#0b0f19] p-12 rounded-2xl border border-violet-500/30 shadow-2xl">
                <div className="text-center space-y-6">
                  <div className="inline-block p-4 rounded-full bg-violet-500/10 mb-2 border border-violet-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>
                  </div>
                  <h3 className="text-3xl font-bold text-white">Campus Flow – Event Platform</h3>
                  <p className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto">
                    AI-enhanced modular event management system with dynamic theme generation powered by Gemini AI, supporting 7+ functional modules for end-to-end campus event orchestration.
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-left pt-4">
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-violet-400 font-bold mb-1">AI Theme Engine</div>
                      <div className="text-xs text-gray-500">Gemini-powered dynamic theme generation for event branding and visual identity.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-violet-400 font-bold mb-1">Modular Architecture</div>
                      <div className="text-xs text-gray-500">7+ modules covering registration, scheduling, analytics, and more.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-violet-400 font-bold mb-1">Backend Architecture</div>
                      <div className="text-xs text-gray-500">REST API with Express.js, role-based access control, dynamic event configuration with feature toggles.</div>
                    </div>
                    <div className="p-4 bg-gray-900/50 rounded-lg border border-gray-800">
                      <div className="text-violet-400 font-bold mb-1">AI Pipeline</div>
                      <div className="text-xs text-gray-500">Structured prompt pipeline with Gemini API, JSON schema validation on outputs, sanitized frontend rendering.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Modal Animations */}
        <style>{`
          @keyframes modal-fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes modal-scale-in {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes modal-button-in {
            from { opacity: 0; transform: translateY(-8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-modal-fade-in { animation: modal-fade-in 0.2s ease-out; }
          .animate-modal-scale-in { animation: modal-scale-in 0.3s ease-out; }
          .animate-modal-button-in { animation: modal-button-in 0.3s ease-out 0.15s both; }
        `}</style>

        {/* Progress Toast Notification */}
        {showProgressToast && (
          <div className="fixed bottom-8 right-8 z-[200] animate-modal-fade-in">
            <div className="bg-gradient-to-br from-amber-900/90 to-amber-800/90 backdrop-blur-md px-6 py-4 rounded-xl border border-amber-500/30 shadow-2xl flex items-center gap-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-amber-400">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <div>
                <p className="text-white font-semibold text-sm">Research in Progress</p>
                <p className="text-amber-200 text-xs text-nowrap">Documentation will be available upon completion</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;