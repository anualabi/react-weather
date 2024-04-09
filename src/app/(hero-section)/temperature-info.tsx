import { P } from "@/components/ui";

type TemperatureInfoProps = Readonly<{
  date: string;
  iconPhrase: string;
}>;

export default function TemperatureInfo({
  date,
  iconPhrase,
}: TemperatureInfoProps) {
  return (
    <P className="font-black text-white">
      {date}, {iconPhrase}
    </P>
  );
}
