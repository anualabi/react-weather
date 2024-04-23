import { Skeleton } from "@/components/ui";

export default function ForecastListLoading() {
  return (
    <div className="my-8 flex flex-col items-center xs:flex-row xs:flex-wrap xs:justify-start xl:justify-between">
      {[...Array(5)].map((_, index) => (
        <div key={index} className="m-6 h-96 w-44">
          <Skeleton className="mb-3 h-8 w-full" />
          <Skeleton className="mx-auto mb-5 h-20 w-20" />{" "}
          <Skeleton className="mb-5 h-14 w-full" />{" "}
          <Skeleton className="h-6 w-full" />
        </div>
      ))}
    </div>
  );
}
