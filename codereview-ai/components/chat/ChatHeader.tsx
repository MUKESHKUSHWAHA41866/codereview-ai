"use client";

import { Code2, ChevronDown } from "lucide-react";
import { Badge } from "../ui/Badge";
import { useSettings } from "@/contexts/SettingsContext";
import { useState, useRef, useEffect } from "react";

export function ChatHeader() {
  const { explanationLevel, setExplanationLevel } = useSettings();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="border-b border-border bg-surface/50 backdrop-blur-sm px-4 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Code2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-text-primary">
              CodeReview AI
            </h1>
            <p className="text-xs text-text-secondary">
              Your friendly code review assistant
            </p>
          </div>
        </div>

        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-surface hover:bg-border border border-border transition-colors"
          >
            <Badge variant={explanationLevel === "beginner" ? "success" : "warning"}>
              {explanationLevel === "beginner" ? "⭐ Beginner" : "🚀 Detailed"}
            </Badge>
            <ChevronDown className={`w-4 h-4 text-text-secondary transition-transform ${isOpen ? "rotate-180" : ""}`} />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-64 bg-surface border border-border rounded-lg shadow-xl overflow-hidden z-50">
              <button
                onClick={() => {
                  setExplanationLevel("beginner");
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left hover:bg-border transition-colors ${
                  explanationLevel === "beginner" ? "bg-border" : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="success">⭐ Beginner Mode</Badge>
                </div>
                <p className="text-xs text-text-secondary">
                  Simple explanations, friendly tone, focus on learning
                </p>
              </button>
              <button
                onClick={() => {
                  setExplanationLevel("detailed");
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-3 text-left hover:bg-border transition-colors ${
                  explanationLevel === "detailed" ? "bg-border" : ""
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Badge variant="warning">🚀 Detailed Mode</Badge>
                </div>
                <p className="text-xs text-text-secondary">
                  Technical depth, performance insights, advanced patterns
                </p>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
