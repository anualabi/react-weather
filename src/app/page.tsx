import { Suspense } from "react";

import NoCityFound from "@/components/no-city-found";
import { H2 } from "@/components/ui";
import { getCity } from "@/lib/services";
import { DailyEvolution, DailyEvolutionLoading } from "./(chart-section)";
import { ForecastList, ForecastListLoading } from "./(forecast-section)";
import {
  CitySearch,
  CurrentWeather,
  CurrentWeatherLoading,
} from "./(hero-section)";

type HomeProps = Readonly<{
  searchParams: {
    city?: string;
  };
}>;

export default async function Home({ searchParams }: HomeProps) {
  const city = searchParams?.city ?? "Amsterdam";

  const cities = await getCity(city);
  if (cities.length === 0) {
    return <NoCityFound />;
  }
  return (
    <main>
      <section className="flex h-[calc(100vh-64px)] flex-col md:h-[calc(100vh-80px)] xl:h-[calc(100vh-96px)]">
        <div className="flex h-52 items-center justify-center md:h-60 xl:h-72">
          <CitySearch />
        </div>
        <div className="flex-1 bg-secondary">
          <Suspense fallback={<CurrentWeatherLoading />}>
            <CurrentWeather city={cities[0]} />
          </Suspense>
        </div>
      </section>
      <section className="mx-auto my-32 min-h-96 max-w-7xl px-5">
        <H2 className="font-bold uppercase text-accent">5 Days Forecast</H2>
        <Suspense fallback={<ForecastListLoading />}>
          <ForecastList cityKey={cities[0].Key} />
        </Suspense>
      </section>
      <section className="my-32 min-h-96 bg-secondary px-5">
        <div className="mx-auto max-w-7xl py-24">
          <H2 className="font-bold uppercase text-white">Daily Evolution</H2>
          <Suspense fallback={<DailyEvolutionLoading />}>
            <DailyEvolution cityKey={cities[0].Key} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
