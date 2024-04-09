"use client";

import { GradientBox, P } from "@/components/ui";
import { cn } from "@/lib/utils";

type TemperatureScaleProps = Readonly<{
  unit: "C" | "F";
  className?: string;
}>;

export default function TemperatureScale({
  unit,
  className,
}: TemperatureScaleProps) {
  return (
    <button className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 rounded-md">
      <GradientBox className="w-full h-full">
        <P
          className={cn(
            "flex items-center justify-center font-black text-accent text-xl md:text-2xl xl:text-4xl",
            className
          )}
        >
          {unit}
        </P>
      </GradientBox>
    </button>
  );
}
