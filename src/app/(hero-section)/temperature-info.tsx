import { P } from "@/components/ui";
import { getDayOfWeek } from "@/lib/utils";

type TemperatureInfoProps = Readonly<{
  date: Date;
  iconPhrase: string;
}>;

export default function TemperatureInfo({
  date,
  iconPhrase,
}: TemperatureInfoProps) {
  return (
    <P className="font-black text-white">
      {getDayOfWeek(date)}, {iconPhrase}
    </P>
  );
}
