import Link from "next/link";

import { Container, P } from "@/components/ui";

export default function NoCityFound() {
  return (
    <Container className="h-full flex flex-col items-center justify-center my-10">
      <P className="text-white font-black text-lg mb-2">City not found.</P>
      <Link
        href="/"
        className="px-4 py-2 my-2 bg-secondary text-white rounded-md shadow-sm cursor-pointer"
      >
        Go back to search
      </Link>
    </Container>
  );
}
