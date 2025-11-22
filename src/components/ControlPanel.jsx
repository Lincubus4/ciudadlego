import React from 'react';
import { useCity } from '../context/CityContext';

const ControlPanel = () => {
    const { selectedTool, setSelectedTool, rotateTool, rotation, toggleAllLights } = useCity();

    const tools = [
        { id: 'straight', label: '🛣️ Calle Recta', color: 'blue' },
        { id: 'curve', label: '↪️ Curva', color: 'blue' },
        { id: 'intersection', label: '➕ Intersección', color: 'blue' },
        { id: 'eraser', label: '🧹 Borrar', color: 'gray' },
    ];

    return (
        <aside className="w-64 bg-gray-100 border-r-4 border-gray-300 p-4 flex flex-col gap-4 h-[calc(100vh-80px)] overflow-y-auto">
            <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-2">Herramientas</h2>

            <div className="flex flex-col gap-2">
                {tools.map(tool => (
                    <button
                        key={tool.id}
                        onClick={() => setSelectedTool(tool.id)}
                        className={`
              font-bold py-2 px-4 rounded border-b-4 active:border-b-0 active:mt-1 transition-all
              ${selectedTool === tool.id
                                ? `bg-${tool.color}-600 border-${tool.color}-800 ring-2 ring-offset-2 ring-${tool.color}-400`
                                : `bg-${tool.color}-500 hover:bg-${tool.color}-600 border-${tool.color}-700 text-white`}
            `}
                    >
                        {tool.label}
                    </button>
                ))}

                <button
                    onClick={rotateTool}
                    className="mt-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded border-b-4 border-yellow-700 active:border-b-0 active:mt-1 transition-all"
                >
                    🔄 Rotar ({rotation}°)
                </button>
            </div>

            <h2 className="text-xl font-bold text-gray-700 border-b-2 border-gray-300 pb-2 mt-4">Luces</h2>
            <div className="flex flex-col gap-2">
                <button
                    onClick={() => setSelectedTool('light-toggle')}
                    className={`
            font-bold py-2 px-4 rounded border-b-4 active:border-b-0 active:mt-1 transition-all
            ${selectedTool === 'light-toggle'
                            ? 'bg-yellow-600 border-yellow-800 ring-2 ring-offset-2 ring-yellow-400'
                            : 'bg-yellow-500 hover:bg-yellow-600 border-yellow-700 text-white'}
          `}
                >
                    👆 Control Individual
                </button>
                <button
                    onClick={() => toggleAllLights('green')}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded border-b-4 border-green-700 active:border-b-0 active:mt-1 transition-all"
                >
                    🟢 Encender Todo
                </button>
                <button
                    onClick={() => toggleAllLights('red')}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded border-b-4 border-red-700 active:border-b-0 active:mt-1 transition-all"
                >
                    🔴 Apagar Todo
                </button>
            </div>
        </aside>
    );
};

export default ControlPanel;

