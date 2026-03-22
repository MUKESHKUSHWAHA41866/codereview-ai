"use client";

import { FileCode, Bug, Sparkles, Search } from "lucide-react";

interface QuickActionsProps {
  onActionClick: (prompt: string) => void;
}

const actions = [
  {
    icon: FileCode,
    label: "Review my code",
    prompt: "Can you review this code and suggest improvements?",
  },
  {
    icon: Bug,
    label: "Explain error",
    prompt: "I'm getting an error. Can you help me understand what's wrong?",
  },
  {
    icon: Sparkles,
    label: "Best practices",
    prompt: "What are the best practices I should follow for this code?",
  },
  {
    icon: Search,
    label: "Code explain",
    prompt: "Can you explain how this code works?",
  },
];

export function QuickActions({ onActionClick }: QuickActionsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 mb-6">
      {actions.map((action) => (
        <button
          key={action.label}
          onClick={() => onActionClick(action.prompt)}
          className="flex items-center gap-2 px-4 py-3 rounded-lg bg-surface hover:bg-border border border-border transition-all hover:scale-[1.02] active:scale-95 text-left"
        >
          <action.icon className="w-5 h-5 text-primary flex-shrink-0" />
          <span className="text-sm text-text-primary font-medium">
            {action.label}
          </span>
        </button>
      ))}
    </div>
  );
}
