
import React, { useState, useEffect } from 'react';
import { INDICES, PRACTICAL_STEPS } from './constants';
import { IndexData, PracticalStep } from './types';
import IndexNode from './components/IndexNode';
import DetailPanel from './components/DetailPanel';
import { TrendingUp, Compass, Target } from 'lucide-react';

const App: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<IndexData | PracticalStep | null>(null);
  const [selectionType, setSelectionType] = useState<'index' | 'step' | null>(null);

  const handleIndexClick = (data: IndexData) => {
    setSelectedItem(data);
    setSelectionType('index');
  };

  const handleStepClick = (step: PracticalStep) => {
    setSelectedItem(step);
    setSelectionType('step');
  };

  const closePanel = () => {
    setSelectedItem(null);
    setSelectionType(null);
  };

  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-4 lg:p-8 overflow-hidden">
      
      {/* Background Grid/Stars Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-10" 
             style={{ backgroundImage: 'radial-gradient(circle, #334155 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full" />
      </div>

      {/* Header */}
      <header className="z-10 text-center mb-12 animate-in slide-in-from-top duration-1000">
        <h1 className="text-4xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white mb-4">
          A股指数资金地图
        </h1>
        <p className="text-blue-300/60 uppercase tracking-widest font-semibold text-sm">
          Dynamic Market Insight Explorer
        </p>
      </header>

      {/* Main Interactive Stage */}
      <main className="relative z-10 w-full max-w-6xl grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
        
        {/* The indices arranged in a grid */}
        {INDICES.map((idx, i) => (
          <div key={idx.id} className="animate-in fade-in duration-1000" style={{ animationDelay: `${i * 100}ms` }}>
            <IndexNode 
              data={idx} 
              onClick={handleIndexClick} 
              isActive={selectedItem?.id === idx.id} 
            />
          </div>
        ))}

        {/* The Snake Strategy (Winding Path) */}
        <div className="col-span-2 md:col-span-4 mt-16 flex flex-col items-center">
          <div className="relative w-full max-w-4xl h-32 md:h-48 flex items-center justify-center">
            {/* SVG Snake Background */}
            <svg className="absolute inset-0 w-full h-full z-0 overflow-visible" viewBox="0 0 1000 200">
              <path 
                className="snake-path"
                d="M -50 100 Q 250 -50, 500 100 T 1050 100" 
                fill="none" 
                stroke="url(#snakeGradient)" 
                strokeWidth="12" 
                strokeLinecap="round" 
              />
              <defs>
                <linearGradient id="snakeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="50%" stopColor="#10b981" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </svg>

            {/* Practical Steps along the snake */}
            <div className="absolute inset-0 flex items-center justify-around z-10 px-4">
              {PRACTICAL_STEPS.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step)}
                  className="group relative flex flex-col items-center bg-slate-900/80 backdrop-blur border border-white/10 p-4 rounded-2xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-2 shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:animate-pulse">
                    {step.id === 1 && <Compass size={20} />}
                    {step.id === 2 && <TrendingUp size={20} />}
                    {step.id === 3 && <Target size={20} />}
                  </div>
                  <div className="text-center">
                    <span className="text-[10px] opacity-40 uppercase block tracking-tighter">Step {step.id}</span>
                    <span className="font-bold text-sm">{step.title}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
          
          <div className="mt-8 text-center max-w-lg glass-panel p-4 rounded-2xl border-white/5 animate-pulse">
            <p className="text-xs text-blue-300/80 tracking-widest uppercase">
              🐍 沿着“实战三步法”蛇形路径点击，获取专业交易建议
            </p>
          </div>
        </div>
      </main>

      {/* Footer Info */}
      <footer className="z-10 mt-20 text-center opacity-40 text-[10px] tracking-widest uppercase">
        <p>A-Share Indices Guide &copy; 2024 • Finance Interactive Visuals</p>
      </footer>

      {/* Detail Panel Modal */}
      <DetailPanel 
        selection={selectedItem} 
        type={selectionType} 
        onClose={closePanel} 
      />
    </div>
  );
};

export default App;
