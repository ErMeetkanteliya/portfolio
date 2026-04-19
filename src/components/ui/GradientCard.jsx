import { cn } from "@/lib/utils";

export function GradientCard({
  children,
  className,
  animated = false,
  hoverEffect = true,
}) {
  return (
    <div
      className={cn(
        "group relative overflow-hidden",
        hoverEffect && "transition-all duration-300 hover:scale-[1.02]",
        className
      )}
    >
      {/* Gradient Border */}
      <div
        className={cn(
          "absolute -inset-[1px] bg-gradient-to-r from-primary-500 to-accent-400 rounded-xl opacity-50",
          animated && "animate-gradient-x",
          hoverEffect && "group-hover:opacity-100 transition-opacity"
        )}
      />

      {/* Content */}
      <div className="relative bg-dark-card rounded-xl h-full">{children}</div>
    </div>
  );
}

