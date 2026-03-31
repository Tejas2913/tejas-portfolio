import React from 'react';

const TechnicalWriteups: React.FC = () => {
    const writeups = [
        {
            title: "I Implemented XOR End-to-End: Keras, PyTorch, and Raw TensorFlow — Here's What I Learned",
            category: "Deep Learning",
            categoryColor: "violet",
            description: "A comparative engineering analysis of implementing XOR across three deep learning frameworks — highlighting abstraction layers, gradient flow handling, and architectural trade-offs.",
            highlights: [
                "Manual backpropagation understanding",
                "Framework abstraction comparison",
                "Optimization behavior differences",
                "Low-level vs high-level API trade-offs"
            ],
            link: "https://medium.com/@tejasrm2004/i-implemented-xor-end-to-end-keras-pytorch-and-raw-tensorflow-heres-what-i-learned-0ca4a2152cbd",
            type: "Medium Article",
            linkText: "Read Article"
        },
        {
            title: "RNN vs LSTM vs LSTM with Dropout — A Practical Comparison",
            category: "Deep Learning",
            categoryColor: "indigo",
            description: "A hands-on engineering comparison of recurrent architectures — from vanilla RNNs to LSTM with Dropout — examining how each handles sequential data, gradient flow, and overfitting in practice.",
            highlights: [
                "Vanishing gradient behavior in plain RNNs",
                "LSTM cell mechanics and gating logic",
                "Dropout regularization in recurrent networks",
                "Practical performance trade-offs"
            ],
            link: "https://medium.com/@tejasrm2004/rnn-vs-lstm-vs-lstm-with-dropout-1a127aa8bea0",
            type: "Medium Article",
            linkText: "Read Article"
        },
        {
            title: "Building a Hybrid NLP Fraud Detection System with Ensemble Learning and Explainable AI",
            category: "NLP & Security",
            categoryColor: "cyan",
            description: "A deep-dive into architecting a production-grade fraud detection pipeline that fuses NLP-based text analysis with ensemble classifiers — augmented with SHAP-driven explainability for transparent, auditable predictions.",
            highlights: [
                "Hybrid NLP + structured feature fusion",
                "Ensemble learning with stacking & voting",
                "SHAP-based explainable AI integration",
                "End-to-end fraud detection pipeline design"
            ],
            link: "https://medium.com/@tejasrm2004/building-a-hybrid-nlp-fraud-detection-system-with-ensemble-learning-and-explainable-ai-330d6f55620b",
            type: "Medium Article",
            linkText: "Read Article"
        }
    ];

    const getCategoryColor = (color: string) => {
        if (color === 'indigo') return 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10';
        if (color === 'cyan') return 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10';
        return 'text-violet-400 border-violet-500/30 bg-violet-500/10';
    };

    const getHoverGlow = (color: string) => {
        if (color === 'indigo') return 'hover:shadow-[0_0_30px_rgba(99,102,241,0.15)]';
        if (color === 'cyan') return 'hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]';
        return 'hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]';
    };

    return (
        <section id="research" className="px-6 scroll-mt-24">
            <div className="max-w-[1100px] mx-auto">
                <div className="flex items-center gap-4 mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">Technical Writeups</h2>
                    <div className="h-px bg-indigo-500/30 flex-grow"></div>
                </div>

                <p className="text-gray-400 text-lg mb-12 max-w-[700px]">
                    In-depth technical analysis and engineering insights from AI/ML implementations.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {writeups.map((writeup, idx) => (
                        <div
                            key={idx}
                            className={`bg-[#111827] p-8 rounded-2xl border border-gray-800 transition-all duration-300 reveal opacity-0 translate-y-8 ease-out group hover:-translate-y-1 hover:border-gray-700 ${getHoverGlow(writeup.categoryColor)}`}
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <span className={`text-[10px] uppercase font-mono tracking-widest px-2 py-1 rounded border ${getCategoryColor(writeup.categoryColor)}`}>
                                    {writeup.category}
                                </span>
                                <span className="text-gray-600">•</span>
                                <span className="text-[10px] uppercase font-mono tracking-widest text-gray-500">
                                    {writeup.type}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-indigo-400 transition-colors">
                                {writeup.title}
                            </h3>

                            <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                                {writeup.description}
                            </p>

                            <div className="mb-6">
                                <div className="text-xs uppercase font-mono tracking-wider text-gray-500 mb-3">Key Topics</div>
                                <ul className="space-y-2">
                                    {writeup.highlights.map((highlight, hIdx) => (
                                        <li key={hIdx} className="flex items-start gap-2 text-sm text-gray-400">
                                            <span className={`mt-1 ${writeup.categoryColor === 'indigo' ? 'text-indigo-500' : writeup.categoryColor === 'cyan' ? 'text-cyan-500' : 'text-violet-500'}`}>▹</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <a
                                href={writeup.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-lg transition-all ${writeup.categoryColor === 'indigo'
                                    ? 'bg-indigo-600/10 text-indigo-400 hover:bg-indigo-600/20 border border-indigo-500/30'
                                    : writeup.categoryColor === 'cyan'
                                    ? 'bg-cyan-600/10 text-cyan-400 hover:bg-cyan-600/20 border border-cyan-500/30'
                                    : 'bg-violet-600/10 text-violet-400 hover:bg-violet-600/20 border border-violet-500/30'
                                    }`}
                            >
                                {writeup.linkText}
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M7 17L17 7"></path>
                                    <path d="M7 7h10v10"></path>
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechnicalWriteups;
