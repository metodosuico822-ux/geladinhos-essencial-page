import { BookOpen, ChefHat, DollarSign } from "lucide-react";

export const WelcomeHeader = () => {
  return (
    <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50 animate-fade-in">
      {/* Texto de boas-vindas */}
      <div className="text-center mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-semibold text-foreground mb-3">
          Bem-vinda(o)!
        </h1>
        <p className="text-muted-foreground text-base leading-relaxed max-w-md mx-auto">
          Você agora tem acesso a um sistema simples para produzir, precificar e vender geladinhos gourmet com lucro, mesmo começando do zero.
        </p>
      </div>

      {/* 3 Passos visuais */}
      <div className="grid grid-cols-3 gap-3">
        <div className="flex flex-col items-center text-center p-3 rounded-xl bg-secondary/40">
          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-2">
            <BookOpen className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs font-semibold text-primary mb-0.5">Passo 1</span>
          <span className="text-xs text-muted-foreground leading-tight">Escolha uma receita</span>
        </div>

        <div className="flex flex-col items-center text-center p-3 rounded-xl bg-secondary/40">
          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-2">
            <ChefHat className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs font-semibold text-primary mb-0.5">Passo 2</span>
          <span className="text-xs text-muted-foreground leading-tight">Produza o lote</span>
        </div>

        <div className="flex flex-col items-center text-center p-3 rounded-xl bg-secondary/40">
          <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center mb-2">
            <DollarSign className="w-5 h-5 text-primary" />
          </div>
          <span className="text-xs font-semibold text-primary mb-0.5">Passo 3</span>
          <span className="text-xs text-muted-foreground leading-tight">Defina o preço e venda</span>
        </div>
      </div>
    </div>
  );
};
