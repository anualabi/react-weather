import LineChart from "@/components/line-chart";
import { getHourlyForecast } from "@/lib/services";
import { HourlyForecastAPIResponse } from "@/lib/types";

export type HourlyForecastData = Pick<
  HourlyForecastAPIResponse,
  "DateTime" | "Temperature"
>;

export type ChartData = {
  label: string;
  value: number;
};

/**
 * Extracts and formats weather data for charting.
 * Assumes input data is sorted in ascending chronological order.
 * @param rawData Array of raw weather data.
 * @returns Array of formatted data for charting.
 */
export const extractChartData = (
  rawData: HourlyForecastData[]
): ChartData[] => {
  // Calculate step to evenly select intervals for large datasets
  const step = Math.ceil(rawData.length / 4);

  return rawData
    .filter((_, index) => index % step === 0 || index === rawData.length - 1) // Ensure last item is included
    .map((data) => {
      const date = new Date(data.DateTime);
      const label = date.toISOString().substring(11, 16); // Extracts the "HH:MM" part
      const value = data.Temperature.Value;

      return { label, value };
    });
};

type DailyEvolutionProps = Readonly<{
  cityKey: string;
}>;

export default async function DailyEvolution({ cityKey }: DailyEvolutionProps) {
  const forecast = await getHourlyForecast(cityKey);
  const data = extractChartData(forecast);
  const accentColor = "#F48403";

  return (
    <LineChart data={data} fillColor={accentColor} strokeColor={accentColor} />
  );
}
