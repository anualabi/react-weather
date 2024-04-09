"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

type ImageWithFallbackProps = Readonly<{
  fallback: string;
  alt: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
}>;

export default function ImageWithFallback({
  fallback,
  alt,
  src,
  width,
  height,
  className,
  ...props
}: ImageWithFallbackProps) {
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  return (
    <Image
      alt={alt}
      onError={() => setError(true)}
      src={error ? fallback : src}
      width={width}
      height={height}
      {...props}
      className={cn("w-20 h-20 object-cover", className)}
    />
  );
}
