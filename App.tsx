
import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { AnalysisResult } from './components/AnalysisResult';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';
import { analyzeImageForDeepfake } from './services/geminiService';
import type { AnalysisResult as AnalysisResultType } from './types';

const App: React.FC = () => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imageDataUrl, setImageDataUrl] = useState<string | null>(null);
  const [analysisResult, setAnalysisResult] = useState<AnalysisResultType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleImageUpload = useCallback(async (file: File) => {
    setImageFile(file);
    setIsLoading(true);
    setError(null);
    setAnalysisResult(null);

    const reader = new FileReader();
    reader.onloadend = async () => {
      const dataUrl = reader.result as string;
      setImageDataUrl(dataUrl);
      try {
        const result = await analyzeImageForDeepfake(file);
        setAnalysisResult(result);
      } catch (err) {
        console.error(err);
        setError('Failed to analyze the image. The AI model may be overloaded or an error occurred. Please try again.');
      } finally {
        setIsLoading(false);
      }
    };
    reader.readAsDataURL(file);
  }, []);

  const handleReset = () => {
    setImageFile(null);
    setImageDataUrl(null);
    setAnalysisResult(null);
    setIsLoading(false);
    setError(null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gray-900 text-gray-100 p-4 font-sans">
      <Header />
      <main className="flex-grow flex flex-col items-center justify-center w-full max-w-4xl px-4">
        {!imageDataUrl && !isLoading && (
          <ImageUploader onImageUpload={handleImageUpload} />
        )}
        
        {isLoading && (
          <div className="text-center">
            <Loader />
            <p className="mt-4 text-lg text-gray-400">Analyzing image... this may take a moment.</p>
          </div>
        )}

        {imageDataUrl && !isLoading && (
          <div className="w-full flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-1/2 flex flex-col items-center">
              <h2 className="text-2xl font-bold mb-4 text-cyan-400">Uploaded Image</h2>
              <img src={imageDataUrl} alt="Uploaded for analysis" className="rounded-lg shadow-2xl max-w-full h-auto object-contain max-h-[500px]" />
            </div>
            <div className="w-full lg:w-1/2">
               {analysisResult && <AnalysisResult result={analysisResult} />}
            </div>
          </div>
        )}

        {error && (
          <div role="alert" className="mt-6 p-4 bg-red-900/50 border border-red-700 text-red-300 rounded-lg">
            <p className="font-bold">An Error Occurred</p>
            <p>{error}</p>
          </div>
        )}
        
        {(imageDataUrl || error) && !isLoading && (
           <button 
             onClick={handleReset}
             className="mt-8 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-gray-900 transition-transform transform hover:scale-105"
           >
             Analyze Another Image
           </button>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
