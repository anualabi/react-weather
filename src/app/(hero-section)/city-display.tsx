"use client";

import { H2 } from "@/components/ui";

type CityDisplayProps = Readonly<{
  cityName: string;
  countryId: string;
}>;

export default function CityDisplay({ cityName, countryId }: CityDisplayProps) {
  return (
    <H2 className="text-white mb-5 font-black md:mb-7 xl:mb-9">
      {cityName}, {countryId}
    </H2>
  );
}
