import { cn } from "@/lib/utils";

type SkeletonProps = Readonly<React.HTMLAttributes<HTMLDivElement>>;

export default function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      data-testid="skeleton"
      className={cn("animate-pulse rounded-md bg-zinc-900/10", className)}
      {...props}
    />
  );
}
