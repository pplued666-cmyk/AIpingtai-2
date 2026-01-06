
import React from 'react';
import { Advantage } from '../types';

const advantages: Advantage[] = [
  {
    title: "Sovereign Compliance",
    color: "border-blue-500",
    items: ["GDPR & SOC2 Type II Certified", "On-premise deployment options", "Zero-data persistence modes"]
  },
  {
    title: "Parallel Execution",
    color: "border-purple-500",
    items: ["Massively parallel batching", "vLLM-backed inference speed", "Elastic GPU pooling"]
  },
  {
    title: "Adaptive Scaling",
    color: "border-pink-500",
    items: ["Global edge CDN routing", "Auto-balancing inference nodes", "Multi-region fallback strategy"]
  }
];

const Advantages: React.FC = () => {
  return (
    <section className="py-32 px-8 max-w-[1440px] mx-auto">
      <div className="flex items-center gap-3 mb-12">
        <span className="text-xs font-mono uppercase tracking-[0.3em] text-primary font-bold">03 / PERFORMANCE EDGE</span>
        <div className="h-[1px] bg-gradient-to-r from-primary to-transparent w-24"></div>
      </div>

      <h2 className="font-display text-5xl font-bold mb-24 text-white max-w-2xl leading-[1.1] tracking-tight">
        Engineered for the <span className="text-primary">extreme reliability</span> demanded by the Fortune 500.
      </h2>

      <div className="grid lg:grid-cols-3 gap-16">
        {advantages.map((adv, idx) => (
          <div key={idx} className={`border-l border-white/10 pl-10 py-4 group relative`}>
            <div className={`absolute left-0 top-0 w-[2px] h-0 group-hover:h-full transition-all duration-700 bg-gradient-to-b from-${adv.color.split('-')[1]}-500 to-transparent`}></div>
            <h3 className="font-display font-bold text-2xl text-white mb-8 group-hover:translate-x-2 transition-transform">
              {adv.title}
            </h3>
            <ul className="space-y-6">
              {adv.items.map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-gray-400 group-hover:text-gray-300 transition-colors">
                  <span className={`material-icons text-sm mt-1 text-${adv.color.split('-')[1]}-500`}>check_circle</span>
                  <span className="text-sm leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Advantages;
