import { Container, Skeleton } from "@/components/ui";

export default function CurrentWeatherLoading() {
  return (
    <Container className="h-full flex flex-col items-center justify-center">
      <Skeleton className="h-6 w-48 mb-2" />
      <div className="flex items-center mb-7">
        <Skeleton className="h-8 w-24 mr-2" /> <Skeleton className="h-6 w-16" />
      </div>
      <Skeleton className="h-4 w-36" />
    </Container>
  );
}
