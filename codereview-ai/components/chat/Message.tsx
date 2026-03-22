"use client";

import { Message as MessageType } from "@/types";
import { formatTimestamp } from "@/lib/utils";
import { CodeBlock } from "./CodeBlock";
import { Bot, User } from "lucide-react";

interface MessageProps {
  message: MessageType;
}

export function Message({ message }: MessageProps) {
  const isUser = message.role === "user";

  const parseContent = (content: string) => {
    const parts: React.ReactNode[] = [];
    const codeBlockRegex = /```(\w+)?\n([\s\S]*?)```/g;
    let lastIndex = 0;
    let match;

    while ((match = codeBlockRegex.exec(content)) !== null) {
      if (match.index > lastIndex) {
        parts.push(
          <div key={`text-${lastIndex}`} className="whitespace-pre-wrap">
            {content.slice(lastIndex, match.index)}
          </div>
        );
      }

      const language = match[1] || "javascript";
      const code = match[2].trim();
      parts.push(<CodeBlock key={`code-${match.index}`} code={code} language={language} />);

      lastIndex = match.index + match[0].length;
    }

    if (lastIndex < content.length) {
      parts.push(
        <div key={`text-${lastIndex}`} className="whitespace-pre-wrap">
          {content.slice(lastIndex)}
        </div>
      );
    }

    return parts;
  };

  return (
    <div className={`flex gap-3 ${isUser ? "flex-row-reverse" : "flex-row"} mb-6`}>
      <div
        className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center ${
          isUser ? "bg-primary" : "bg-surface"
        }`}
      >
        {isUser ? (
          <User className="w-5 h-5 text-white" />
        ) : (
          <Bot className="w-5 h-5 text-text-primary" />
        )}
      </div>

      <div className={`flex-1 max-w-[80%] ${isUser ? "items-end" : "items-start"}`}>
        <div
          className={`rounded-2xl px-4 py-3 ${
            isUser
              ? "bg-primary text-white rounded-tr-sm"
              : "bg-surface text-text-primary rounded-tl-sm"
          }`}
        >
          <div className="text-sm leading-relaxed">{parseContent(message.content)}</div>
        </div>
        <div className="text-xs text-text-secondary mt-1 px-2">
          {formatTimestamp(message.timestamp)}
        </div>
      </div>
    </div>
  );
}
