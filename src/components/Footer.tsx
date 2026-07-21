import { BrainYatraLogo } from "./BrainYatraLogo";
import { Button } from "@/components/ui/button";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-muted/30 to-secondary/20 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <BrainYatraLogo size="sm" />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Empowering the next generation through gamified environmental education. 
              Making sustainability learning fun and impactful.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <Leaf className="h-4 w-4 text-primary animate-leaf-sway" />
              <span className="text-muted-foreground">
                Made with 💚 for Planet Earth
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Student Portal</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Teacher Dashboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Eco Quests</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Leaderboard</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Impact Tracker</a></li>
            </ul>
          </div>

          {/* Learning Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Environmental Topics</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Climate Change</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Sustainability Guide</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Teacher Resources</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Help Center</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Get in Touch</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">hello@brainyatra.edu</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">New Delhi, India</span>
              </div>
            </div>

            <div className="mt-4">
              <Button variant="outline" size="sm" className="w-full">
                Request Demo
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 BrainYatra. All rights reserved. | Transforming education for a greener future.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Support</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
