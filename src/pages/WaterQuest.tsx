import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { 
  Droplets, 
  Target, 
  Trophy, 
  Play,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Lock,
  Waves,
  Fish,
  Beaker
} from "lucide-react";

export default function WaterQuest() {
  const [currentLevel, setCurrentLevel] = useState(1);
  const [questProgress, setQuestProgress] = useState(25);

  const questLevels = [
    {
      id: 1,
      title: "Water Cycle Basics",
      description: "Learn about the water cycle and its importance",
      xp: 100,
      status: "active",
      icon: Droplets,
      tasks: [
        { name: "Watch: The Water Cycle Video", completed: true },
        { name: "Quiz: Water Cycle Process", completed: true },
        { name: "Interactive: Label the Diagram", completed: false },
        { name: "Challenge: Rain Water Collection", completed: false }
      ]
    },
    {
      id: 2,
      title: "Ocean Conservation",
      description: "Discover marine ecosystems and protection strategies",
      xp: 150,
      status: "locked",
      icon: Waves,
      tasks: [
        { name: "Marine Life Exploration", completed: false },
        { name: "Pollution Impact Assessment", completed: false },
        { name: "Clean Ocean Action Plan", completed: false }
      ]
    },
    {
      id: 3,
      title: "Water Quality Testing",
      description: "Learn to test and improve water quality",
      xp: 200,
      status: "locked",
      icon: Beaker,
      tasks: [
        { name: "pH Testing Simulation", completed: false },
        { name: "Pollution Detection Game", completed: false },
        { name: "Water Purification Methods", completed: false }
      ]
    },
    {
      id: 4,
      title: "Aquatic Ecosystems",
      description: "Explore rivers, lakes, and wetland ecosystems",
      xp: 250,
      status: "locked",
      icon: Fish,
      tasks: [
        { name: "Ecosystem Balance Game", completed: false },
        { name: "Species Identification", completed: false },
        { name: "Habitat Conservation Project", completed: false }
      ]
    }
  ];

  const achievements = [
    { name: "First Drop", description: "Started your first water quest", earned: true },
    { name: "Water Saver", description: "Completed 5 conservation tasks", earned: true },
    { name: "Ocean Guardian", description: "Protected marine life", earned: false },
    { name: "H2O Expert", description: "Master all water quests", earned: false }
  ];

  const handleStartTask = (levelId: number, taskIndex: number) => {
    // Mock task completion
    setQuestProgress(prev => Math.min(prev + 25, 100));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-water/5 to-sky/10">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Quest Header */}
        <div className="mb-8">
          <Card className="p-6 bg-gradient-to-r from-water/10 to-sky/20 border-water/30">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-gradient-sky rounded-full flex items-center justify-center shadow-lg">
                <Droplets className="h-8 w-8 text-water-foreground" />
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
                  Water Conservation Quest
                  <Badge variant="water">Active</Badge>
                </h1>
                <p className="text-muted-foreground mb-4">
                  Dive deep into the world of water conservation and become a Water Guardian! 
                  Learn about the water cycle, ocean protection, and sustainable water use.
                </p>
                
                <div className="flex items-center gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-water" />
                    <span>Progress: {questProgress}%</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="h-4 w-4 text-energy" />
                    <span>700 XP Total</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-cultural" />
                    <span>Est. 2-3 hours</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Quest Progress</span>
                <span className="text-sm">{questProgress}%</span>
              </div>
              <Progress value={questProgress} className="h-3" />
            </div>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quest Levels */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Quest Levels</h2>
            
            <div className="space-y-6">
              {questLevels.map((level, index) => (
                <Card 
                  key={level.id} 
                  className={`p-6 transition-all duration-300 ${
                    level.status === 'active' 
                      ? 'border-water/50 shadow-lg hover:shadow-xl' 
                      : level.status === 'locked' 
                        ? 'opacity-60' 
                        : 'border-primary/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      level.status === 'active' 
                        ? 'bg-gradient-sky' 
                        : level.status === 'locked' 
                          ? 'bg-muted' 
                          : 'bg-gradient-eco'
                    }`}>
                      {level.status === 'locked' ? (
                        <Lock className="h-6 w-6 text-muted-foreground" />
                      ) : (
                        <level.icon className="h-6 w-6 text-water-foreground" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-semibold">Level {level.id}: {level.title}</h3>
                        <Badge variant={level.status === 'active' ? 'water' : 'outline'}>
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
                          variant={level.status === 'active' ? 'water' : 'outline'} 
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
                          ) : (
                            <>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Completed
                            </>
                          )}
                        </Button>
                        
                        {level.status === 'active' && (
                          <Button variant="outline">
                            Preview
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
                Water Achievements
              </h3>
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className={`p-3 rounded-lg ${
                    achievement.earned 
                      ? 'bg-gradient-to-r from-primary/10 to-energy/10 border border-primary/20' 
                      : 'bg-muted/30'
                  }`}>
                    <div className="flex items-center gap-3">
                      {achievement.earned ? (
                        <CheckCircle className="h-5 w-5 text-primary" />
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

            {/* Water Facts */}
            <Card className="p-6 bg-gradient-to-br from-sky/10 to-water/20">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Droplets className="h-5 w-5 text-water" />
                Did You Know?
              </h3>
              <div className="space-y-4 text-sm">
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="font-medium text-water">97%</p>
                  <p className="text-muted-foreground">of Earth's water is saltwater</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="font-medium text-water">2.5 billion</p>
                  <p className="text-muted-foreground">people lack proper sanitation</p>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <p className="font-medium text-water">1 drop</p>
                  <p className="text-muted-foreground">can make a difference!</p>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Water Conservation Tips</h3>
              <div className="space-y-2">
                <Button variant="water" size="sm" className="w-full justify-start">
                  <Droplets className="h-4 w-4 mr-2" />
                  Save Water at Home
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Waves className="h-4 w-4 mr-2" />
                  Protect Water Bodies
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Beaker className="h-4 w-4 mr-2" />
                  Test Water Quality
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
