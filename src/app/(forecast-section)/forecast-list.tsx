import { getDailyForecast } from "@/lib/services";
import ForecaseItem from "./forecast-item";

type ForecastListProps = Readonly<{
  cityKey: string;
}>;

export default async function ForecastList({ cityKey }: ForecastListProps) {
  const forecast = await getDailyForecast(cityKey, 5);

  return (
    <div className="my-8 flex flex-col items-center xs:flex-row xs:flex-wrap xs:justify-start xl:justify-between">
      {forecast.DailyForecasts.map((forecast) => (
        <ForecaseItem key={forecast.EpochDate} forecast={forecast} />
      ))}
    </div>
  );
}
