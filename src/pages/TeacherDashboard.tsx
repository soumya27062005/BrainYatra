import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { 
  Users, 
  BookOpen, 
  BarChart3, 
  Settings, 
  Award,
  TrendingUp,
  Clock,
  Target,
  Plus,
  Download,
  Bell
} from "lucide-react";

export default function TeacherDashboard() {
  const classStats = [
    { title: "Total Students", value: "32", icon: Users, change: "+2 this week" },
    { title: "Active Quests", value: "8", icon: Target, change: "3 new this month" },
    { title: "Completion Rate", value: "78%", icon: TrendingUp, change: "+5% from last month" },
    { title: "Avg. Study Time", value: "45min", icon: Clock, change: "+8min daily" }
  ];

  const recentActivities = [
    { student: "Arjun Sharma", action: "Completed Water Conservation Quest", time: "2 hours ago", xp: "+250 XP" },
    { student: "Priya Mehta", action: "Started Solar Energy Mission", time: "3 hours ago", xp: "+50 XP" },
    { student: "Rahul Singh", action: "Earned 'Green Warrior' Badge", time: "5 hours ago", xp: "+100 XP" },
    { student: "Sneha Patel", action: "Submitted Plastic Reduction Project", time: "1 day ago", xp: "+300 XP" }
  ];

  const topPerformers = [
    { name: "Arjun Sharma", xp: 2450, level: 7, badge: "Eco Hero" },
    { name: "Priya Mehta", xp: 2380, level: 7, badge: "Water Warrior" },
    { name: "Rahul Singh", xp: 2250, level: 6, badge: "Energy Expert" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Teacher Dashboard</h1>
            <p className="text-muted-foreground">Welcome back, Mrs. Sharma! Here's how your class is performing.</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Download Report
            </Button>
            <Button variant="eco">
              <Plus className="h-4 w-4 mr-2" />
              Create Quest
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {classStats.map((stat, index) => (
            <Card key={index} className="p-6 hover:shadow-eco transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
                <Badge variant="secondary" className="text-xs">
                  {stat.change}
                </Badge>
              </div>
              <div>
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold">Recent Student Activities</h2>
                <Button variant="outline" size="sm">
                  <Bell className="h-4 w-4 mr-2" />
                  View All
                </Button>
              </div>
              
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors">
                    <div className="flex-1">
                      <p className="font-medium">{activity.student}</p>
                      <p className="text-sm text-muted-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    <Badge variant="energy" className="ml-4">
                      {activity.xp}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Class Progress */}
            <Card className="p-6 mt-6">
              <h2 className="text-xl font-semibold mb-6">Current Quests Progress</h2>
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Water Conservation Challenge</span>
                    <span className="text-sm text-muted-foreground">24/32 students</span>
                  </div>
                  <Progress value={75} className="mb-2" />
                  <p className="text-xs text-muted-foreground">Due in 5 days</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Solar Energy Mission</span>
                    <span className="text-sm text-muted-foreground">18/32 students</span>
                  </div>
                  <Progress value={56} className="mb-2" />
                  <p className="text-xs text-muted-foreground">Due in 8 days</p>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">Plastic Reduction Project</span>
                    <span className="text-sm text-muted-foreground">12/32 students</span>
                  </div>
                  <Progress value={38} className="mb-2" />
                  <p className="text-xs text-muted-foreground">Due in 12 days</p>
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Performers */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-energy" />
                Top Performers
              </h3>
              <div className="space-y-4">
                {topPerformers.map((student, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-gradient-to-r from-primary/5 to-energy/5 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-eco rounded-full flex items-center justify-center text-sm font-bold text-primary-foreground">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{student.name}</p>
                      <p className="text-xs text-muted-foreground">Level {student.level} • {student.xp} XP</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {student.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="cultural" size="sm" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Assign New Quest
                </Button>
                <Button variant="water" size="sm" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Analytics
                </Button>
                <Button variant="energy" size="sm" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  Manage Students
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  Class Settings
                </Button>
              </div>
            </Card>

            {/* Engagement Chart */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Weekly Engagement</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Mon</span>
                  <div className="flex-1 mx-3">
                    <Progress value={85} />
                  </div>
                  <span className="text-sm">85%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Tue</span>
                  <div className="flex-1 mx-3">
                    <Progress value={92} />
                  </div>
                  <span className="text-sm">92%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Wed</span>
                  <div className="flex-1 mx-3">
                    <Progress value={78} />
                  </div>
                  <span className="text-sm">78%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Thu</span>
                  <div className="flex-1 mx-3">
                    <Progress value={88} />
                  </div>
                  <span className="text-sm">88%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Fri</span>
                  <div className="flex-1 mx-3">
                    <Progress value={95} />
                  </div>
                  <span className="text-sm">95%</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
