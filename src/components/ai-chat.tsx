'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, RefreshCw, Copy, Trash2, Sparkles, User, AlertCircle } from 'lucide-react';

// Available models
const models = [
  {
    name: 'Fa',
    value: 'openai/gpt-4o-mini',
    description: 'Fast and efficient',
  },
];

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  model?: string;
}

interface ApiResponse {
  id: string;
  message: {
    role: 'assistant';
    content: string;
  };
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
  model: string;
}

const AiChat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedModel, setSelectedModel] = useState(models[0].value);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Load messages from localStorage on mount
  useEffect(() => {
    const savedMessages = localStorage.getItem('fa-chat-messages');
    if (savedMessages) {
      try {
        setMessages(JSON.parse(savedMessages));
      } catch (error) {
        console.error('Error loading messages:', error);
      }
    }
  }, []);

  // Save messages to localStorage whenever messages change
  useEffect(() => {
    if (messages.length > 0) {
      localStorage.setItem('fa-chat-messages', JSON.stringify(messages));
    }
  }, [messages]);

  // Auto scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  const sendMessage = async (messageText: string, isRegenerate = false) => {
    if (!messageText.trim()) return;

    setError(null);
    setIsLoading(true);

    let updatedMessages = [...messages];

    // Add user message (only if not regenerating)
    if (!isRegenerate) {
      const userMessage: Message = {
        id: `user-${Date.now()}`,
        role: 'user',
        content: messageText.trim(),
        timestamp: Date.now(),
      };
      updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);
      setInput('');
    }

    try {
      // Prepare messages for API
      const apiMessages = updatedMessages.map(msg => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: apiMessages,
          model: selectedModel,
          temperature: 0.7,
          max_tokens: 2000,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP ${response.status}`);
      }

      const data: ApiResponse = await response.json();

      // Add assistant message
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: data.message.content,
        timestamp: Date.now(),
        model: data.model,
      };

      setMessages(prev => [...prev, assistantMessage]);

    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
      setError(errorMessage);
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isLoading && input.trim()) {
      sendMessage(input);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const regenerateLastResponse = () => {
    if (messages.length === 0) return;
    
    // Find the last user message
    const lastUserMessageIndex = messages.map(m => m.role).lastIndexOf('user');
    if (lastUserMessageIndex === -1) return;

    const lastUserMessage = messages[lastUserMessageIndex];
    // Remove all messages after the last user message
    const messagesUntilLastUser = messages.slice(0, lastUserMessageIndex + 1);
    setMessages(messagesUntilLastUser);
    
    // Regenerate response
    sendMessage(lastUserMessage.content, true);
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setError(null);
    localStorage.removeItem('fa-chat-messages');
  };

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto bg-white">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-600 rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-gray-900">Fa Assistant</h1>
            <p className="text-sm text-gray-600">
              Powered by Ditfa
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Model Info */}
          <div className="px-3 py-1 text-sm bg-purple-50 text-purple-700 rounded-md border border-purple-200">
            Fa
          </div>
          
          {/* Clear Chat Button */}
          {messages.length > 0 && (
            <button
              onClick={clearChat}
              className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-md transition-colors"
              title="Clear chat"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Error Message */}
        {error && (
          <div className="flex items-start gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
            <AlertCircle className="w-5 h-5 text-red-600 mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-red-800">Error</p>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Welcome Message */}
        {messages.length === 0 && !isLoading && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-xl font-medium text-gray-700 mb-2">
              Welcome to Fa Assistant
            </h2>
            <p className="text-gray-500">
              Start a conversation by typing a message below
            </p>
          </div>
        )}

        {/* Messages */}
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex gap-3 ${
              message.role === 'assistant' ? 'items-start' : 'items-start flex-row-reverse'
            }`}
          >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
              message.role === 'assistant' 
                ? 'bg-gradient-to-br from-purple-500 to-blue-600' 
                : 'bg-green-100 text-green-600'
            }`}>
              {message.role === 'assistant' ? (
                <Sparkles className="w-4 h-4 text-white" />
              ) : (
                <User className="w-4 h-4" />
              )}
            </div>

            {/* Message Content */}
            <div className={`flex-1 max-w-3xl ${
              message.role === 'user' ? 'text-right' : ''
            }`}>
              <div className={`inline-block p-3 rounded-lg ${
                message.role === 'assistant'
                  ? 'bg-gray-100 text-gray-900'
                  : 'bg-blue-600 text-white'
              }`}>
                <div className="whitespace-pre-wrap break-words">
                  {message.content}
                </div>
              </div>

              {/* Message Actions & Info */}
              {message.role === 'assistant' && (
                <div className="flex items-center gap-2 mt-2 text-xs text-gray-500">
                  <span>Fa</span>
                  <button
                    onClick={() => copyToClipboard(message.content)}
                    className="flex items-center gap-1 hover:text-gray-700 transition-colors"
                    title="Copy message"
                  >
                    <Copy className="w-3 h-3" />
                    Copy
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3 items-start">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div className="bg-gray-100 p-3 rounded-lg">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input Form */}
      <div className="border-t border-gray-200 p-4">
        {/* Regenerate Button */}
        {messages.length > 0 && !isLoading && (
          <div className="flex justify-center mb-3">
            <button
              onClick={regenerateLastResponse}
              className="flex items-center gap-2 px-3 py-1 text-sm text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-md transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Regenerate response
            </button>
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex gap-3">
          <div className="flex-1 relative">
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message... (Shift+Enter for new line)"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none max-h-32"
              disabled={isLoading}
              rows={1}
            />
          </div>
          <button
            type="submit"
            disabled={!input.trim() || isLoading}
            className="px-4 py-3 bg-gradient-to-br from-purple-500 to-blue-600 text-white rounded-lg hover:from-purple-600 hover:to-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AiChat;