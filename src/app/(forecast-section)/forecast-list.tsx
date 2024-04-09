import { getDailyForecast } from "@/lib/services";
import ForecaseItem from "./forecast-item";

type ForecastListProps = Readonly<{
  cityKey: string;
}>;

export default async function FiveDayForecast({ cityKey }: ForecastListProps) {
  const forecast = await getDailyForecast(cityKey, 5);

  return (
    <div className="flex flex-col xs:flex-row xs:flex-wrap items-center xs:justify-start xl:justify-between my-8">
      {forecast.DailyForecasts.map((forecast) => (
        <ForecaseItem key={forecast.EpochDate} forecast={forecast} />
      ))}
    </div>
  );
}
