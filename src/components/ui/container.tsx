import { cn } from "@/lib/utils";

export type ContainerProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export default function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("max-w-[1440px] w-full mx-auto px-5", className)}>
      {children}
    </div>
  );
}
