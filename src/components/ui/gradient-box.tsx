import { cn } from "@/lib/utils";

export type GradientBoxProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export default function GradientBox({ children, className }: GradientBoxProps) {
  return (
    <div
      className={cn(
        "bg-gradient-to-b from-transparent from-0% via-[#C4C4C405] via-43.85% to-[#C4C4C420] to-100% rounded-md",
        className
      )}
    >
      {children}
    </div>
  );
}
