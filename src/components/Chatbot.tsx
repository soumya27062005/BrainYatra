import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  X, 
  Minimize2,
  Maximize2,
  Bot,
  User,
  Leaf,
  Lightbulb,
  HelpCircle
} from "lucide-react";

interface Message {
  id: number;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

export const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      type: 'bot',
      content: "Hi there! 🌱 I'm EcoBot, your environmental learning companion. How can I help you on your green journey today?",
      timestamp: new Date()
    }
  ]);

  const quickReplies = [
    { text: "Start a new quest", icon: Leaf },
    { text: "Check my progress", icon: User },
    { text: "Energy saving tips", icon: Lightbulb },
    { text: "How does this work?", icon: HelpCircle }
  ];

  const botResponses = {
    "start a new quest": "Great choice! 🚀 You can start with our Water Conservation Quest or Solar Energy Mission. Which topic interests you more?",
    "check my progress": "You're doing amazing! 🌟 You're currently Level 7 with 2,450 XP. You've completed 3 quests and earned 5 badges!",
    "energy saving tips": "Here are some quick energy tips! 💡\n• Use LED bulbs\n• Unplug devices when not in use\n• Use natural light during day\n• Set AC to 24°C\nWant more detailed tips?",
    "how does this work": "BrainYatra makes learning fun! 🎮\n1. Complete quests to earn XP\n2. Unlock badges and achievements\n3. Compete with classmates\n4. Make real environmental impact!\nReady to start?",
    "water": "Water conservation is crucial! 💧 Our Water Quest covers:\n• Water cycle basics\n• Ocean conservation\n• Water quality testing\n• Practical saving tips\nWant to start this quest?",
    "solar": "Solar energy is the future! ☀️ Learn about:\n• How solar panels work\n• Solar calculator tools\n• Building solar ovens\n• Efficiency optimization\nReady to power up?",
    "help": "I'm here to help! 🤖 You can ask me about:\n• Starting new quests\n• Checking progress\n• Learning tips\n• Platform features\n• Environmental facts\nWhat would you like to know?"
  };

  const sendMessage = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Generate bot response
    setTimeout(() => {
      const lowerMessage = message.toLowerCase();
      let botResponse = "I understand you're asking about environmental topics! 🌍 Could you be more specific about what you'd like to learn?";

      // Simple keyword matching
      for (const [key, response] of Object.entries(botResponses)) {
        if (lowerMessage.includes(key.toLowerCase())) {
          botResponse = response;
          break;
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setMessage("");
  };

  const handleQuickReply = (reply: string) => {
    setMessage(reply);
    sendMessage();
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-lg bg-gradient-eco hover:shadow-xl transition-all duration-300 animate-bounce-gentle z-50"
        size="lg"
      >
        <MessageCircle className="h-8 w-8 text-primary-foreground" />
      </Button>
    );
  }

  return (
    <Card className={`fixed bottom-6 right-6 shadow-2xl z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-primary/10 to-energy/10">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-eco rounded-full flex items-center justify-center">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-sm">EcoBot</h3>
            <Badge variant="secondary" className="text-xs">Online</Badge>
          </div>
        </div>
        
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? <Maximize2 className="h-4 w-4" /> : <Minimize2 className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {!isMinimized && (
        <>
          {/* Messages */}
          <div className="flex-1 p-4 space-y-3 max-h-64 overflow-y-auto">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2 ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.type === 'bot' && (
                  <div className="w-6 h-6 bg-gradient-eco rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="h-3 w-3 text-primary-foreground" />
                  </div>
                )}
                
                <div
                  className={`max-w-xs p-3 rounded-lg text-sm ${
                    msg.type === 'user'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted'
                  }`}
                >
                  <p className="whitespace-pre-line">{msg.content}</p>
                  <p className="text-xs opacity-70 mt-1">
                    {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                
                {msg.type === 'user' && (
                  <div className="w-6 h-6 bg-energy rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="h-3 w-3 text-energy-foreground" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="p-4 border-t border-b">
              <p className="text-xs text-muted-foreground mb-2">Quick actions:</p>
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    onClick={() => handleQuickReply(reply.text)}
                    className="text-xs"
                  >
                    <reply.icon className="h-3 w-3 mr-1" />
                    {reply.text}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Ask about eco-learning..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                className="text-sm"
              />
              <Button onClick={sendMessage} size="sm" variant="eco">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </>
      )}
    </Card>
  );
};
