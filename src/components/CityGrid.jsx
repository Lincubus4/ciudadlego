import React from 'react';
import { useCity } from '../context/CityContext';
import LegoStreet from './LegoStreet';

const CityGrid = () => {
  const { grid, updateCell } = useCity();

  return (
    <main className="flex-1 bg-green-200 p-8 overflow-auto relative flex justify-center items-center">
      <div className="w-[800px] h-[600px] bg-green-500 rounded-lg shadow-2xl border-4 border-green-700 relative grid grid-cols-8 grid-rows-6 gap-1 p-1">
        {grid.map((cell, i) => (
          <div
            key={i}
            className="bg-green-400/50 border border-green-600/30 rounded-sm transition-colors cursor-pointer flex items-center justify-center relative"
            onClick={() => updateCell(i)}
          >
            {!cell && <span className="text-green-800/20 font-bold select-none">{i}</span>}
            {cell && (
              <LegoStreet
                type={cell.type}
                rotation={cell.rotation}
                lights={cell.lights}
              />
            )}
          </div>
        ))}
      </div>
    </main>
  );
};

export default CityGrid;

