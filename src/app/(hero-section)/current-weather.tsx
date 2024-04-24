import { Container } from "@/components/ui";
import { getDailyForecast } from "@/lib/services";
import { LocationAPIResponse } from "@/lib/types";
import CityDisplay from "./city-display";
import TemperatureInfo from "./temperature-info";
import TemperatureToggle from "./temperature-toggle";
import TemperatureValue from "./temperature-value";

type CurrentWeatherProps = Readonly<{
  city: Pick<LocationAPIResponse, "Key" | "EnglishName" | "Country">;
}>;

export default async function CurrentWeather({ city }: CurrentWeatherProps) {
  const forecast = await getDailyForecast(city.Key);
  const dailyForecast = forecast.DailyForecasts[0];

  return (
    <Container className="flex h-full flex-col items-center justify-center">
      <CityDisplay cityName={city.EnglishName} countryId={city.Country.ID} />
      <div className="mb-7 flex items-center">
        <TemperatureValue value={dailyForecast.Temperature.Maximum.Value} />
        <TemperatureToggle />
      </div>
      <TemperatureInfo
        date={dailyForecast.Date}
        iconPhrase={dailyForecast.Day.IconPhrase}
      />
    </Container>
  );
}
