"use client";

import { Message as MessageType } from "@/types";
import { Message } from "./Message";
import { LoadingDots } from "../ui/LoadingDots";
import { useAutoScroll } from "@/hooks/useAutoScroll";
import { Bot } from "lucide-react";

interface MessageListProps {
  messages: MessageType[];
  isLoading: boolean;
  streamingContent?: string;
}

export function MessageList({ messages, isLoading, streamingContent = "" }: MessageListProps) {
  const scrollRef = useAutoScroll<HTMLDivElement>([messages, isLoading, streamingContent]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}

      {/* Show streaming message */}
      {isLoading && streamingContent && (
        <div className="flex gap-3 mb-6">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface flex items-center justify-center">
            <Bot className="w-5 h-5 text-text-primary" />
          </div>
          <div className="flex-1 max-w-[80%]">
            <div className="rounded-2xl px-4 py-3 bg-surface text-text-primary rounded-tl-sm">
              <div className="text-sm leading-relaxed whitespace-pre-wrap">
                {streamingContent}
                <span className="inline-block w-2 h-4 bg-primary ml-1 animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {isLoading && !streamingContent && (
        <div className="flex gap-3 mb-6">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface flex items-center justify-center">
            <Bot className="w-5 h-5 text-text-primary" />
          </div>
          <div className="bg-surface rounded-2xl rounded-tl-sm">
            <LoadingDots />
          </div>
        </div>
      )}
      
      <div ref={scrollRef} />
    </div>
  );
}
