"use client";

import { useEffect } from "react";

import { H2 } from "@/components/ui";
import { useToggleTemperatureStore } from "@/stores/ToggleTemperatureStore";

type CityDisplayProps = Readonly<{
  cityName: string;
  countryId: string;
}>;

export default function CityDisplay({ cityName, countryId }: CityDisplayProps) {
  const resetTemperatureUnit = useToggleTemperatureStore(
    (state) => state.resetTemperatureUnit
  );

  useEffect(() => {
    resetTemperatureUnit();
  }, [cityName, countryId, resetTemperatureUnit]);

  return (
    <H2 className="text-white mb-5 font-black md:mb-7 xl:mb-9">
      {cityName}, {countryId}
    </H2>
  );
}
