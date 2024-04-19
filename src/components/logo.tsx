import Link from "next/link";

import { H2 } from "@/components/ui";

export default function Logo() {
  return (
    <Link href="/">
      <H2 className="font-black capitalize text-white">React Weather</H2>
    </Link>
  );
}
