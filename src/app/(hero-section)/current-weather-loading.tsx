import { Container, Skeleton } from "@/components/ui";

export default function CurrentWeatherLoading() {
  return (
    <Container className="flex h-full flex-col items-center justify-center">
      <Skeleton className="mb-2 h-6 w-48" />
      <div className="mb-7 flex items-center">
        <Skeleton className="mr-2 h-8 w-24" /> <Skeleton className="h-6 w-16" />
      </div>
      <Skeleton className="h-4 w-36" />
    </Container>
  );
}
