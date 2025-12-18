import { Dumbbell, Wine, ExternalLink } from "lucide-react";
import gourmetImage from "@/assets/geladinhos-gourmet.png";

interface RecipeCollectionProps {
  pdfLink: string;
}

const recipeCategories = [
  {
    id: "gourmet",
    title: "Geladinhos Gourmet Tradicionais",
    emoji: "",
    description: "Sabores cremosos e clássicos que vendem todos os dias e têm alta aceitação.",
    buttonText: "Acessar Receitas Gourmet",
    icon: null,
    image: gourmetImage,
  },
  {
    id: "fitness",
    title: "Geladinhos Fitness",
    emoji: "💪",
    description: "Receitas com apelo saudável, ideais para públicos fitness e vendas o ano inteiro.",
    buttonText: "Acessar Receitas Fitness",
    icon: Dumbbell,
    image: null,
  },
  {
    id: "alcoolicos",
    title: "Geladinhos Alcoólicos",
    emoji: "🍹",
    description: "Opções diferenciadas com maior valor percebido e margem de lucro.",
    buttonText: "Acessar Receitas Alcoólicas",
    icon: Wine,
    image: null,
  },
];

export const RecipeCollection = ({ pdfLink }: RecipeCollectionProps) => {
  return (
    <div className="space-y-4 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-2">
          🍓 Coleção de Receitas Lucrativas
        </h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Escolha a categoria e acesse as receitas organizadas para você.
        </p>
      </div>

      {/* Cards */}
      <div className="space-y-4">
        {recipeCategories.map((category) => (
          <div
            key={category.id}
            className="bg-card rounded-2xl overflow-hidden shadow-card border border-border/50 hover:shadow-lg transition-shadow duration-300"
          >
            {category.image && (
              <div className="w-full h-40 overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className={`p-5 ${category.image ? '' : ''}`}>
              <div className="flex items-start gap-4">
                {category.icon && (
                  <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                )}
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {category.emoji} {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {category.description}
                  </p>
                  
                  <a
                    href={pdfLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-4 rounded-xl shadow-sm hover:shadow transition-all duration-200 text-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    {category.buttonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dica */}
      <div className="p-4 bg-secondary/40 rounded-xl border border-border/30 text-center">
        <p className="text-xs text-muted-foreground">
          💡 <span className="text-foreground font-medium">Dica:</span> Comece pelas receitas gourmet tradicionais — são as que vendem mais rápido!
        </p>
      </div>
    </div>
  );
};