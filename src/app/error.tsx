"use client";

import { useEffect } from "react";

import { Container, H2 } from "@/components/ui";

export default function Error({
  error,
}: Readonly<{
  error: Error & { digest?: string };
}>) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <Container className="flex flex-col items-center my-10">
      <H2 className="text-white mb-4">{error.message}</H2>
    </Container>
  );
}
