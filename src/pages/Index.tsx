import { useState } from "react";
import { TabNavigation } from "@/components/TabNavigation";
import { ContentCard } from "@/components/ContentCard";
import { DownloadButton } from "@/components/DownloadButton";
import { CalculatorModal } from "@/components/CalculatorModal";
import { Calculator } from "lucide-react";
import coverReceitas from "@/assets/cover-receitas.jpg";
import planilhaBonus from "@/assets/planilha-bonus.jpg";

// Links do Google Drive - substitua pelos links reais
const LINK_RECEITAS = "https://drive.google.com/seu-link-receitas";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"receitas" | "bonus">("receitas");
  const [calculatorOpen, setCalculatorOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-cream">
      {/* Header decorativo */}
      <header className="pt-8 pb-4 px-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 text-muted-foreground text-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-soft" />
          Área do Aluno
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="px-4 pb-28 max-w-lg mx-auto">
        {activeTab === "receitas" ? (
          <ContentCard
            key="receitas"
            image={coverReceitas}
            imageAlt="Geladinhos gourmet coloridos com frutas frescas"
            title="Geladinhos Gourmet – Receitas Exclusivas"
            description="Acesse todas as receitas gourmet (fitness e alcoólicas) em PDF, prontas para fazer e vender."
          >
            <DownloadButton href={LINK_RECEITAS}>
              Baixar PDF das Receitas
            </DownloadButton>
          </ContentCard>
        ) : (
          <ContentCard
            key="bonus"
            image={planilhaBonus}
            imageAlt="Calculadora de precificação para geladinhos"
            title="Bônus: Calculadora Automática de Precificação"
            description="Descubra o preço ideal e o lucro por unidade de forma simples e rápida. Calcule direto na página!"
          >
            <button
              onClick={() => setCalculatorOpen(true)}
              className="w-full flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-4 px-6 rounded-2xl shadow-button hover:shadow-button-hover transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calculator className="w-5 h-5" />
              Entrar na Calculadora
            </button>
          </ContentCard>
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
