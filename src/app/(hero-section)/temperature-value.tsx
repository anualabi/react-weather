"use client";

import { P } from "@/components/ui";

type TemperatureValueProps = Readonly<{
  value: number;
}>;

export default function TemperatureValue({
  value: initialValue,
}: TemperatureValueProps) {
  return (
    <P className="text-accent font-normal mr-8 md:mr-12 xl:mr-16">
      <span className="text-6xl md:text-7xl xl:text-8xl">
        {initialValue}&deg;
      </span>
    </P>
  );
}
