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
    <Container className="my-10 flex flex-col items-center">
      <H2 className="mb-4 text-white">{error.message}</H2>
    </Container>
  );
}
