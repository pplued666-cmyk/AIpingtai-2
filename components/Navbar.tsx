
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const html = document.documentElement;
    if (isDark) {
      html.classList.add('dark');
      html.classList.remove('light');
    } else {
      html.classList.remove('dark');
      html.classList.add('light');
    }
  }, [isDark]);

  return (
    <nav className="fixed top-0 w-full z-[100] px-0 py-0">
      <div className="max-w-full mx-auto flex justify-between items-center glass-card px-10 py-6 border-x-0 border-t-0 dark:border-white/10 border-black/5">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-black dark:bg-white flex items-center justify-center text-white dark:text-black font-black text-sm transition-colors duration-500">R</div>
          <span className="font-display font-bold text-xl tracking-tighter uppercase dark:text-white text-black">RunC.AI</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-12 text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500">
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Platform / 平台</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Sandbox / 沙箱</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Case / 案例</a>
          <a href="#" className="hover:text-black dark:hover:text-white transition-colors">Docs / 文档</a>
        </div>

        <div className="flex items-center gap-6">
           <button 
             onClick={() => setIsDark(!isDark)}
             className="w-10 h-10 border dark:border-white/10 border-black/10 flex items-center justify-center text-gray-500 hover:text-black dark:hover:text-white transition-all"
           >
             <span className="material-icons text-lg">{isDark ? 'light_mode' : 'dark_mode'}</span>
           </button>
           <button className="text-[10px] font-mono uppercase tracking-[0.3em] text-gray-500 hover:text-black dark:hover:text-white transition-colors">Login</button>
           <button className="bg-black dark:bg-white text-white dark:text-black px-8 py-3 font-bold text-[10px] uppercase tracking-[0.3em] hover:bg-neon-blue dark:hover:bg-neon-blue hover:text-white transition-all duration-500">Get Started</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
