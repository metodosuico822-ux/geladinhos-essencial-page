import { useState, useMemo } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, DollarSign, TrendingUp, Package } from "lucide-react";

export const PricingCalculator = () => {
  const [ingredientCost, setIngredientCost] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [packagingCost, setPackagingCost] = useState<string>("");
  const [extraExpenses, setExtraExpenses] = useState<string>("");
  const [profitMargin, setProfitMargin] = useState<string>("");

  const results = useMemo(() => {
    const ingredients = parseFloat(ingredientCost) || 0;
    const qty = parseFloat(quantity) || 0;
    const packaging = parseFloat(packagingCost) || 0;
    const extras = parseFloat(extraExpenses) || 0;
    const margin = parseFloat(profitMargin) || 0;

    if (qty <= 0) {
      return null;
    }

    const totalCost = ingredients + packaging + extras;
    const costPerUnit = totalCost / qty;
    const suggestedPrice = costPerUnit * (1 + margin / 100);
    const profitPerUnit = suggestedPrice - costPerUnit;
    const totalProfit = profitPerUnit * qty;

    return {
      costPerUnit,
      suggestedPrice,
      profitPerUnit,
      totalProfit,
    };
  }, [ingredientCost, quantity, packagingCost, extraExpenses, profitMargin]);

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  };

  return (
    <div className="space-y-6">
      {/* Campos de entrada */}
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="ingredientCost" className="text-foreground font-medium">
            Preço total dos ingredientes do lote *
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">R$</span>
            <Input
              id="ingredientCost"
              type="number"
              placeholder="0,00"
              value={ingredientCost}
              onChange={(e) => setIngredientCost(e.target.value)}
              className="pl-10 bg-secondary/30 border-border focus:border-primary"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="quantity" className="text-foreground font-medium">
            Quantidade de geladinhos produzidos *
          </Label>
          <Input
            id="quantity"
            type="number"
            placeholder="Ex: 50"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="bg-secondary/30 border-border focus:border-primary"
            min="1"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="packagingCost" className="text-muted-foreground font-medium">
            Valor gasto em embalagens (opcional)
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">R$</span>
            <Input
              id="packagingCost"
              type="number"
              placeholder="0,00"
              value={packagingCost}
              onChange={(e) => setPackagingCost(e.target.value)}
              className="pl-10 bg-secondary/30 border-border focus:border-primary"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="extraExpenses" className="text-muted-foreground font-medium">
            Despesas extras (opcional)
          </Label>
          <div className="relative">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">R$</span>
            <Input
              id="extraExpenses"
              type="number"
              placeholder="0,00"
              value={extraExpenses}
              onChange={(e) => setExtraExpenses(e.target.value)}
              className="pl-10 bg-secondary/30 border-border focus:border-primary"
              min="0"
              step="0.01"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="profitMargin" className="text-foreground font-medium">
            Porcentagem de lucro desejada *
          </Label>
          <div className="relative">
            <Input
              id="profitMargin"
              type="number"
              placeholder="Ex: 100"
              value={profitMargin}
              onChange={(e) => setProfitMargin(e.target.value)}
              className="pr-10 bg-secondary/30 border-border focus:border-primary"
              min="0"
            />
            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-sm">%</span>
          </div>
        </div>
      </div>

      {/* Resultados */}
      {results && (
        <div className="mt-6 pt-6 border-t border-border space-y-3 animate-fade-in">
          <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
            <Calculator className="w-5 h-5 text-primary" />
            Resultados
          </h3>
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-secondary/50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <Package className="w-4 h-4" />
                Custo por unidade
              </div>
              <p className="text-xl font-bold text-foreground">
                {formatCurrency(results.costPerUnit)}
              </p>
            </div>

            <div className="bg-primary/10 rounded-xl p-4">
              <div className="flex items-center gap-2 text-primary text-sm mb-1">
                <DollarSign className="w-4 h-4" />
                Preço sugerido
              </div>
              <p className="text-xl font-bold text-primary">
                {formatCurrency(results.suggestedPrice)}
              </p>
            </div>

            <div className="bg-secondary/50 rounded-xl p-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm mb-1">
                <TrendingUp className="w-4 h-4" />
                Lucro por unidade
              </div>
              <p className="text-xl font-bold text-foreground">
                {formatCurrency(results.profitPerUnit)}
              </p>
            </div>

            <div className="bg-accent/20 rounded-xl p-4 border border-accent/30">
              <div className="flex items-center gap-2 text-accent-foreground text-sm mb-1">
                <TrendingUp className="w-4 h-4" />
                Lucro total do lote
              </div>
              <p className="text-xl font-bold text-accent-foreground">
                {formatCurrency(results.totalProfit)}
              </p>
            </div>
          </div>
        </div>
      )}

      {!results && (
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-center text-muted-foreground text-sm">
            Preencha os campos acima para ver os resultados
          </p>
        </div>
      )}
    </div>
  );
};
