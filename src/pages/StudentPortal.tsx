import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { 
  Star, 
  Trophy, 
  Target, 
  BookOpen, 
  Zap, 
  Droplets,
  Leaf,
  Award,
  TrendingUp,
  Play
} from "lucide-react";

export default function StudentPortal() {
  const [studentLevel] = useState(7);
  const [totalXP] = useState(2450);
  const [badges] = useState([
    { name: "Water Warrior", icon: Droplets, color: "water" },
    { name: "Energy Expert", icon: Zap, color: "energy" },
    { name: "Green Guardian", icon: Leaf, color: "primary" }
  ]);

  const quests = [
    { id: 1, title: "Save the Oceans", progress: 80, xp: 250, status: "active", category: "water" },
    { id: 2, title: "Solar Power Lab", progress: 45, xp: 300, status: "active", category: "energy" },
    { id: 3, title: "Forest Conservation", progress: 100, xp: 200, status: "completed", category: "nature" },
    { id: 4, title: "Waste Management", progress: 0, xp: 180, status: "locked", category: "recycling" }
  ];

  const achievements = [
    { title: "Week Streak", value: "12 days", icon: Target },
    { title: "Trees Planted", value: "25", icon: Leaf },
    { title: "CO2 Saved", value: "45kg", icon: TrendingUp }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Student Profile Header */}
        <div className="mb-8">
          <Card className="p-6 bg-gradient-to-r from-primary/10 to-energy/10 border-primary/20">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-20 h-20 bg-gradient-eco rounded-full flex items-center justify-center">
                <Star className="h-10 w-10 text-primary-foreground fill-current" />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-2xl font-bold mb-2">Welcome back, Eco Hero!</h1>
                <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                  <Badge variant="secondary" className="bg-energy text-energy-foreground">
                    Level {studentLevel} - Green Warrior
                  </Badge>
                  <span className="text-muted-foreground">{totalXP} XP</span>
                </div>
                <Progress value={75} className="w-full max-w-md" />
                <p className="text-sm text-muted-foreground mt-2">525 XP to Level 8</p>
              </div>

              <div className="flex gap-2">
                {badges.map((badge, index) => (
                  <div key={index} className="w-12 h-12 bg-gradient-to-br from-muted to-secondary rounded-full flex items-center justify-center shadow-lg">
                    <badge.icon className={`h-6 w-6 text-${badge.color}`} />
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Quests */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Your Eco Quests</h2>
              <Button variant="eco" size="sm">
                <Play className="h-4 w-4 mr-2" />
                New Quest
              </Button>
            </div>

            <div className="grid gap-4">
              {quests.map((quest) => (
                <Card key={quest.id} className="p-6 hover:shadow-eco transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{quest.title}</h3>
                      <p className="text-sm text-muted-foreground capitalize">{quest.category} Challenge</p>
                    </div>
                    <div className="text-right">
                      <Badge 
                        variant={quest.status === 'completed' ? 'default' : quest.status === 'active' ? 'secondary' : 'outline'}
                        className={quest.status === 'completed' ? 'bg-primary' : ''}
                      >
                        {quest.status}
                      </Badge>
                      <p className="text-sm text-muted-foreground mt-1">+{quest.xp} XP</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span>Progress</span>
                      <span>{quest.progress}%</span>
                    </div>
                    <Progress value={quest.progress} />
                    
                    <div className="flex gap-2">
                      <Button 
                        variant={quest.status === 'locked' ? 'outline' : 'energy'} 
                        size="sm" 
                        disabled={quest.status === 'locked'}
                        className="flex-1"
                      >
                        {quest.status === 'completed' ? 'Completed' : quest.status === 'locked' ? 'Locked' : 'Continue'}
                      </Button>
                      {quest.status === 'active' && (
                        <Button variant="outline" size="sm">
                          <BookOpen className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievements */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Trophy className="h-5 w-5 text-energy" />
                Your Impact
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <achievement.icon className="h-5 w-5 text-primary" />
                      <span className="text-sm">{achievement.title}</span>
                    </div>
                    <span className="font-semibold text-energy">{achievement.value}</span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Leaderboard Preview */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-cultural" />
                Class Leaderboard
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-gradient-energy/10 rounded-lg">
                  <div className="w-6 h-6 bg-energy rounded-full flex items-center justify-center text-xs font-bold text-energy-foreground">1</div>
                  <span className="text-sm font-medium">You</span>
                  <span className="ml-auto text-sm text-energy">{totalXP} XP</span>
                </div>
                <div className="flex items-center gap-3 p-2">
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs">2</div>
                  <span className="text-sm">Arjun S.</span>
                  <span className="ml-auto text-sm text-muted-foreground">2380 XP</span>
                </div>
                <div className="flex items-center gap-3 p-2">
                  <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center text-xs">3</div>
                  <span className="text-sm">Priya M.</span>
                  <span className="ml-auto text-sm text-muted-foreground">2250 XP</span>
                </div>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-4">
                View Full Leaderboard
              </Button>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="water" size="sm" className="w-full justify-start">
                  <Droplets className="h-4 w-4 mr-2" />
                  Water Conservation Tips
                </Button>
                <Button variant="energy" size="sm" className="w-full justify-start">
                  <Zap className="h-4 w-4 mr-2" />
                  Energy Saving Guide
                </Button>
                <Button variant="quest" size="sm" className="w-full justify-start">
                  <Leaf className="h-4 w-4 mr-2" />
                  Plant a Virtual Tree
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
