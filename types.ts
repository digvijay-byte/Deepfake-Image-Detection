
export interface AnalysisResult {
  isDeepfake: boolean;
  confidenceScore: number;
  analysis: string;
  potentialArtifacts: string[];
}
