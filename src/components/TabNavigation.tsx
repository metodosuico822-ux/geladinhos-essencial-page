import { BookOpen, Gift } from "lucide-react";
import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: "receitas" | "bonus";
  onTabChange: (tab: "receitas" | "bonus") => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="max-w-lg mx-auto flex">
        <button
          onClick={() => onTabChange("receitas")}
          className={cn(
            "flex-1 flex flex-col items-center justify-center gap-1.5 py-4 px-4",
            "transition-all duration-300 ease-out",
            "focus:outline-none focus:bg-secondary/50",
            activeTab === "receitas"
              ? "text-primary bg-secondary/30"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/20"
          )}
        >
          <BookOpen
            className={cn(
              "w-6 h-6 transition-transform duration-300",
              activeTab === "receitas" && "scale-110"
            )}
          />
          <span className="text-sm font-medium">Receitas</span>
          {activeTab === "receitas" && (
            <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-primary rounded-full" />
          )}
        </button>

        <button
          onClick={() => onTabChange("bonus")}
          className={cn(
            "flex-1 flex flex-col items-center justify-center gap-1.5 py-4 px-4",
            "transition-all duration-300 ease-out",
            "focus:outline-none focus:bg-secondary/50",
            activeTab === "bonus"
              ? "text-primary bg-secondary/30"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary/20"
          )}
        >
          <Gift
            className={cn(
              "w-6 h-6 transition-transform duration-300",
              activeTab === "bonus" && "scale-110"
            )}
          />
          <span className="text-sm font-medium">Bônus</span>
          {activeTab === "bonus" && (
            <div className="absolute bottom-0 left-1/4 right-1/4 h-0.5 bg-primary rounded-full" />
          )}
        </button>
      </div>
    </nav>
  );
};
