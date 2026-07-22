import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { 
  Users, 
  School, 
  BookOpen, 
  BarChart3, 
  Settings, 
  Award,
  TrendingUp,
  Globe,
  Shield,
  Database,
  Zap,
  Download,
  Plus,
  Activity,
  DollarSign
} from "lucide-react";

export default function AdminPanel() {
  const systemStats = [
    { title: "Total Students", value: "12,847", icon: Users, change: "+8.2% this month", color: "primary" },
    { title: "Active Schools", value: "45", icon: School, change: "+3 new schools", color: "energy" },
    { title: "Quests Completed", value: "34,521", icon: BookOpen, change: "+12% this week", color: "water" },
    { title: "Revenue", value: "₹2,45,000", icon: DollarSign, change: "+15% growth", color: "cultural" }
  ];

  const schoolPerformance = [
    { name: "Delhi Public School", students: 450, engagement: 92, revenue: "₹45,000" },
    { name: "St. Mary's Convent", students: 380, engagement: 88, revenue: "₹38,000" },
    { name: "Kendriya Vidyalaya", students: 520, engagement: 85, revenue: "₹52,000" },
    { name: "Modern School", students: 320, engagement: 90, revenue: "₹32,000" }
  ];

  const recentActivities = [
    { action: "New school onboarded", detail: "Ryan International School", time: "2 hours ago", status: "success" },
    { action: "System maintenance", detail: "Database optimization completed", time: "4 hours ago", status: "info" },
    { action: "Payment received", detail: "DPS Gurgaon - ₹25,000", time: "6 hours ago", status: "success" },
    { action: "New quest published", detail: "Ocean Plastic Challenge", time: "1 day ago", status: "info" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Admin Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2">Admin Control Panel</h1>
            <p className="text-muted-foreground">Manage the BrainYatra platform and monitor system performance.</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <Button variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              System Report
            </Button>
            <Button variant="eco">
              <Plus className="h-4 w-4 mr-2" />
              Add School
            </Button>
          </div>
        </div>

        {/* System Stats */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {systemStats.map((stat, index) => (
            <Card key={index} className={`p-6 hover:shadow-eco transition-all duration-300 border-${stat.color}/20 bg-gradient-${stat.color}/10`}>
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`h-8 w-8 text-${stat.color}`} />
                <Badge variant="secondary" className="text-xs">
                  {stat.change}
                </Badge>
              </div>
              <div>
                <p className={`text-2xl font-bold text-${stat.color}`}>{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* School Performance */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                  <School className="h-5 w-5 text-primary" />
                  School Performance Dashboard
                </h2>
                <Button variant="outline" size="sm">
                  View All Schools
                </Button>
              </div>
              
              <div className="space-y-4">
                {schoolPerformance.map((school, index) => (
                  <div key={index} className="p-4 bg-gradient-to-r from-muted/30 to-secondary/20 rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">{school.name}</h3>
                      <Badge variant="energy">{school.revenue}</Badge>
                    </div>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-muted-foreground">Students</p>
                        <p className="font-semibold">{school.students}</p>
                      </div>
                      <div>
                        <p className="text-muted-foreground">Engagement</p>
                        <div className="flex items-center gap-2">
                          <Progress value={school.engagement} className="flex-1" />
                          <span className="font-semibold">{school.engagement}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* System Analytics */}
            <Card className="p-6">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-energy" />
                Platform Analytics
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-gradient-nature/10 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-primary">89%</p>
                  <p className="text-sm text-muted-foreground">User Retention</p>
                </div>
                <div className="text-center p-4 bg-gradient-energy/10 rounded-lg">
                  <Activity className="h-8 w-8 text-energy mx-auto mb-2" />
                  <p className="text-2xl font-bold text-energy">94%</p>
                  <p className="text-sm text-muted-foreground">System Uptime</p>
                </div>
                <div className="text-center p-4 bg-gradient-sky/10 rounded-lg">
                  <Globe className="h-8 w-8 text-water mx-auto mb-2" />
                  <p className="text-2xl font-bold text-water">23</p>
                  <p className="text-sm text-muted-foreground">States Covered</p>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Quest Completion Rate</span>
                    <span className="text-sm font-medium">78%</span>
                  </div>
                  <Progress value={78} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Student Engagement</span>
                    <span className="text-sm font-medium">85%</span>
                  </div>
                  <Progress value={85} />
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm">Teacher Adoption</span>
                    <span className="text-sm font-medium">67%</span>
                  </div>
                  <Progress value={67} />
                </div>
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activities */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Recent Activities
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <div key={index} className="text-sm">
                    <div className="flex items-start gap-3">
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        activity.status === 'success' ? 'bg-primary' : 'bg-energy'
                      }`}></div>
                      <div className="flex-1">
                        <p className="font-medium">{activity.action}</p>
                        <p className="text-muted-foreground">{activity.detail}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* System Status */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-energy" />
                System Status
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Database</span>
                  <Badge variant="default" className="bg-primary">Healthy</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">API Services</span>
                  <Badge variant="default" className="bg-primary">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Content Delivery</span>
                  <Badge variant="default" className="bg-primary">Optimal</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Payment Gateway</span>
                  <Badge variant="default" className="bg-primary">Active</Badge>
                </div>
              </div>
            </Card>

            {/* Quick Actions */}
            <Card className="p-6">
              <h3 className="font-semibold mb-4">Admin Actions</h3>
              <div className="space-y-2">
                <Button variant="cultural" size="sm" className="w-full justify-start">
                  <School className="h-4 w-4 mr-2" />
                  Manage Schools
                </Button>
                <Button variant="water" size="sm" className="w-full justify-start">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Content Management
                </Button>
                <Button variant="energy" size="sm" className="w-full justify-start">
                  <Users className="h-4 w-4 mr-2" />
                  User Management
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Settings className="h-4 w-4 mr-2" />
                  System Settings
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Database className="h-4 w-4 mr-2" />
                  Database Admin
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}