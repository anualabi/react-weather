import LineChart from "@/components/line-chart";

export type ChartData = {
  label: string;
  value: number;
};

const data: ChartData[] = [
  { label: "08.00", value: 30 },
  { label: "11.00", value: 32 },
  { label: "14.00", value: 35 },
  { label: "17.00", value: 33 },
  { label: "20.00", value: 31 },
  { label: "23.00", value: 29 },
];

export default async function DailyWeatherEvolution() {
  const accentColor = "#F48403";

  return (
    <LineChart data={data} fillColor={accentColor} strokeColor={accentColor} />
  );
}
