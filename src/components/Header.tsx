import { BrainYatraLogo } from "./BrainYatraLogo";
import { Button } from "@/components/ui/button";
import { Menu, Bell, User } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <BrainYatraLogo size="md" />
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#learn" className="text-foreground hover:text-primary transition-colors font-medium">
              Learn
            </a>
            <a href="#quests" className="text-foreground hover:text-primary transition-colors font-medium">
              Quests
            </a>
            <a href="#leaderboard" className="text-foreground hover:text-primary transition-colors font-medium">
              Leaderboard
            </a>
            <a href="#impact" className="text-foreground hover:text-primary transition-colors font-medium">
              My Impact
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-3 w-3 bg-energy rounded-full animate-eco-pulse"></span>
            </Button>
            
            <Button variant="outline" size="sm" className="hidden md:flex" onClick={() => window.location.href = '/student-portal'}>
              <User className="h-4 w-4 mr-2" />
              Student Portal
            </Button>
            
            <Button variant="cultural" size="sm" onClick={() => window.location.href = '/teacher-dashboard'}>
              Teacher Login
            </Button>
            
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
