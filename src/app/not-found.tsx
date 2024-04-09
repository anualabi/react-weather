import Link from "next/link";

import { H2, P } from "@/components/ui";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center my-20 space-y-4 text-white">
      <H2>Not Found</H2>
      <P>The page you are looking for does not exist.</P>
      <Link href="/" className="px-4 py-2 bg-secondary rounded-md">
        Return Home
      </Link>
    </main>
  );
}
