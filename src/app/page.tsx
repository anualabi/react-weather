import { H2 } from "@/components/ui";
import { CitySearch, CurrentWeather } from "./(hero-section)";
import { ForecastList } from "./(forecast-section)";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] xl:h-[calc(100vh-96px)]">
        <div className="flex items-center justify-center h-52 md:h-60 xl:h-72">
          <CitySearch />
        </div>
        <div className="flex-1 bg-secondary">
          <CurrentWeather />
        </div>
      </section>
      <section className="min-h-96 max-w-7xl mx-auto my-32 px-5">
        <H2 className="uppercase text-accent font-bold">5 Days Forecast</H2>
        <ForecastList />
      </section>
    </main>
  );
}
