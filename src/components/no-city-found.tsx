import Link from "next/link";

import { Container, P } from "@/components/ui";

export default function NoCityFound() {
  return (
    <Container className="my-10 flex h-full flex-col items-center justify-center">
      <P className="mb-2 text-lg font-black text-white">City not found.</P>
      <Link
        href="/"
        className="my-2 cursor-pointer rounded-md bg-secondary px-4 py-2 text-white shadow-sm"
      >
        Go back to search
      </Link>
    </Container>
  );
}
