import React from 'react';

const Header = () => {
    return (
        <header className="bg-yellow-400 p-4 border-b-4 border-yellow-600 shadow-md flex justify-between items-center">
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-red-600 rounded-sm border-2 border-red-800 shadow-inner"></div>
                <h1 className="text-2xl font-black text-red-600 tracking-wider uppercase drop-shadow-sm">
                    Lego City <span className="text-blue-600">Control</span>
                </h1>
            </div>
            <div className="text-sm font-bold text-gray-800 bg-white px-3 py-1 rounded border-2 border-gray-300">
                v1.0
            </div>
        </header>
    );
};

export default Header;
