
import React from 'react';
import { IndexData } from '../types';
import PieChartIcon from './PieChartIcon';

interface IndexNodeProps {
  data: IndexData;
  onClick: (data: IndexData) => void;
  isActive: boolean;
}

const IndexNode: React.FC<IndexNodeProps> = ({ data, onClick, isActive }) => {
  return (
    <div 
      onClick={() => onClick(data)}
      className={`group cursor-pointer flex flex-col items-center p-4 transition-all duration-500 rounded-3xl ${isActive ? 'scale-110 shadow-[0_0_30px_rgba(255,255,255,0.1)]' : 'hover:scale-105'}`}
    >
      <div className="relative mb-3">
        <PieChartIcon sectors={data.sectors} color={data.color} />
        {isActive && (
          <div 
            className="absolute inset-0 rounded-full animate-ping opacity-20" 
            style={{ backgroundColor: data.color }}
          />
        )}
      </div>
      <div className="text-center">
        <span className="text-xs font-mono opacity-60 mb-1 block">{data.code}</span>
        <h3 className="text-lg font-bold" style={{ color: isActive ? data.color : 'white' }}>{data.name}</h3>
        <p className="text-[10px] opacity-40 uppercase tracking-widest">{data.id}</p>
      </div>
    </div>
  );
};

export default IndexNode;
