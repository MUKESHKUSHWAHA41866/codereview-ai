"use client";

import { useChat } from "@/hooks/useChat";
import { ChatHeader } from "./ChatHeader";
import { MessageList } from "./MessageList";
import { ChatInput } from "./ChatInput";
import { EmptyState } from "../EmptyState";
import { AlertCircle } from "lucide-react";

export function ChatContainer() {
  const { messages, isLoading, error, sendMessage } = useChat();

  const handleSend = (content: string) => {
    sendMessage(content);
  };

  return (
    <div className="flex flex-col h-screen bg-background">
      <ChatHeader />

      {error && (
        <div className="mx-4 mt-4 max-w-4xl mx-auto">
          <div className="bg-error/10 border border-error/30 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-error flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-semibold text-error mb-1">
                Oops! Something went wrong
              </p>
              <p className="text-sm text-text-secondary">
                {error}. Please try again.
              </p>
            </div>
          </div>
        </div>
      )}

      {messages.length === 0 ? (
        <EmptyState onQuickAction={handleSend} />
      ) : (
        <MessageList messages={messages} isLoading={isLoading} />
      )}

      <ChatInput onSend={handleSend} disabled={isLoading} />
    </div>
  );
}
