import React from 'react';

const LegoStreet = ({ type, rotation = 0, onClick, lights = [] }) => {
  // Base styles for a LEGO plate
  const baseStyle = "w-full h-full bg-gray-400 relative shadow-lg border-b-4 border-r-4 border-gray-600 rounded-sm";

  // Stud generator
  const renderStuds = () => {
    // 4x4 grid of studs for a standard plate look
    const studs = [];
    for (let i = 0; i < 16; i++) {
      studs.push(
        <div key={i} className="w-3 h-3 bg-gray-400 rounded-full shadow-[1px_1px_2px_rgba(0,0,0,0.3),inset_1px_1px_1px_rgba(255,255,255,0.5)] mx-auto my-auto"></div>
      );
    }
    return <div className="grid grid-cols-4 grid-rows-4 w-full h-full absolute top-0 left-0 p-1 gap-1 pointer-events-none">{studs}</div>;
  };

  // Render lights if present
  const renderLights = () => {
    if (!lights || lights.length === 0) return null;

    return lights.map((light, idx) => (
      <div
        key={light.id}
        className={`absolute w-4 h-4 rounded-full border-2 border-gray-700 shadow-md z-10 transition-colors duration-300 ${light.color === 'green' ? 'bg-green-500 shadow-[0_0_10px_#22c55e]' : 'bg-red-600 shadow-[0_0_5px_#ef4444]'}`}
        style={{
          top: idx === 0 ? '10%' : 'auto',
          bottom: idx === 1 ? '10%' : 'auto',
          left: idx === 0 ? '10%' : 'auto',
          right: idx === 1 ? '10%' : 'auto',
        }}
      >
        <div className="absolute inset-0 bg-white opacity-30 rounded-full transform scale-50 translate-x-[-20%] translate-y-[-20%]"></div>
      </div>
    ));
  };

  // Street markings based on type
  const renderMarkings = () => {
    switch (type) {
      case 'straight':
        return (
          <div className="absolute inset-0 flex flex-col justify-center items-center transform" style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="w-full h-16 bg-gray-800 flex items-center justify-center">
              <div className="w-full h-1 bg-dashed border-t-2 border-white border-dashed opacity-80"></div>
            </div>
          </div>
        );
      case 'curve':
        return (
          <div className="absolute inset-0 overflow-hidden transform" style={{ transform: `rotate(${rotation}deg)` }}>
            <div className="w-32 h-32 border-[30px] border-gray-800 rounded-full absolute -top-4 -left-4"></div>
            <div className="w-32 h-32 border-[2px] border-white border-dashed rounded-full absolute top-[10px] left-[10px] pointer-events-none"></div>
          </div>
        );
      case 'intersection':
        return (
          <div className="absolute inset-0 bg-gray-800 flex items-center justify-center">
            <div className="w-full h-1 bg-white opacity-80 absolute"></div>
            <div className="h-full w-1 bg-white opacity-80 absolute"></div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`${baseStyle} overflow-hidden cursor-pointer hover:brightness-110 transition-all`} onClick={onClick}>
      {renderStuds()}
      {renderMarkings()}
      {renderLights()}
    </div>
  );
};

export default LegoStreet;
