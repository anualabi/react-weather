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
    <GradientBox className="flex flex-col justify-end w-44 h-96 px-4 py-10 m-6 rounded-lg">
      <P className="font-black uppercase text-white mb-3">{formatDate(Date)}</P>
      <ImageWithFallback
        src={WeatherIconUrl(Day.Icon)}
        alt="Weather icon"
        width={20}
        height={20}
        fallback="/icon.png"
        className="w-20 h-20 object-cover"
      />
      <div className="flex items-center justify-between my-5">
        <P className="font-black text-3xl text-accent md:text-4xl xl:text-5xl">
          {Temperature.Maximum.Value}&deg;
        </P>
        <P className="font-black text-2xl text-white md:text-3xl xl:text-4xl">
          {Temperature.Minimum.Value}&deg;
        </P>
      </div>
      <P className="font-black text-sm text-white md:text-lg xl:text-lg truncate">
        {Day.IconPhrase}
      </P>
    </GradientBox>
  );
}
