
import React from 'react';

export const Header: React.FC = () => {
  return (
    <header className="w-full text-center py-6">
      <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">
        Deepfake Detector AI
      </h1>
      <p className="text-gray-400 mt-2">
        Upload an image to analyze it for signs of digital manipulation.
      </p>
    </header>
  );
};
