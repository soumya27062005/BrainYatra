import logoImage from "@/assets/brainyatra-logo.png";

interface BrainYatraLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const BrainYatraLogo = ({ className = "", size = "md" }: BrainYatraLogoProps) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img 
        src={logoImage} 
        alt="BrainYatra Logo" 
        className={`${sizeClasses[size]} w-auto animate-leaf-sway`}
      />
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold bg-gradient-eco bg-clip-text text-transparent">
          BrainYatra
        </h1>
        <p className="text-xs text-muted-foreground font-medium">
          Eco Learning Journey
        </p>
      </div>
    </div>
  );
};
