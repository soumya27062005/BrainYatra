import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Star, Users, Award } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-br from-background via-muted/30 to-secondary/20 py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Learn, Play & Save 
                <span className="bg-gradient-eco bg-clip-text text-transparent"> Our Planet</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join thousands of students across India on an exciting journey to become 
                <strong className="text-primary"> Eco Heroes</strong>. Make learning about 
                environment fun, competitive, and impactful!
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="eco" size="xl" className="group" onClick={() => window.location.href = '/student-portal'}>
                <Play className="h-5 w-5 mr-2 group-hover:animate-bounce-gentle" />
                Start Your Quest
              </Button>
              <Button variant="outline" size="xl">
                Watch Demo
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-4 pt-8">
              <Card className="p-4 text-center bg-gradient-nature/10 border-primary/20">
                <Users className="h-6 w-6 mx-auto mb-2 text-primary" />
                <div className="font-bold text-lg">50,000+</div>
                <div className="text-sm text-muted-foreground">Students</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-energy/10 border-energy/20">
                <Star className="h-6 w-6 mx-auto mb-2 text-energy" />
                <div className="font-bold text-lg">200+</div>
                <div className="text-sm text-muted-foreground">Eco Quests</div>
              </Card>
              <Card className="p-4 text-center bg-gradient-sky/10 border-water/20">
                <Award className="h-6 w-6 mx-auto mb-2 text-water" />
                <div className="font-bold text-lg">5,000+</div>
                <div className="text-sm text-muted-foreground">Trees Planted</div>
              </Card>
            </div>
          </div>

          {/* Right Content - Interactive Preview */}
          <div className="relative">
            <Card className="p-6 bg-gradient-to-br from-background to-muted/50 shadow-eco">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Your Eco Journey</h3>
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-energy fill-current" />
                    <span className="font-bold text-energy">Level 7 - Green Warrior</span>
                  </div>
                </div>
                
                {/* Progress Map */}
                <div className="relative h-64 bg-gradient-sky rounded-lg overflow-hidden">
                  <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                  
                  {/* Quest Points */}
                  <div className="absolute top-4 left-4 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-glow animate-glow-pulse">
                    <span className="text-xs text-primary-foreground font-bold">1</span>
                  </div>
                  <div className="absolute top-16 right-8 w-8 h-8 bg-energy rounded-full flex items-center justify-center shadow-energy">
                    <span className="text-xs text-energy-foreground font-bold">2</span>
                  </div>
                  <div className="absolute bottom-8 left-12 w-8 h-8 bg-water rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-xs text-water-foreground font-bold">3</span>
                  </div>
                  
                  {/* Current Quest Highlight */}
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-gradient-eco rounded-full flex items-center justify-center shadow-eco animate-bounce-gentle">
                    <Star className="h-6 w-6 text-primary-foreground fill-current" />
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="water" className="justify-start" onClick={() => window.location.href = '/water-quest'}>
                    <div className="text-left">
                      <div className="font-medium">Water Quest</div>
                      <div className="text-xs opacity-80">Save H2O Challenge</div>
                    </div>
                  </Button>
                  <Button variant="energy" className="justify-start" onClick={() => window.location.href = '/energy-mission'}>
                    <div className="text-left">
                      <div className="font-medium">Energy Mission</div>
                      <div className="text-xs opacity-80">Solar Power Lab</div>
                    </div>
                  </Button>
                </div>
              </div>
            </Card>

            {/* Floating Achievement */}
            <div className="absolute -top-4 -right-4 bg-cultural text-cultural-foreground px-4 py-2 rounded-full shadow-energy animate-eco-pulse">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4" />
                <span className="text-sm font-bold">New Badge!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
