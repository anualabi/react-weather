import { Skeleton } from "@/components/ui";

export default function DailyEvolutionLoading() {
  return (
    <div className="p-4">
      <Skeleton className="w-full h-64 rounded-md bg-zinc-900/10" />
    </div>
  );
}
