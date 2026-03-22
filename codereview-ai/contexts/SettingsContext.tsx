"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ExplanationLevel } from "@/types";

interface SettingsContextType {
  explanationLevel: ExplanationLevel;
  setExplanationLevel: (level: ExplanationLevel) => void;
}

const SettingsContext = createContext<SettingsContextType | undefined>(
  undefined
);

export function SettingsProvider({ children }: { children: ReactNode }) {
  const [explanationLevel, setExplanationLevel] =
    useState<ExplanationLevel>("beginner");

  return (
    <SettingsContext.Provider value={{ explanationLevel, setExplanationLevel }}>
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (context === undefined) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}
