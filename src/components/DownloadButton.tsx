import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const DownloadButton = ({ href, children, className }: DownloadButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-3 w-full",
        "px-8 py-5 rounded-2xl font-semibold text-lg",
        "bg-gradient-rose text-primary-foreground",
        "shadow-button hover:shadow-lg",
        "transform transition-all duration-300 ease-out",
        "hover:scale-[1.02] hover:-translate-y-0.5",
        "active:scale-[0.98] active:translate-y-0",
        "focus:outline-none focus:ring-4 focus:ring-primary/30",
        className
      )}
    >
      <Download className="w-5 h-5" />
      {children}
    </a>
  );
};
