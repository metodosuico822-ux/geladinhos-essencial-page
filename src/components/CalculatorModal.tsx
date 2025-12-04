import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PricingCalculator } from "./PricingCalculator";
import { Calculator } from "lucide-react";

interface CalculatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CalculatorModal = ({ open, onOpenChange }: CalculatorModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <Calculator className="w-5 h-5 text-primary" />
            Calculadora de Precificação
          </DialogTitle>
        </DialogHeader>
        <PricingCalculator />
      </DialogContent>
    </Dialog>
  );
};
