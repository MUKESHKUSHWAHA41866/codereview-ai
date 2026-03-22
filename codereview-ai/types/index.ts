export interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export interface Settings {
  explanationLevel: "beginner" | "detailed";
}

export type ExplanationLevel = "beginner" | "detailed";
