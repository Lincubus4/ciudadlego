import React, { createContext, useState, useContext } from 'react';

const CityContext = createContext();

export const useCity = () => useContext(CityContext);

export const CityProvider = ({ children }) => {
    // Grid state: 8x6 grid (48 cells)
    // Each cell: { type: null | 'straight' | 'curve' | 'intersection', rotation: 0, lights: [] }
    const [grid, setGrid] = useState(Array(48).fill(null));

    // Selected tool: 'straight', 'curve', 'intersection', 'eraser', 'light-toggle'
    const [selectedTool, setSelectedTool] = useState('straight');

    // Selected rotation for placement
    const [rotation, setRotation] = useState(0);

    const updateCell = (index) => {
        setGrid(prev => {
            const newGrid = [...prev];

            if (selectedTool === 'eraser') {
                newGrid[index] = null;
            } else if (['straight', 'curve', 'intersection'].includes(selectedTool)) {
                // Initialize with default lights based on type
                const defaultLights = [];
                if (selectedTool === 'intersection') {
                    defaultLights.push({ id: `light-${index}-1`, color: 'red', active: true });
                    defaultLights.push({ id: `light-${index}-2`, color: 'red', active: true });
                }

                newGrid[index] = {
                    type: selectedTool,
                    rotation: rotation,
                    lights: defaultLights
                };
            } else if (selectedTool === 'light-toggle') {
                // Toggle lights in the cell if it exists
                if (newGrid[index] && newGrid[index].lights.length > 0) {
                    const newLights = newGrid[index].lights.map(l => ({
                        ...l,
                        color: l.color === 'red' ? 'green' : 'red'
                    }));
                    newGrid[index] = { ...newGrid[index], lights: newLights };

                    // Send command to ESP32
                    // For now just logging the first light change
                    console.log("Toggling lights for cell", index);
                }
            }

            return newGrid;
        });
    };

    const toggleAllLights = (color) => {
        setGrid(prev => prev.map(cell => {
            if (!cell || !cell.lights.length) return cell;
            return {
                ...cell,
                lights: cell.lights.map(l => ({ ...l, color }))
            };
        }));
    };

    const rotateTool = () => {
        setRotation(prev => (prev + 90) % 360);
    };

    return (
        <CityContext.Provider value={{
            grid,
            updateCell,
            selectedTool,
            setSelectedTool,
            rotation,
            rotateTool,
            toggleAllLights
        }}>
            {children}
        </CityContext.Provider>
    );
};
