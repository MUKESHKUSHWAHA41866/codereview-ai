"use client";

import { Code2 } from "lucide-react";
import { QuickActions } from "../components/chat/QuickActions";

interface EmptyStateProps {
  onQuickAction: (prompt: string) => void;
}

export function EmptyState({ onQuickAction }: EmptyStateProps) {
  const examples = [
    "Review this React component for me",
    "Why is my loop not working?",
    "What's wrong with this SQL query?",
    "Explain this algorithm to me",
  ];

  return (
    <div className="flex-1 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8">
          <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <Code2 className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-text-primary mb-3">
            CodeReview AI
          </h2>
          <p className="text-lg text-text-secondary max-w-md mx-auto">
            Your friendly code review assistant
          </p>
        </div>

        <div className="bg-surface/50 border border-border rounded-2xl p-6 mb-8">
          <p className="text-text-primary mb-6 leading-relaxed">
            Hi! I'm here to help you write better code. Paste your code and
            I'll review it, explain best practices, or help you debug.
          </p>
          <QuickActions onActionClick={onQuickAction} />
        </div>

        <div className="text-left bg-surface/30 border border-border rounded-xl p-6">
          <p className="text-sm font-semibold text-text-primary mb-3">
            Try asking:
          </p>
          <ul className="space-y-2">
            {examples.map((example, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-primary mt-0.5">•</span>
                <span className="text-sm text-text-secondary">"{example}"</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
