import Link from "next/link";

import { H2, P } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="my-20 flex flex-col items-center space-y-4 text-white">
      <H2>Not Found</H2>
      <P>The page you are looking for does not exist.</P>
      <Link href="/" className="rounded-md bg-secondary px-4 py-2">
        Return Home
      </Link>
    </main>
  );
}
