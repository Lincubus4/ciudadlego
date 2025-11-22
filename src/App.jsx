import React from 'react';
import Header from './components/Header';
import ControlPanel from './components/ControlPanel';
import CityGrid from './components/CityGrid';
import { CityProvider } from './context/CityContext';

function App() {
  return (
    <CityProvider>
      <div className="h-screen flex flex-col overflow-hidden bg-gray-50">
        <Header />
        <div className="flex flex-1 overflow-hidden">
          <ControlPanel />
          <CityGrid />
        </div>
      </div>
    </CityProvider>
  )
}

export default App
