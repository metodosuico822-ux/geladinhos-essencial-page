import { cn } from "@/lib/utils";

interface ContentCardProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
}

export const ContentCard = ({
  image,
  imageAlt,
  title,
  description,
  children,
  className,
}: ContentCardProps) => {
  return (
    <div
      className={cn(
        "bg-gradient-card rounded-2xl overflow-hidden",
        "shadow-card border border-border/50",
        "animate-fade-in",
        className
      )}
    >
      <div className="w-full overflow-hidden">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-auto"
        />
      </div>
      
      <div className="p-6 space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground leading-tight">
          {title}
        </h2>
        
        <p className="text-muted-foreground text-base leading-relaxed">
          {description}
        </p>
        
        <div className="pt-2">
          {children}
        </div>
      </div>
    </div>
  );
};
