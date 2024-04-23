import ImageWithFallback from "@/components/image-with-fallback";
import { GradientBox, P } from "@/components/ui";
import { DailyForecast } from "@/lib/types";
import { formatDate } from "@/lib/utils";

type ForecastItemProps = Readonly<{
  forecast: DailyForecast;
}>;

const WeatherIconUrl = (iconNumber: number): string =>
  `https://developer.accuweather.com/sites/default/files/${iconNumber
    .toString()
    .padStart(2, "0")}-s.png`;

export default function ForecastItem({ forecast }: ForecastItemProps) {
  const { Date, Day, Temperature } = forecast;

  return (
    <GradientBox className="m-6 flex h-96 w-44 flex-col justify-end rounded-lg px-4 py-10">
      <P className="mb-3 font-black uppercase text-white">{formatDate(Date)}</P>
      <ImageWithFallback
        src={WeatherIconUrl(Day.Icon)}
        alt="Weather icon"
        width={20}
        height={20}
        fallback="/icon.png"
        className="h-20 w-20 object-cover"
      />
      <div className="my-5 flex items-center justify-between">
        <P className="text-3xl font-black text-accent md:text-4xl xl:text-5xl">
          {Temperature.Maximum.Value}&deg;
        </P>
        <P className="text-2xl font-black text-white md:text-3xl xl:text-4xl">
          {Temperature.Minimum.Value}&deg;
        </P>
      </div>
      <P className="truncate text-sm font-black text-white md:text-lg xl:text-lg">
        {Day.IconPhrase}
      </P>
    </GradientBox>
  );
}
