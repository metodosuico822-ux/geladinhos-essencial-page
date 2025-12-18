import { useState } from "react";
import { TabNavigation, TabType } from "@/components/TabNavigation";
import { ContentCard } from "@/components/ContentCard";
import { DownloadButton } from "@/components/DownloadButton";
import { CalculatorModal } from "@/components/CalculatorModal";
import { WelcomeHeader } from "@/components/WelcomeHeader";
import { PricingTable } from "@/components/PricingTable";
import { Calculator, BookOpen } from "lucide-react";
import coverReceitas from "@/assets/cover-receitas.png";
import planilhaBonus from "@/assets/planilha-bonus.png";

// Links do Google Drive
const LINK_RECEITAS = "https://drive.google.com/file/d/178j1S0BDT82al_4cULLbcZBlbn7LKHbf/view?usp=sharing";

const Index = () => {
  const [activeTab, setActiveTab] = useState<TabType>("receitas");
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-cream">
      {/* Header decorativo */}
      <header className="pt-6 pb-4 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 text-muted-foreground text-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
          Área do Aluno
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="px-4 pb-28 max-w-lg mx-auto space-y-6">
        {/* Welcome Header - sempre visível */}
        <WelcomeHeader />

        {/* Conteúdo da aba ativa */}
        {activeTab === "receitas" && (
          <ContentCard
            key="receitas"
            image={coverReceitas}
            imageAlt="Geladinhos gourmet coloridos com frutas frescas"
            title="Coleção de Receitas Lucrativas"
            description=""
          >
            {/* Microcopy explicativa */}
            <div className="mb-4 p-4 bg-secondary/30 rounded-xl border border-border/30">
              <p className="text-sm text-foreground leading-relaxed">
                Receitas organizadas para vender todos os dias, divididas em:
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Gourmet Tradicionais
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Fitness
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Alcoólicas
                </li>
              </ul>
              <p className="mt-2 text-xs text-primary font-medium">
                Todas testadas e prontas para produção.
              </p>
            </div>

            <DownloadButton href={LINK_RECEITAS}>
              <BookOpen className="w-5 h-5" />
              Acessar Coleção de Receitas Lucrativas
            </DownloadButton>
          </ContentCard>
        )}

        {activeTab === "calculadora" && (
          <ContentCard
            key="calculadora"
            image={planilhaBonus}
            imageAlt="Calculadora de precificação para geladinhos"
            title="Calculadora Automática de Precificação"
            description=""
          >
            {/* Contexto estratégico */}
            <div className="mb-4 space-y-3">
              <div className="p-4 bg-primary/10 rounded-xl border border-primary/20">
                <p className="text-sm text-foreground font-medium">
                  Use esta calculadora sempre antes de vender.
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Ela evita o erro mais comum de iniciantes: <span className="text-primary font-medium">vender muito e ganhar pouco.</span>
                </p>
              </div>

              {/* Exemplo */}
              <div className="p-4 bg-secondary/30 rounded-xl border border-border/30">
                <p className="text-xs text-muted-foreground font-medium mb-2">Exemplo:</p>
                <ul className="text-sm text-foreground space-y-1">
                  <li>• Custo do lote: R$120</li>
                  <li>• Quantidade: 50 unidades</li>
                  <li>• Lucro desejado: 100%</li>
                </ul>
                <p className="mt-2 text-sm text-primary font-medium">
                  → Preço sugerido: automaticamente calculado
                </p>
              </div>
            </div>

            <button
              onClick={() => setCalculatorOpen(true)}
              className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-2xl shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calculator className="w-5 h-5" />
              Entrar na Calculadora
            </button>
          </ContentCard>
        )}

        {activeTab === "precos" && (
          <PricingTable />
        )}
      </main>

      {/* Navegação por abas */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Modal da Calculadora */}
      <CalculatorModal open={calculatorOpen} onOpenChange={setCalculatorOpen} />
    </div>
  );
};

export default Index;
