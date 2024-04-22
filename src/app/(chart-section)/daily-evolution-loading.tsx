import { Skeleton } from "@/components/ui";

export default function DailyEvolutionLoading() {
  return (
    <div className="p-4">
      <Skeleton className="h-64 w-full rounded-md bg-zinc-900/10" />
    </div>
  );
}
