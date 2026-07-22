import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/Header";
import { 
  Bell, 
  Trophy, 
  BookOpen, 
  Users,
  Star,
  Gift,
  AlertCircle,
  CheckCircle2,
  Clock,
  Trash2
} from "lucide-react";

interface Notification {
  id: number;
  type: 'achievement' | 'quest' | 'social' | 'system' | 'reward';
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: any;
}

export default function Notifications() {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: 1,
      type: 'achievement',
      title: 'New Badge Earned!',
      message: 'Congratulations! You earned the "Water Warrior" badge for completing the Water Conservation Quest.',
      time: '2 hours ago',
      read: false,
      icon: Trophy
    },
    {
      id: 2,
      type: 'quest',
      title: 'New Quest Available',
      message: 'A new Solar Energy Mission is now available. Start your renewable energy journey!',
      time: '4 hours ago',
      read: false,
      icon: BookOpen
    },
    {
      id: 3,
      type: 'social',
      title: 'Leaderboard Update',
      message: 'You moved up to #2 in your class leaderboard! Keep up the great work.',
      time: '6 hours ago',
      read: true,
      icon: Users
    },
    {
      id: 4,
      type: 'reward',
      title: 'Weekly Streak Bonus',
      message: 'Amazing! You have maintained a 7-day learning streak. Bonus 100 XP awarded!',
      time: '1 day ago',
      read: true,
      icon: Gift
    },
    {
      id: 5,
      type: 'system',
      title: 'Platform Update',
      message: 'New features added to BrainYatra! Check out the improved quest interface and achievements system.',
      time: '2 days ago',
      read: false,
      icon: AlertCircle
    },
    {
      id: 6,
      type: 'achievement',
      title: 'Level Up!',
      message: 'Fantastic! You have reached Level 7 - Green Warrior. New challenges unlocked!',
      time: '3 days ago',
      read: true,
      icon: Star
    },
    {
      id: 7,
      type: 'quest',
      title: 'Quest Reminder',
      message: 'Don\'t forget to complete your Ocean Conservation challenge. Only 2 days remaining!',
      time: '3 days ago',
      read: true,
      icon: Clock
    }
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const markAsRead = (id: number) => {
    setNotifications(prev => prev.map(notification => 
      notification.id === id ? { ...notification, read: true } : notification
    ));
  };

  const markAllAsRead = () => {
    setNotifications(prev => prev.map(notification => ({ ...notification, read: true })));
  };

  const deleteNotification = (id: number) => {
    setNotifications(prev => prev.filter(notification => notification.id !== id));
  };

  const getNotificationColor = (type: string) => {
    const colors = {
      achievement: 'energy',
      quest: 'primary',
      social: 'cultural',
      system: 'water',
      reward: 'primary'
    };
    return colors[type as keyof typeof colors] || 'primary';
  };

  const getNotificationBg = (type: string) => {
    const backgrounds = {
      achievement: 'from-energy/10 to-yellow/10',
      quest: 'from-primary/10 to-nature/10',
      social: 'from-cultural/10 to-purple/10',
      system: 'from-water/10 to-sky/10',
      reward: 'from-primary/10 to-energy/10'
    };
    return backgrounds[type as keyof typeof backgrounds] || 'from-primary/10 to-energy/10';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-secondary/20">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-3">
              <Bell className="h-8 w-8 text-primary" />
              Notifications
              {unreadCount > 0 && (
                <Badge variant="energy" className="ml-2">
                  {unreadCount} new
                </Badge>
              )}
            </h1>
            <p className="text-muted-foreground">Stay updated with your eco-learning journey</p>
          </div>
          
          <div className="flex gap-3 mt-4 md:mt-0">
            {unreadCount > 0 && (
              <Button variant="outline" onClick={markAllAsRead}>
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Mark All as Read
              </Button>
            )}
          </div>
        </div>

        {/* Notifications List */}
        <div className="max-w-4xl mx-auto">
          {notifications.length === 0 ? (
            <Card className="p-12 text-center">
              <Bell className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h2 className="text-xl font-semibold mb-2">No notifications yet</h2>
              <p className="text-muted-foreground">
                Start your eco-learning journey to receive updates and achievements!
              </p>
            </Card>
          ) : (
            <div className="space-y-4">
              {notifications.map((notification) => (
                <Card 
                  key={notification.id} 
                  className={`p-6 transition-all duration-300 hover:shadow-lg ${
                    !notification.read 
                      ? `border-l-4 border-l-${getNotificationColor(notification.type)} bg-gradient-to-r ${getNotificationBg(notification.type)}` 
                      : 'opacity-70'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-gradient-${getNotificationColor(notification.type)} shadow-lg`}>
                      <notification.icon className={`h-6 w-6 text-${getNotificationColor(notification.type)}-foreground`} />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="font-semibold text-lg">{notification.title}</h3>
                        <div className="flex items-center gap-2">
                          {!notification.read && (
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                          )}
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => deleteNotification(notification.id)}
                            className="opacity-50 hover:opacity-100"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-3">{notification.message}</p>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-muted-foreground">{notification.time}</span>
                        
                        <div className="flex gap-2">
                          <Badge variant="outline" className="capitalize">
                            {notification.type}
                          </Badge>
                          
                          {!notification.read && (
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => markAsRead(notification.id)}
                            >
                              Mark as Read
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Summary Stats */}
        {notifications.length > 0 && (
          <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center bg-gradient-to-br from-primary/10 to-energy/10">
              <Trophy className="h-8 w-8 text-primary mx-auto mb-3" />
              <p className="text-2xl font-bold text-primary">
                {notifications.filter(n => n.type === 'achievement').length}
              </p>
              <p className="text-sm text-muted-foreground">Achievement Notifications</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-water/10 to-sky/10">
              <BookOpen className="h-8 w-8 text-water mx-auto mb-3" />
              <p className="text-2xl font-bold text-water">
                {notifications.filter(n => n.type === 'quest').length}
              </p>
              <p className="text-sm text-muted-foreground">Quest Updates</p>
            </Card>
            
            <Card className="p-6 text-center bg-gradient-to-br from-cultural/10 to-purple/10">
              <Users className="h-8 w-8 text-cultural mx-auto mb-3" />
              <p className="text-2xl font-bold text-cultural">
                {notifications.filter(n => n.type === 'social').length}
              </p>
              <p className="text-sm text-muted-foreground">Social Updates</p>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
