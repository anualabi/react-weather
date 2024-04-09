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
      <section className="flex flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] xl:h-[calc(100vh-96px)]">
        <div className="flex items-center justify-center h-52 md:h-60 xl:h-72">
          <CitySearch />
        </div>
        <div className="flex-1 bg-secondary">
          <Suspense fallback={<CurrentWeatherLoading />}>
            <CurrentWeather city={cities[0]} />
          </Suspense>
        </div>
      </section>
      <section className="min-h-96 max-w-7xl mx-auto my-32 px-5">
        <H2 className="uppercase text-accent font-bold">5 Days Forecast</H2>
        <Suspense fallback={<ForecastListLoading />}>
          <ForecastList cityKey={cities[0].Key} />
        </Suspense>
      </section>
      <section className="bg-secondary min-h-96 my-32 px-5">
        <div className="max-w-7xl mx-auto py-24">
          <H2 className="uppercase text-white font-bold">Daily Evolution</H2>
          <Suspense fallback={<DailyEvolutionLoading />}>
            <DailyEvolution cityKey={cities[0].Key} />
          </Suspense>
        </div>
      </section>
    </main>
  );
}
