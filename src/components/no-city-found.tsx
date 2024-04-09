import { Container, P } from "@/components/ui";

export default function NoCityFound() {
  return (
    <Container className="h-full flex flex-col items-center justify-center">
      <P className="text-white font-black text-lg mb-2">City not found.</P>
      <P className="text-white font-normal text-sm">Please try another city.</P>
    </Container>
  );
}
