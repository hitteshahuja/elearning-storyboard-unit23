export interface Slide {
  id: string;
  slideNumber: string;
  sectionTitle: string;
  headline: string;
  voIntent: string;
  interaction: string;
  imagePlaceholder: string;
  assessment: string | null;
  voiceoverScript: string;
  content: string;
  part: string;
}

export interface Part {
  id: string;
  title: string;
  description: string;
  slides: Slide[];
}
