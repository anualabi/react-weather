"use client";

import { useEffect } from "react";

import { P } from "@/components/ui";
import { useToggleTemperatureStore } from "@/stores/ToggleTemperatureStore";

type TemperatureValueProps = Readonly<{
  value: number;
}>;

export default function TemperatureValue({
  value: initialValue,
}: TemperatureValueProps) {
  const { temperatureValue, setTemperatureValue } = useToggleTemperatureStore(
    (state) => ({
      temperatureValue: state.temperatureValue,
      setTemperatureValue: state.setTemperatureValue,
    })
  );

  useEffect(() => {
    setTemperatureValue(initialValue);
  }, [initialValue, setTemperatureValue]);

  return (
    <P className="text-accent font-normal mr-8 md:mr-12 xl:mr-16">
      <span className="text-6xl md:text-7xl xl:text-8xl">
        {temperatureValue ?? initialValue}&deg;
      </span>
    </P>
  );
}
