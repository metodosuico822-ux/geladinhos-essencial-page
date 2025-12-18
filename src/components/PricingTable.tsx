import { TrendingUp, Zap, Star } from "lucide-react";

const pricingData = [
  {
    tipo: "Gourmet Tradicional",
    precoUnitario: "R$ 5,00 – R$ 7,00",
    combo: "5 por R$ 25,00",
    obs: "Ideal para vendas rápidas",
    icon: Zap,
  },
  {
    tipo: "Fitness",
    precoUnitario: "R$ 6,00 – R$ 8,00",
    combo: "5 por R$ 30,00",
    obs: "Público fiel e recorrente",
    icon: Star,
  },
  {
    tipo: "Alcoólico",
    precoUnitario: "R$ 8,00 – R$ 12,00",
    combo: "5 por R$ 45,00",
    obs: "Maior margem de lucro",
    icon: TrendingUp,
  },
];

export const PricingTable = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 animate-fade-in">
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
          📊 Preços Prontos para Vender
        </h2>
        <p className="text-muted-foreground text-base leading-relaxed">
          Se quiser começar imediatamente, use os preços sugeridos abaixo.
          <br />
          <span className="text-primary font-medium">Depois, ajuste com a calculadora conforme sua realidade.</span>
        </p>
      </div>

      {/* Tabela de preços */}
      <div className="space-y-4">
        {pricingData.map((item, index) => (
          <div
            key={index}
            className="bg-secondary/30 rounded-xl p-4 border border-border/30"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center">
                <item.icon className="w-4 h-4 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{item.tipo}</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div>
                <span className="text-muted-foreground block text-xs mb-0.5">Preço unitário</span>
                <span className="text-foreground font-medium">{item.precoUnitario}</span>
              </div>
              <div>
                <span className="text-muted-foreground block text-xs mb-0.5">Sugestão combo</span>
                <span className="text-foreground font-medium">{item.combo}</span>
              </div>
            </div>
            
            <div className="mt-3 pt-3 border-t border-border/30">
              <span className="text-xs text-primary font-medium">💡 {item.obs}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Dica final */}
      <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
        <p className="text-sm text-foreground text-center">
          <strong>Dica:</strong> Comece com o preço sugerido e ajuste conforme a demanda da sua região.
        </p>
      </div>
    </div>
  );
};
