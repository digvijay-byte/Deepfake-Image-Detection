
import { GoogleGenAI, Type } from "@google/genai";
import type { AnalysisResult } from '../types';

const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
    reader.readAsDataURL(file);
  });
  return {
    inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
  };
};

export const analyzeImageForDeepfake = async (imageFile: File): Promise<AnalysisResult> => {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable is not set.");
  }
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

  const imagePart = await fileToGenerativePart(imageFile);

  const prompt = `
    You are a highly advanced AI expert specializing in deepfake and digital image manipulation detection. 
    Analyze the provided image with extreme scrutiny. Look for common artifacts of AI-generated or manipulated images, such as:
    - Inconsistent lighting and shadows
    - Unnatural skin textures or smoothness
    - Warping or inconsistencies in the background
    - Asymmetrical facial features or oddities in eyes, teeth, or hair
    - Blurry or distorted edges around a subject
    - Digital noise or compression artifacts that are inconsistent with the rest of the image.

    Based on your analysis, provide a structured JSON response. Do not include any markdown formatting.
  `;
  
  const response = await ai.models.generateContent({
    model: 'gemini-2.5-flash',
    contents: { parts: [imagePart, { text: prompt }] },
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          isDeepfake: {
            type: Type.BOOLEAN,
            description: "True if the image is likely a deepfake or heavily manipulated, false otherwise."
          },
          confidenceScore: {
            type: Type.INTEGER,
            description: "A confidence score from 0 to 100 on the deepfake assessment. Higher means more certain."
          },
          analysis: {
            type: Type.STRING,
            description: "A detailed, technical analysis explaining your reasoning and findings. Be specific about what you observed."
          },
          potentialArtifacts: {
            type: Type.ARRAY,
            items: {
              type: Type.STRING,
            },
            description: "A list of specific potential artifacts or inconsistencies you detected in the image."
          },
        },
        required: ["isDeepfake", "confidenceScore", "analysis", "potentialArtifacts"]
      },
    },
  });

  try {
    const jsonString = response.text.trim();
    const result: AnalysisResult = JSON.parse(jsonString);
    return result;
  } catch (error) {
    console.error("Failed to parse Gemini API response:", response.text);
    throw new Error("Invalid JSON response from the AI model.");
  }
};
