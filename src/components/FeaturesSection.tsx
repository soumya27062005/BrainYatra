import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  Trophy, 
  Target, 
  Users, 
  BarChart3, 
  Globe,
  BookOpen,
  Zap
} from "lucide-react";

export const FeaturesSection = () => {
  const studentFeatures = [
    {
      icon: Gamepad2,
      title: "Interactive Quests",
      description: "Complete fun eco-challenges, quizzes, and real-world missions",
      color: "energy"
    },
    {
      icon: Trophy,
      title: "Leaderboards & Badges",
      description: "Compete with classmates and earn exciting eco-hero badges",
      color: "primary"
    },
    {
      icon: Target,
      title: "Impact Tracker",
      description: "See your real environmental impact - trees planted, plastic saved",
      color: "water"
    },
    {
      icon: Globe,
      title: "Multilingual Learning",
      description: "Learn in English, Hindi, and regional Indian languages",
      color: "cultural"
    }
  ];

  const teacherFeatures = [
    {
      icon: BarChart3,
      title: "Student Analytics",
      description: "Track progress, engagement, and learning outcomes",
      color: "primary"
    },
    {
      icon: Users,
      title: "Classroom Management",
      description: "Assign quests, create groups, and manage student activities",
      color: "energy"
    },
    {
      icon: BookOpen,
      title: "Curriculum Integration",
      description: "Aligned with NCERT and state board environmental science syllabus",
      color: "water"
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Live notifications, progress alerts, and achievement updates",
      color: "cultural"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: "border-primary/20 bg-gradient-nature/10",
      energy: "border-energy/20 bg-gradient-energy/10",
      water: "border-water/20 bg-gradient-sky/10",
      cultural: "border-cultural/20 bg-cultural/10"
    };
    return colorMap[color] || colorMap.primary;
  };

  const getIconColor = (color: string) => {
    const colorMap: Record<string, string> = {
      primary: "text-primary",
      energy: "text-energy",
      water: "text-water",
      cultural: "text-cultural"
    };
    return colorMap[color] || colorMap.primary;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Designed for 
            <span className="bg-gradient-eco bg-clip-text text-transparent"> Students & Teachers</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            BrainYatra creates an engaging ecosystem where students learn through play 
            while teachers get powerful tools to track and enhance environmental education.
          </p>
        </div>

        {/* Student Features */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-eco rounded-full flex items-center justify-center">
                <Gamepad2 className="h-4 w-4 text-primary-foreground" />
              </span>
              For Students
            </h3>
            <Button variant="eco">
              Try Student App
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {studentFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className={`p-6 transition-all duration-300 hover:scale-105 hover:shadow-eco ${getColorClasses(feature.color)}`}
              >
                <feature.icon className={`h-8 w-8 mb-4 ${getIconColor(feature.color)}`} />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Teacher Features */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-energy rounded-full flex items-center justify-center">
                <BarChart3 className="h-4 w-4 text-energy-foreground" />
              </span>
              For Teachers & Admins
            </h3>
            <Button variant="cultural">
              Access Dashboard
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teacherFeatures.map((feature, index) => (
              <Card 
                key={index} 
                className={`p-6 transition-all duration-300 hover:scale-105 hover:shadow-energy ${getColorClasses(feature.color)}`}
              >
                <feature.icon className={`h-8 w-8 mb-4 ${getIconColor(feature.color)}`} />
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 p-8 bg-gradient-to-r from-muted/50 to-secondary/30 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Environmental Education?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join the revolution in eco-education. Make learning about sustainability engaging, 
            competitive, and impactful for the next generation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="quest" size="lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="lg">
              Request Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
