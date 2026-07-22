import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { 
  Zap, 
  Target, 
  Trophy, 
  Play,
  Clock,
  Star,
  CheckCircle,
  Lock,
  Sun,
  Wind,
  Battery,
  Lightbulb
} from "lucide-react";

export default function EnergyMission() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [missionProgress, setMissionProgress] = useState(40);

  const missionLevels = [
    {
      id: 1,
      title: "Energy Basics",
      description: "Understanding different types of energy sources",
      xp: 120,
      status: "completed",
      icon: Lightbulb,
      tasks: [
        { name: "Energy Types Quiz", completed: true },
        { name: "Renewable vs Non-renewable", completed: true },
        { name: "Energy Transformation Game", completed: true },
        { name: "Home Energy Audit", completed: true }
      ]
    },
    {
      id: 2,
      title: "Solar Power Lab",
      description: "Harness the power of the sun for clean energy",
      xp: 180,
      status: "active",
      icon: Sun,
      tasks: [
        { name: "Solar Panel Simulation", completed: true },
        { name: "Solar Calculator Challenge", completed: true },
        { name: "Build a Solar Oven", completed: false },
        { name: "Solar Energy Efficiency Test", completed: false }
      ]
    },
    {
      id: 3,
      title: "Wind Energy Explorer",
      description: "Learn how wind turbines generate electricity",
      xp: 200,
      status: "locked",
      icon: Wind,
      tasks: [
        { name: "Wind Turbine Design", completed: false },
        { name: "Wind Pattern Analysis", completed: false },
        { name: "Efficiency Optimization", completed: false }
      ]
    },
    {
      id: 4,
      title: "Energy Storage Master",
      description: "Master battery technology and energy storage",
      xp: 250,
      status: "locked",
      icon: Battery,
      tasks: [
        { name: "Battery Chemistry Lab", completed: false },
        { name: "Grid Storage Challenge", completed: false },
        { name: "Future Energy Storage", completed: false }
      ]
    }
  ];

  const achievements = [
    { name: "Power Up", description: "Started your first energy mission", earned: true },
    { name: "Solar Pioneer", description: "Completed solar power challenges", earned: true },
    { name: "Wind Warrior", description: "Mastered wind energy concepts", earned: false },
    { name: "Energy Expert", description: "Complete all energy missions", earned: false }
  ];

  const energyFacts = [
    { value: "1.3 billion", label: "people lack electricity access", icon: Zap },
    { value: "173,000 TW", label: "of solar energy hits Earth", icon: Sun },
    { value: "30%", label: "of global energy is renewable", icon: Wind }
  ];

  const handleStartTask = (levelId: number, taskIndex: number) => {
    setMissionProgress(prev => Math.min(prev + 15, 100));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-energy/5 to-yellow/10">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Mission Header */}
        <div className="mb-8">
          <Card className="p-6 bg-gradient-to-r from-energy/10 to-yellow/20 border-energy/30">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-energy rounded-full flex items-center justify-center shadow-lg animate-glow-pulse">
                <Zap className="h-8 w-8 text-energy-foreground" />
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  Clean Energy Mission
                  <Badge variant="energy">In Progress</Badge>
                </h1>
                <p className="text-muted-foreground mb-4">
                  Power up your knowledge about renewable energy! Explore solar, wind, and other 
                  clean energy sources to become an Energy Champion.
                </p>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-energy" />
                    <span>Progress: {missionProgress}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-primary" />
                    <span>750 XP Total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-cultural" />
                    <span>Est. 3-4 hours</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Mission Progress</span>
                <span className="text-sm">{missionProgress}%</span>
              </div>
              <Progress value={missionProgress} className="h-3" />
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Mission Levels */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Mission Levels</h2>
            
            <div className="space-y-6">
              {missionLevels.map((level, index) => (
                <Card 
                  key={level.id} 
                  className={`p-6 transition-all duration-300 ${
                    level.status === 'active' 
                      ? 'border-energy/50 shadow-lg hover:shadow-xl' 
                      : level.status === 'locked' 
                        ? 'opacity-60' 
                        : level.status === 'completed'
                          ? 'border-primary/50 bg-gradient-to-r from-primary/5 to-energy/5'
                          : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      level.status === 'active' 
                        ? 'bg-gradient-energy' 
                        : level.status === 'locked' 
                          ? 'bg-muted' 
                          : level.status === 'completed'
                            ? 'bg-gradient-eco'
                            : 'bg-gradient-energy'
                    }`}>
                      {level.status === 'locked' ? (
                        <Lock className="h-6 w-6 text-muted-foreground" />
                      ) : level.status === 'completed' ? (
                        <CheckCircle className="h-6 w-6 text-primary-foreground" />
                      ) : (
                        <level.icon className="h-6 w-6 text-energy-foreground" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">Level {level.id}: {level.title}</h3>
                        <Badge variant={
                          level.status === 'active' ? 'energy' : 
                          level.status === 'completed' ? 'default' : 
                          'outline'
                        }>
                          +{level.xp} XP
                        </Badge>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">{level.description}</p>
                      
                      {/* Tasks */}
                      <div className="space-y-2 mb-4">
                        {level.tasks.map((task, taskIndex) => (
                          <div key={taskIndex} className="flex items-center gap-3 p-2 bg-muted/30 rounded">
                            {task.completed ? (
                              <CheckCircle className="h-4 w-4 text-primary" />
                            ) : (
                              <div className="w-4 h-4 border-2 border-muted-foreground rounded-full" />
                            )}
                            <span className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}>
                              {task.name}
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex gap-3">
                        <Button 
                          variant={
                            level.status === 'active' ? 'energy' : 
                            level.status === 'completed' ? 'default' : 
                            'outline'
                          }
                          disabled={level.status === 'locked'}
                          onClick={() => level.status === 'active' && handleStartTask(level.id, 0)}
                        >
                          {level.status === 'locked' ? (
                            <>
                              <Lock className="h-4 w-4 mr-2" />
                              Locked
                            </>
                          ) : level.status === 'active' ? (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Continue
                            </>
                          ) : level.status === 'completed' ? (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Completed
                            </>
                          ) : (
                            <>
                              <Play className="h-4 w-4 mr-2" />
                              Start
                            </>
                          )}
                        </Button>
                        
                        {level.status !== 'locked' && (
                          <Button variant="outline">
                            {level.status === 'completed' ? 'Review' : 'Preview'}
                          </Button>
                        )}
                      </div>
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
                Energy Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-3 rounded-lg ${
                    achievement.earned 
                      ? 'bg-gradient-to-r from-energy/10 to-yellow/10 border border-energy/20' 
                      : 'bg-muted/30'
                  }`}>
                    <div className="flex items-center gap-3">
                      {achievement.earned ? (
                        <CheckCircle className="h-5 w-5 text-energy" />
                      ) : (
                        <div className="w-5 h-5 border-2 border-muted-foreground rounded-full" />
                      )}
                      <div>
                        <p className="font-medium text-sm">{achievement.name}</p>
                        <p className="text-xs text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Energy Facts */}
            <Card className="p-6 bg-gradient-to-br from-yellow/10 to-energy/20">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Zap className="h-5 w-5 text-energy" />
                Energy Facts
              </h3>
              <div className="space-y-4 text-sm">
                {energyFacts.map((fact, index) => (
                  <div key={index} className="p-3 bg-background/50 rounded-lg">
                    <div className="flex items-center gap-2 mb-1">
                      <fact.icon className="h-4 w-4 text-energy" />
                      <p className="font-medium text-energy">{fact.value}</p>
                    </div>
                    <p className="text-muted-foreground">{fact.label}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Energy Tools */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Energy Tools</h3>
              <div className="space-y-2">
                <Button variant="energy" size="sm" className="w-full justify-start">
                  <Sun className="h-4 w-4 mr-2" />
                  Solar Calculator
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Wind className="h-4 w-4 mr-2" />
                  Wind Speed Meter
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Battery className="h-4 w-4 mr-2" />
                  Energy Storage Calc
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Lightbulb className="h-4 w-4 mr-2" />
                  Efficiency Tips
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
