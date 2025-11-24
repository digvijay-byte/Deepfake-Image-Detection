
import React from 'react';
import type { AnalysisResult as AnalysisResultType } from '../types';
import { SparklesIcon } from './icons/SparklesIcon';

interface AnalysisResultProps {
  result: AnalysisResultType;
}

const ConfidenceMeter: React.FC<{ score: number; isDeepfake: boolean }> = ({ score, isDeepfake }) => {
  const color = isDeepfake ? 'bg-red-500' : 'bg-green-500';

  return (
    <div
      role="meter"
      aria-valuenow={score}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label={`Confidence score: ${score} percent`}
    >
      <div className="flex justify-between mb-1" aria-hidden="true">
        <span className="text-base font-medium text-gray-300">Confidence</span>
        <span className={`text-sm font-medium ${isDeepfake ? 'text-red-400' : 'text-green-400'}`}>{score}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2.5" aria-hidden="true">
        <div className={`${color} h-2.5 rounded-full`} style={{ width: `${score}%` }}></div>
      </div>
    </div>
  );
};

export const AnalysisResult: React.FC<AnalysisResultProps> = ({ result }) => {
  const { isDeepfake, confidenceScore, analysis, potentialArtifacts } = result;
  
  const verdictText = isDeepfake ? 'Potential Deepfake Detected' : 'Likely Authentic';
  const verdictColor = isDeepfake ? 'bg-red-500/20 text-red-300 border-red-500' : 'bg-green-500/20 text-green-300 border-green-500';

  return (
    <div className="bg-gray-800/50 rounded-lg p-6 w-full backdrop-blur-sm border border-gray-700 space-y-6">
      <h2 className="text-2xl font-bold text-cyan-400 mb-2">Analysis Results</h2>
      
      <div className={`p-4 rounded-lg border text-center ${verdictColor}`}>
        <p className="text-xl font-bold">{verdictText}</p>
      </div>

      <ConfidenceMeter score={confidenceScore} isDeepfake={isDeepfake} />

      <div>
        <h3 className="text-lg font-semibold text-gray-200 mb-2 flex items-center">
          <SparklesIcon className="h-5 w-5 mr-2 text-indigo-400" />
          AI Detailed Analysis
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">{analysis}</p>
      </div>

      {potentialArtifacts && potentialArtifacts.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-200 mb-2">Potential Artifacts Detected</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-400 text-sm">
            {potentialArtifacts.map((artifact, index) => (
              <li key={index}>{artifact}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
