
import React from 'react';

interface Sector {
  name: string;
  weight: number;
}

interface PieChartIconProps {
  sectors: Sector[];
  color: string;
  size?: number;
}

const PieChartIcon: React.FC<PieChartIconProps> = ({ sectors, color, size = 120 }) => {
  let accumulatedPercent = 0;
  
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" className="drop-shadow-xl transform transition-transform group-hover:scale-110">
      <circle cx="50" cy="50" r="45" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
      {sectors.map((sector, idx) => {
        const startPercent = accumulatedPercent;
        accumulatedPercent += sector.weight;
        const endPercent = accumulatedPercent;

        // Path calculation for a pie slice
        const x1 = 50 + 40 * Math.cos(2 * Math.PI * (startPercent / 100 - 0.25));
        const y1 = 50 + 40 * Math.sin(2 * Math.PI * (startPercent / 100 - 0.25));
        const x2 = 50 + 40 * Math.cos(2 * Math.PI * (endPercent / 100 - 0.25));
        const y2 = 50 + 40 * Math.sin(2 * Math.PI * (endPercent / 100 - 0.25));
        
        const largeArcFlag = sector.weight > 50 ? 1 : 0;
        
        const pathData = `
          M 50 50
          L ${x1} ${y1}
          A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2}
          Z
        `;

        return (
          <path
            key={idx}
            d={pathData}
            fill={color}
            opacity={1 - (idx * 0.2)}
            className="transition-opacity duration-300"
          />
        );
      })}
      {/* Center hole for donut style */}
      <circle cx="50" cy="50" r="15" fill="#0f172a" />
    </svg>
  );
};

export default PieChartIcon;
