
import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="py-40 px-0 dark:bg-black bg-white transition-colors duration-500">
      <div className="grid md:grid-cols-2 gap-0 border-y dark:border-white/10 border-black/5">
        <div className="relative group border-r dark:border-white/10 border-black/5">
          <div className="relative glass-card p-24 h-full border-none dark:hover:bg-white/5 hover:bg-black/[0.02] transition-all">
            <div className="w-16 h-16 dark:bg-white bg-black dark:text-black text-white flex items-center justify-center mb-12">
               <span className="material-icons text-3xl">fingerprint</span>
            </div>
            <div className="font-mono text-[10px] text-neon-blue mb-4 tracking-[0.4em] uppercase font-bold">Core Security / 安全</div>
            <h3 className="font-display text-5xl font-black mb-8 uppercase tracking-tighter dark:text-white text-black">金融级数据隔离</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xl leading-relaxed mb-12 max-w-lg">
              Sandbox 环境物理级独立。采用独有的隔离协议，确保数据全链路合规，满足企业最高级别的隐私保护。
            </p>
            <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.4em] dark:text-white/40 text-black/40 group-hover:text-black dark:group-hover:text-white transition-colors">
              <span>Read Spec</span>
              <span className="material-icons text-sm">arrow_right_alt</span>
            </div>
          </div>
        </div>

        <div className="relative group">
          <div className="relative glass-card p-24 h-full border-none dark:hover:bg-white/5 hover:bg-black/[0.02] transition-all">
            <div className="w-16 h-16 dark:bg-white bg-black dark:text-black text-white flex items-center justify-center mb-12">
               <span className="material-icons text-3xl">terminal</span>
            </div>
            <div className="font-mono text-[10px] text-neon-orange mb-4 tracking-[0.4em] uppercase font-bold">Model Access / 接入</div>
            <h3 className="font-display text-5xl font-black mb-8 uppercase tracking-tighter dark:text-white text-black">开箱即用引擎</h3>
            <p className="text-gray-500 dark:text-gray-400 text-xl leading-relaxed mb-12 max-w-lg">
              Modelverse 模型市场，精选全球 SOTA 模型。无需配置，一键调用 API 即可将 AI 能力注入您的核心业务。
            </p>
            <div className="flex items-center gap-6 text-[10px] font-mono uppercase tracking-[0.4em] dark:text-white/40 text-black/40 group-hover:text-black dark:group-hover:text-white transition-colors">
              <span>View API</span>
              <span className="material-icons text-sm">arrow_right_alt</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
