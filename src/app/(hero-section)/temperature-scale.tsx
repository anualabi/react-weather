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
      className="h-8 w-8 rounded-md md:h-10 md:w-10 xl:h-12 xl:w-12"
      onClick={() => {
        if (temperatureUnit !== unit) toggleTemperature();
      }}
    >
      <GradientBox className="h-full w-full">
        <P
          className={cn(
            "flex items-center justify-center text-xl font-black text-accent md:text-2xl xl:text-4xl",
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
