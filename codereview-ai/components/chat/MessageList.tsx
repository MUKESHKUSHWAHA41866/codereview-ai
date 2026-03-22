"use client";

import { Message as MessageType } from "@/types";
import { Message } from "./Message";
import { LoadingDots } from "../ui/LoadingDots";
import { useAutoScroll } from "@/hooks/useAutoScroll";

interface MessageListProps {
  messages: MessageType[];
  isLoading: boolean;
}

export function MessageList({ messages, isLoading }: MessageListProps) {
  const scrollRef = useAutoScroll<HTMLDivElement>([messages, isLoading]);

  return (
    <div className="flex-1 overflow-y-auto px-4 py-6">
      {messages.map((message) => (
        <Message key={message.id} message={message} />
      ))}
      
      {isLoading && (
        <div className="flex gap-3 mb-6">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-surface flex items-center justify-center">
            <span className="text-lg">🤖</span>
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
