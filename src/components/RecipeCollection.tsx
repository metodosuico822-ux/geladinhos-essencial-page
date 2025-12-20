import { ExternalLink } from "lucide-react";
import gourmetImage from "@/assets/geladinhos-gourmet.png";
import fitnessImage from "@/assets/geladinhos-fitness.png";
import alcoolicosImage from "@/assets/geladinhos-alcoolicos.png";


const recipeCategories = [
  {
    id: "gourmet",
    title: "Geladinhos Gourmet Tradicionais",
    description: "Sabores cremosos e clássicos que vendem todos os dias e têm alta aceitação.",
    buttonText: "Acessar Receitas Gourmet",
    image: gourmetImage,
    link: "https://drive.google.com/file/d/1kUuc1kcdx3u4jiGQuuL3ea7AAFbJZ_-6/view",
  },
  {
    id: "fitness",
    title: "Geladinhos Fitness",
    description: "Receitas com apelo saudável, ideais para públicos fitness e vendas o ano inteiro.",
    buttonText: "Acessar Receitas Fitness",
    image: fitnessImage,
    link: "https://drive.google.com/file/d/1AqzDmzOEHT3j_nQuWImzdhdSHu_Lpq4T/view?usp=sharing",
  },
  {
    id: "alcoolicos",
    title: "Geladinhos Alcoólicos",
    description: "Opções diferenciadas com maior valor percebido e margem de lucro.",
    buttonText: "Acessar Receitas Alcoólicas",
    image: alcoolicosImage,
    link: "https://drive.google.com/file/d/14EFVdm2Tg_ucYZ8eAkoOdAbKhNrIF9vx/view?usp=sharing",
  },
];

export const RecipeCollection = () => {
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
            <div className="w-full">
              <img 
                src={category.image} 
                alt={category.title}
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="p-5">
              <h3 className="font-semibold text-foreground text-lg mb-1">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {category.description}
              </p>
              
              <a
                href={category.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-4 rounded-xl shadow-sm hover:shadow transition-all duration-200 text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                {category.buttonText}
              </a>
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