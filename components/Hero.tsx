
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-10 pt-32 pb-20 overflow-hidden dark:bg-black bg-white transition-colors duration-500">
      {/* 装饰性背景文字 */}
      <div className="absolute top-32 right-12 font-mono text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase opacity-60">
        day 01 // init.sys
      </div>
      <div className="absolute bottom-12 left-12 font-mono text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase opacity-60 leading-loose text-left">
        11.feb.2026<br/>
        shanghai_lab
      </div>
      <div className="absolute top-1/2 right-12 transform rotate-90 origin-right font-mono text-[10px] text-gray-300 dark:text-gray-700 tracking-[1em] uppercase">
        stay alive // keep building
      </div>

      {/* 颗粒渐变光斑 */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-neon-purple/10 dark:bg-neon-purple/20 blur-[120px] animate-aurora"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-neon-blue/10 dark:bg-neon-blue/15 blur-[100px] animate-aurora" style={{ animationDelay: '-6s' }}></div>
        
        {/* 垂直参考线 */}
        <div className="absolute left-1/2 top-0 h-full v-line opacity-20 dark:opacity-30"></div>
        <div className="absolute left-1/4 top-0 h-full v-line opacity-5 dark:opacity-10"></div>
        <div className="absolute left-3/4 top-0 h-full v-line opacity-5 dark:opacity-10"></div>
      </div>

      <div className="grid lg:grid-cols-12 gap-0 items-stretch max-w-[1600px] mx-auto w-full">
        {/* 左侧文字 */}
        <div className="lg:col-span-8 py-10 border-l dark:border-white/10 border-black/5 pl-12">
          <div className="mb-10 flex items-center gap-6">
            <span className="font-mono text-[10px] text-neon-blue tracking-[0.4em] uppercase font-bold">Status: Operational</span>
            <div className="flex-1 h-[1px] dark:bg-white/10 bg-black/5"></div>
          </div>
          
          <h1 className="font-display text-8xl md:text-[130px] font-black leading-[0.85] mb-12 tracking-tighter uppercase dark:text-white text-black">
            AI 塑造<br />
            <span className="text-outline">全新现实</span>
          </h1>
          
          <div className="max-w-2xl border-t dark:border-white/10 border-black/5 pt-12">
            <p className="text-gray-500 dark:text-gray-400 text-xl md:text-2xl leading-relaxed mb-16 font-light uppercase tracking-tight">
              Modelverse 与 Sandbox。打造企业级 <span className="dark:text-white text-black font-bold">AI 生产力核心</span>。
            </p>
            
            <div className="flex flex-wrap gap-0">
              <button className="px-14 py-8 dark:bg-white bg-black dark:text-black text-white font-black uppercase text-xs tracking-[0.4em] hover:bg-neon-blue dark:hover:bg-neon-blue transition-all duration-500">
                立即接入系统
              </button>
              <button className="px-14 py-8 border dark:border-white/10 border-black/5 dark:text-white text-black font-black uppercase text-xs tracking-[0.4em] hover:bg-black/5 dark:hover:bg-white/5 transition-all">
                技术白皮书
              </button>
            </div>
          </div>
        </div>

        {/* 右侧直角视觉 */}
        <div className="lg:col-span-4 relative hidden lg:flex items-center justify-center border-l dark:border-white/10 border-black/5 px-10">
           <div className="relative w-full aspect-[4/5] glass-card dark:border-white/10 border-black/5 p-0 flex flex-col group overflow-hidden transition-all duration-500">
              {/* 背景渐变装饰 */}
              <div className="absolute inset-0 bg-gradient-to-br from-neon-blue/5 via-transparent to-neon-purple/5 pointer-events-none"></div>
              
              <div className="p-10 flex-1 flex flex-col justify-between relative z-10">
                <div className="flex justify-between items-start">
                   <div className="font-mono text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-widest">protocol_v2.0</div>
                   <span className="material-icons dark:text-white/20 text-black/10 text-4xl">remember_me</span>
                </div>

                <div className="space-y-4">
                  <div className="h-1 w-20 bg-neon-blue"></div>
                  <h3 className="text-5xl font-black uppercase leading-none tracking-tighter dark:text-white text-black">
                    REMEMBER.<br/>
                    <span className="text-neon-blue">STAY ALIVE.</span>
                  </h3>
                </div>
              </div>

              {/* 底部功能栏 */}
              <div className="border-t dark:border-white/10 border-black/5 p-10 dark:bg-white/5 bg-black/5 flex justify-between items-center group-hover:bg-neon-blue group-hover:text-white dark:group-hover:text-black transition-all duration-500">
                 <span className="font-mono text-xs uppercase tracking-widest dark:text-white text-black">Execute Sandbox</span>
                 <span className="material-icons dark:text-white text-black">arrow_forward</span>
              </div>
           </div>
        </div>
      </div>

      {/* 底部跑马灯 */}
      <div className="absolute bottom-0 left-0 w-full py-12 border-t dark:border-white/10 border-black/5 dark:bg-black bg-white transition-colors duration-500">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1,2,3,4].map(i => (
            <div key={i} className="flex items-center gap-32 mx-16 opacity-10 dark:opacity-10 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-default">
              <span className="text-4xl font-black uppercase tracking-widest font-mono dark:text-white text-black">DeepSeek-V3</span>
              <span className="text-4xl font-black uppercase tracking-widest font-mono dark:text-white text-black">Qwen-Coder</span>
              <span className="text-4xl font-black uppercase tracking-widest font-mono dark:text-white text-black">Llama-3.1</span>
              <span className="text-4xl font-black uppercase tracking-widest font-mono dark:text-white text-black">SDXL-Base</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
