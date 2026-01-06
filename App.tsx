
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Marketplace from './components/Marketplace';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-neon-blue selection:text-black dark:bg-black bg-white transition-colors duration-500">
      <Navbar />
      
      <main className="relative">
        {/* 全局背景氛围光 & 装饰线 */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
             {/* 噪点色块 */}
             <div className="absolute top-1/3 left-1/4 w-[80%] h-[80%] bg-neon-blue/5 blur-[160px] animate-aurora"></div>
             <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-neon-purple/5 blur-[160px] animate-aurora" style={{animationDelay: '-5s'}}></div>
             
             {/* 极简网格背景 */}
             <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(currentColor 1px, transparent 1px), linear-gradient(90deg, currentColor 1px, transparent 1px)', backgroundSize: '100px 100px' }}></div>
        </div>

        <Hero />
        
        <Features />

        <Marketplace />
        
        {/* Agent Sandbox Sub-Section */}
        <section className="py-40 px-10 max-w-[1600px] mx-auto relative border-t dark:border-white/10 border-black/5">
          <div className="mb-32 flex flex-col md:flex-row justify-between items-end gap-10">
            <h2 className="font-display text-8xl font-black uppercase tracking-tighter leading-none dark:text-white text-black">
              Agent<br />
              <span className="text-outline">智能沙箱</span>
            </h2>
            <div className="flex flex-wrap gap-2">
               {['ZERO_TRUST', 'MICROVM_ISOLATION', 'AUTO_SCALE'].map(tag => (
                  <span key={tag} className="px-4 py-2 border dark:border-white/10 border-black/5 font-mono text-[9px] text-gray-500 uppercase tracking-widest">
                     {tag}
                  </span>
               ))}
            </div>
          </div>
          
          <div className="grid lg:grid-cols-3 border-t dark:border-white/10 border-black/5">
            <div className="p-16 border-r dark:border-white/10 border-black/5 group dark:hover:bg-white/5 hover:bg-black/[0.02] transition-all">
              <span className="font-mono text-4xl dark:text-white/5 text-black/5 mb-12 block">01 / ISO</span>
              <h3 className="text-3xl font-black uppercase mb-8 dark:text-white text-black">MicroVM 隔离</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light">基于 Firecracker 的极简内核隔离。资源占用仅为传统方案 1/10，确保企业数据绝对安全。</p>
            </div>
            <div className="p-16 border-r dark:border-white/10 border-black/5 group dark:hover:bg-white/5 hover:bg-black/[0.02] transition-all">
              <span className="font-mono text-4xl dark:text-white/5 text-black/5 mb-12 block">02 / SPD</span>
              <h3 className="text-3xl font-black uppercase mb-8 dark:text-white text-black">秒级启动</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light">Snapshot 快照技术实现毫秒级环境恢复，Agent 调度不再有任何等待延迟。</p>
            </div>
            <div className="p-16 group dark:hover:bg-white/5 hover:bg-black/[0.02] transition-all">
              <span className="font-mono text-4xl dark:text-white/5 text-black/5 mb-12 block">03 / HUB</span>
              <h3 className="text-3xl font-black uppercase mb-8 dark:text-white text-black">统一开发入口</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light">内置所有主流开发栈与调试工具。一个接口，连接无限的智能算力与生产力。</p>
            </div>
          </div>
        </section>

        {/* 最终行动呼吁 (Impact CTA) */}
        <section className="py-60 px-10 border-t dark:border-white/10 border-black/5 text-center relative overflow-hidden">
           <div className="absolute top-20 left-1/2 -translate-x-1/2 h-40 v-line opacity-10 dark:opacity-20"></div>
           <h2 className="font-display text-7xl md:text-[150px] font-black uppercase tracking-tighter leading-none mb-24 mt-20 dark:text-white text-black">
              READY TO<br />
              <span className="text-outline">EVOLVE?</span>
           </h2>
           <div className="flex flex-col md:flex-row justify-center gap-0 max-w-2xl mx-auto border dark:border-white/10 border-black/5 shadow-2xl">
              <button className="flex-1 px-12 py-10 dark:bg-white bg-black dark:text-black text-white font-black uppercase tracking-[0.4em] text-xs hover:bg-neon-blue dark:hover:bg-neon-blue hover:text-white transition-all duration-500">
                START_TRIAL
              </button>
              <button className="flex-1 px-12 py-10 bg-transparent dark:text-white text-black font-black uppercase tracking-[0.4em] text-xs hover:bg-black/5 dark:hover:bg-white/5 transition-all border-l dark:border-white/10 border-black/5">
                CONTACT_SUPPORT
              </button>
           </div>
        </section>
      </main>

      <footer className="py-32 px-10 border-t dark:border-white/10 border-black/5 dark:bg-black bg-white transition-colors duration-500">
        <div className="max-w-[1600px] mx-auto grid md:grid-cols-4 gap-24">
          <div className="col-span-2">
            <div className="flex items-center gap-4 mb-12">
              <div className="w-10 h-10 dark:bg-white bg-black flex items-center justify-center dark:text-black text-white font-black">R</div>
              <span className="font-display font-bold text-2xl tracking-tighter uppercase dark:text-white text-black">RunC.AI</span>
            </div>
            <p className="text-gray-400 dark:text-gray-600 max-w-md mb-16 font-mono text-xs leading-relaxed uppercase tracking-wider">
              Building the next generation of AI infrastructure. <br/>
              Extreme performance. Industrial reliability.
            </p>
            <div className="flex gap-12">
               <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors">TWITTER</span>
               <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors">GITHUB</span>
               <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500 hover:text-black dark:hover:text-white cursor-pointer transition-colors">DISCORD</span>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.5em] dark:text-white/40 text-black/40">SYSTEM / 平台</h4>
            <ul className="space-y-6 font-mono text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest">
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Registry</li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Sandbox</li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Compute</li>
            </ul>
          </div>
          <div className="flex flex-col gap-10">
            <h4 className="font-mono text-[10px] font-black uppercase tracking-[0.5em] dark:text-white/40 text-black/40">NODE / 联系</h4>
            <ul className="space-y-6 font-mono text-xs text-gray-400 dark:text-gray-600 uppercase tracking-widest">
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">HQ: Shanghai</li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Status: Online</li>
              <li className="hover:text-black dark:hover:text-white cursor-pointer transition-colors">Security</li>
            </ul>
          </div>
        </div>
        <div className="max-w-[1600px] mx-auto mt-32 pt-12 border-t dark:border-white/5 border-black/5 font-mono text-[9px] uppercase tracking-[0.5em] text-gray-400 dark:text-gray-800 flex justify-between items-center">
           <span>© 2026 RunC.AI_INFRASTRUCTURE.</span>
           <div className="flex gap-12">
             <span>LOCAL: 127.0.0.1</span>
             <span>VER: 4.1.0_LTS</span>
           </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
