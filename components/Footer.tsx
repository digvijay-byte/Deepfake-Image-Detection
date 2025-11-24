
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full text-center py-4 mt-8">
      <p className="text-xs text-gray-500">
        Disclaimer: This tool uses a generative AI model for analysis and is for educational purposes only. 
        The results are not guaranteed to be accurate and should not be used as definitive proof.
      </p>
    </footer>
  );
};
