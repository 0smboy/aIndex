
export interface IndexData {
  id: string;
  code: string;
  name: string;
  definition: string;
  metaphor: string;
  composition: string[];
  significance: string;
  color: string;
  sectors: { name: string; weight: number }[];
}

export interface PracticalStep {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  advice: string;
}
