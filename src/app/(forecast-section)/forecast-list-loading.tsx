import { Skeleton } from "@/components/ui";

export default function LoadingSkeleton() {
  return (
    <div className="flex flex-col xs:flex-row xs:flex-wrap items-center xs:justify-start xl:justify-between my-8">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="m-6 w-44 h-96">
          <Skeleton className="h-8 w-full mb-3" />
          <Skeleton className="h-20 w-20 mx-auto mb-5" />{" "}
          <Skeleton className="h-14 w-full mb-5" />{" "}
          <Skeleton className="h-6 w-full" />
        </div>
      ))}
    </div>
  );
}
