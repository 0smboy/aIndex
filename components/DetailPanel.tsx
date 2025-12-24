
import React from 'react';
import { IndexData, PracticalStep } from '../types';
import { Info, TrendingUp, Target, ShieldCheck, Activity } from 'lucide-react';

interface DetailPanelProps {
  selection: IndexData | PracticalStep | null;
  type: 'index' | 'step' | null;
  onClose: () => void;
}

const DetailPanel: React.FC<DetailPanelProps> = ({ selection, type, onClose }) => {
  if (!selection) return null;

  const isIndex = type === 'index' && 'definition' in selection;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
      <div className="glass-panel w-full max-w-lg p-8 rounded-3xl relative overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Background Accent */}
        <div 
          className="absolute -top-24 -right-24 w-64 h-64 rounded-full opacity-20 blur-3xl"
          style={{ backgroundColor: isIndex ? (selection as IndexData).color : '#3b82f6' }}
        />

        <button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>

        {isIndex ? (
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-2 py-1 bg-white/10 rounded text-xs font-mono">{(selection as IndexData).code}</span>
                <span className="text-sm opacity-50">{(selection as IndexData).definition}</span>
              </div>
              <h2 className="text-4xl font-bold" style={{ color: (selection as IndexData).color }}>{(selection as IndexData).name}</h2>
            </div>

            <div className="space-y-4">
              <section className="bg-white/5 p-4 rounded-xl border border-white/5">
                <h4 className="text-xs uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
                  <Target size={14} /> 指数比喻
                </h4>
                <p className="text-lg">{(selection as IndexData).metaphor}</p>
              </section>

              <div className="grid grid-cols-2 gap-4">
                <section className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs uppercase tracking-widest text-green-400 mb-2 flex items-center gap-2">
                    <ShieldCheck size={14} /> 核心构成
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {(selection as IndexData).composition.map((item, i) => (
                      <span key={i} className="text-xs bg-white/10 px-2 py-1 rounded">
                        {item}
                      </span>
                    ))}
                  </div>
                </section>
                <section className="bg-white/5 p-4 rounded-xl border border-white/5">
                  <h4 className="text-xs uppercase tracking-widest text-orange-400 mb-2 flex items-center gap-2">
                    <Activity size={14} /> 权重概览
                  </h4>
                  <div className="space-y-1">
                    {(selection as IndexData).sectors.map((s, i) => (
                      <div key={i} className="flex justify-between text-[10px]">
                        <span>{s.name}</span>
                        <span>{s.weight}%</span>
                      </div>
                    ))}
                  </div>
                </section>
              </div>

              <section className="bg-blue-500/10 p-4 rounded-xl border border-blue-500/20">
                <h4 className="text-xs uppercase tracking-widest text-blue-300 mb-2 flex items-center gap-2">
                  <TrendingUp size={14} /> 核心意义
                </h4>
                <p className="text-sm opacity-80 leading-relaxed">{(selection as IndexData).significance}</p>
              </section>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="text-center">
              <span className="text-blue-500 font-bold tracking-widest uppercase text-sm">{(selection as PracticalStep).subtitle}</span>
              <h2 className="text-4xl font-bold mt-2">{(selection as PracticalStep).title}</h2>
            </div>
            
            <div className="bg-white/5 p-6 rounded-2xl border border-white/5 space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500/20 rounded-full text-blue-400">
                  <Info size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-lg text-white/90">操作指南</h4>
                  <p className="text-white/60 leading-relaxed">{(selection as PracticalStep).description}</p>
                </div>
              </div>
              
              <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
                <p className="text-green-300 font-medium">💡 实战策略：</p>
                <p className="text-sm text-green-100/80 mt-1 italic">{(selection as PracticalStep).advice}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailPanel;
