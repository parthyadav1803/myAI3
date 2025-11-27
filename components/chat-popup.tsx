"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { useChat } from "@ai-sdk/react";
import { ArrowUp, Loader2, Square, Minus, Maximize2, MessageCircle, X, Plus } from "lucide-react";
import { UIMessage } from "ai";
import { useEffect, useState, useRef } from "react";
import { AI_NAME, WELCOME_MESSAGE } from "@/config";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AssistantMessage } from "@/components/messages/assistant-message";
import { UserMessage } from "@/components/messages/user-message";

const formSchema = z.object({
  message: z
    .string()
    .min(1, "Message cannot be empty.")
    .max(2000, "Message must be at most 2000 characters."),
});

const STORAGE_KEY = 'chat-messages';

type StorageData = {
  messages: UIMessage[];
  durations: Record<string, number>;
};

const loadMessagesFromStorage = (): { messages: UIMessage[]; durations: Record<string, number> } => {
  if (typeof window === 'undefined') return { messages: [], durations: {} };
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return { messages: [], durations: {} };
    const parsed = JSON.parse(stored);
    return {
      messages: parsed.messages || [],
      durations: parsed.durations || {},
    };
  } catch (error) {
    console.error('Failed to load messages from localStorage:', error);
    return { messages: [], durations: {} };
  }
};

const saveMessagesToStorage = (messages: UIMessage[], durations: Record<string, number>) => {
  if (typeof window === 'undefined') return;
  try {
    const data: StorageData = { messages, durations };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save messages to localStorage:', error);
  }
};

export function ChatPopup() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [durations, setDurations] = useState<Record<string, number>>({});
  const welcomeMessageShownRef = useRef<boolean>(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const hasAutoOpened = useRef(false);

  const stored = typeof window !== 'undefined' ? loadMessagesFromStorage() : { messages: [], durations: {} };
  const [initialMessages] = useState<UIMessage[]>(stored.messages);

  const { messages, sendMessage, status, stop, setMessages } = useChat({
    messages: initialMessages,
  });

  useEffect(() => {
    setIsClient(true);
    setDurations(stored.durations);
    setMessages(stored.messages);
  }, []);

  useEffect(() => {
    if (isClient && !hasAutoOpened.current && pathname !== '/demo') {
      const timer = setTimeout(() => {
        setIsOpen(true);
        hasAutoOpened.current = true;
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isClient, pathname]);

  useEffect(() => {
    if (isClient) {
      saveMessagesToStorage(messages, durations);
    }
  }, [durations, messages, isClient]);

  const handleDurationChange = (key: string, duration: number) => {
    setDurations((prevDurations) => {
      const newDurations = { ...prevDurations };
      newDurations[key] = duration;
      return newDurations;
    });
  };

  useEffect(() => {
    if (isClient && initialMessages.length === 0 && !welcomeMessageShownRef.current) {
      const welcomeMessage: UIMessage = {
        id: `popup-welcome-${Date.now()}`,
        role: "assistant",
        parts: [
          {
            type: "text",
            text: WELCOME_MESSAGE,
          },
        ],
      };
      setMessages([welcomeMessage]);
      saveMessagesToStorage([welcomeMessage], {});
      welcomeMessageShownRef.current = true;
    }
  }, [isClient, initialMessages.length, setMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      message: "",
    },
  });

  function onSubmit(data: z.infer<typeof formSchema>) {
    sendMessage({ text: data.message });
    form.reset();
  }

  function clearChat() {
    const newMessages: UIMessage[] = [];
    const newDurations = {};
    setMessages(newMessages);
    setDurations(newDurations);
    saveMessagesToStorage(newMessages, newDurations);
  }

  if (pathname === '/demo') return null;

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-105"
        aria-label="Open chat"
      >
        <MessageCircle className="size-6" />
      </button>
    );
  }

  if (isMinimized) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <div
          onClick={() => setIsMinimized(false)}
          className="bg-[#1e3a8a] text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-3 cursor-pointer hover:bg-[#1e3a8a]/90 transition-all"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-[#1e3a8a] font-bold text-sm">D</span>
          </div>
          <span className="font-medium">{AI_NAME}</span>
          <div className="flex items-center gap-1">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMinimized(false);
              }}
              className="p-1 hover:bg-white/20 rounded"
              aria-label="Expand chat"
            >
              <Maximize2 className="size-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
              }}
              className="p-1 hover:bg-white/20 rounded"
              aria-label="Close chat"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[380px] h-[520px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300">
      <div className="bg-[#1e3a8a] text-white px-4 py-3 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-[#1e3a8a] font-bold text-sm">D</span>
          </div>
          <div>
            <p className="font-semibold text-sm">{AI_NAME}</p>
            <p className="text-xs text-white/70">AI Logistics Assistant</p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={clearChat}
            className="p-1.5 hover:bg-white/20 rounded transition-colors"
            aria-label="New chat"
            title="New chat"
          >
            <Plus className="size-4" />
          </button>
          <button
            onClick={() => setIsMinimized(true)}
            className="p-1.5 hover:bg-white/20 rounded transition-colors"
            aria-label="Minimize"
          >
            <Minus className="size-4" />
          </button>
          <Link
            href="/demo"
            className="p-1.5 hover:bg-white/20 rounded transition-colors"
            aria-label="Open full chat"
            title="Open full screen"
          >
            <Maximize2 className="size-4" />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-white/20 rounded transition-colors"
            aria-label="Close chat"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-3 bg-gray-50">
        <div className="flex flex-col gap-3">
          {isClient ? (
            <>
              {messages.map((message, messageIndex) => {
                const isLastMessage = messageIndex === messages.length - 1;
                return (
                  <div key={message.id} className="w-full text-sm">
                    {message.role === "user" ? (
                      <UserMessage message={message} />
                    ) : (
                      <AssistantMessage
                        message={message}
                        status={status}
                        isLastMessage={isLastMessage}
                        durations={durations}
                        onDurationChange={handleDurationChange}
                      />
                    )}
                  </div>
                );
              })}
              {status === "submitted" && (
                <div className="flex justify-start">
                  <Loader2 className="size-4 animate-spin text-[#1e3a8a]" />
                </div>
              )}
            </>
          ) : (
            <div className="flex justify-center py-4">
              <Loader2 className="size-4 animate-spin text-[#1e3a8a]" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="shrink-0 bg-white border-t border-gray-100 p-3">
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name="message"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="popup-message" className="sr-only">
                    Message
                  </FieldLabel>
                  <div className="relative">
                    <Input
                      {...field}
                      id="popup-message"
                      className="h-11 pr-11 pl-4 bg-gray-50 rounded-full border-gray-200 focus:border-[#1e3a8a] focus:ring-[#1e3a8a] text-sm"
                      placeholder="Ask about logistics..."
                      disabled={status === "streaming"}
                      aria-invalid={fieldState.invalid}
                      autoComplete="off"
                      onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey) {
                          e.preventDefault();
                          form.handleSubmit(onSubmit)();
                        }
                      }}
                    />
                    {(status === "ready" || status === "error") && (
                      <Button
                        className="absolute right-1.5 top-1.5 rounded-full bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 h-8 w-8"
                        type="submit"
                        disabled={!field.value.trim()}
                        size="icon"
                      >
                        <ArrowUp className="size-4" />
                      </Button>
                    )}
                    {(status === "streaming" || status === "submitted") && (
                      <Button
                        className="absolute right-1.5 top-1.5 rounded-full bg-[#f97316] hover:bg-[#f97316]/90 h-8 w-8"
                        size="icon"
                        onClick={() => stop()}
                      >
                        <Square className="size-3" />
                      </Button>
                    )}
                  </div>
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </div>
    </div>
  );
}
