
import React from 'react';

const Marketplace: React.FC = () => {
  return (
    <section className="py-40 px-10 max-w-[1600px] mx-auto dark:bg-black bg-white transition-colors duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start mb-24 border-l-4 dark:border-white border-black pl-10">
        <div className="max-w-2xl">
          <div className="font-mono text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-[0.5em] mb-4">Centralized Model Registry</div>
          <h2 className="font-display text-7xl font-black uppercase leading-[0.9] tracking-tighter dark:text-white text-black">
            全球精选<br />
            <span className="text-outline">顶级模型</span>
          </h2>
        </div>
        <button className="mt-8 px-12 py-5 border dark:border-white border-black text-[10px] font-black uppercase tracking-widest dark:text-white text-black hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
          EXPLORE CATALOG_01
        </button>
      </div>

      <div className="border-t dark:border-white/10 border-black/5">
        {[
          { name: 'DeepSeek-V3', info: '通用对话 / 代码生成', score: '99.2', color: 'neon-blue' },
          { name: 'Qwen-72B-Chat', info: '超长上下文 / 逻辑推理', score: '98.5', color: 'neon-purple' },
          { name: 'Stable Diffusion 3', info: '专业级图像生成', score: '99.0', color: 'neon-orange' }
        ].map((model, i) => (
          <div key={i} className="group border-b dark:border-white/10 border-black/5 p-12 flex flex-col md:flex-row items-center justify-between gap-8 dark:hover:bg-white/5 hover:bg-black/[0.02] transition-all">
            <div className="flex items-center gap-12">
              <div className="font-mono text-2xl dark:text-white/20 text-black/10 group-hover:text-black dark:group-hover:text-white transition-colors italic">0{i+1}</div>
              <div>
                <h4 className="text-3xl font-black uppercase tracking-tight mb-2 dark:text-white text-black group-hover:text-neon-blue transition-colors">{model.name}</h4>
                <p className="font-mono text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">{model.info}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-16">
               <div className="text-right hidden md:block border-r dark:border-white/10 border-black/5 pr-16">
                  <div className="font-mono text-[10px] text-gray-400 dark:text-gray-700 uppercase mb-1">Confidence Score</div>
                  <div className={`text-xl font-black text-${model.color}`}> {model.score}% </div>
               </div>
               <button className="w-16 h-16 border dark:border-white/10 border-black/5 flex items-center justify-center dark:text-white text-black dark:hover:bg-white hover:bg-black dark:hover:text-black hover:text-white transition-all">
                 <span className="material-icons">add</span>
               </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Marketplace;
