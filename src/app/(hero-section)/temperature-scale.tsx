"use client";

import { GradientBox, P } from "@/components/ui";
import { useToggleTemperatureStore } from "@/stores/ToggleTemperatureStore";
import { cn } from "@/lib/utils";
import { TemperatureUnit } from "@/lib/types";

type TemperatureScaleProps = Readonly<{
  unit: TemperatureUnit;
  className?: string;
}>;

export default function TemperatureScale({
  unit,
  className,
}: TemperatureScaleProps) {
  const { temperatureUnit, toggleTemperature } = useToggleTemperatureStore(
    (state) => ({
      temperatureUnit: state.temperatureUnit,
      toggleTemperature: state.toggleTemperature,
    })
  );

  return (
    <button
      className="w-8 h-8 md:w-10 md:h-10 xl:w-12 xl:h-12 rounded-md"
      onClick={() => {
        if (temperatureUnit !== unit) toggleTemperature();
      }}
    >
      <GradientBox className="w-full h-full">
        <P
          className={cn(
            "flex items-center justify-center font-black text-accent text-xl md:text-2xl xl:text-4xl",
            className,
            { "text-zinc-500": temperatureUnit !== unit }
          )}
        >
          {unit}
        </P>
      </GradientBox>
    </button>
  );
}
