import { useState } from "react";
import { TabNavigation } from "@/components/TabNavigation";
import { ContentCard } from "@/components/ContentCard";
import { DownloadButton } from "@/components/DownloadButton";
import coverReceitas from "@/assets/cover-receitas.jpg";
import planilhaBonus from "@/assets/planilha-bonus.jpg";

// Links do Google Drive - substitua pelos links reais
const LINK_RECEITAS = "https://drive.google.com/seu-link-receitas";
const LINK_PLANILHA = "https://drive.google.com/seu-link-planilha";

const Index = () => {
  const [activeTab, setActiveTab] = useState<"receitas" | "bonus">("receitas");

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
            imageAlt="Planilha de precificação automática em laptop"
            title="Bônus – Planilha Automática de Precificação"
            description="Descubra o preço ideal e o lucro por unidade com apenas 3 preenchimentos."
          >
            <DownloadButton href={LINK_PLANILHA}>
              Baixar Planilha
            </DownloadButton>
          </ContentCard>
        )}
      </main>

      {/* Navegação por abas */}
      <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  );
};

export default Index;
