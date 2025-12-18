import { BookOpen, Calculator, DollarSign } from "lucide-react";
import { cn } from "@/lib/utils";

export type TabType = "receitas" | "calculadora" | "precos";

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
}

export const TabNavigation = ({ activeTab, onTabChange }: TabNavigationProps) => {
  const tabs = [
    { id: "receitas" as TabType, label: "Receitas", icon: BookOpen },
    { id: "calculadora" as TabType, label: "Calculadora", icon: Calculator },
    { id: "precos" as TabType, label: "Preços", icon: DollarSign },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="max-w-lg mx-auto flex">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex-1 flex flex-col items-center justify-center gap-1 py-3 px-2",
              "transition-all duration-300 ease-out",
              "focus:outline-none focus:bg-secondary/50",
              activeTab === tab.id
                ? "text-primary bg-secondary/30"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/20"
            )}
          >
            <tab.icon
              className={cn(
                "w-5 h-5 transition-transform duration-300",
                activeTab === tab.id && "scale-110"
              )}
            />
            <span className="text-xs font-medium">{tab.label}</span>
            {activeTab === tab.id && (
              <div className="absolute bottom-0 h-0.5 bg-primary rounded-full" style={{ width: '50%' }} />
            )}
          </button>
        ))}
      </div>
    </nav>
  );
};
