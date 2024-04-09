import ForecaseItem from "./forecast-item";

export default async function FiveDayForecast() {
  return (
    <div className="flex flex-col xs:flex-row xs:flex-wrap items-center xs:justify-start xl:justify-between my-8">
      {Array.from({ length: 5 }).map((_, index) => (
        <ForecaseItem key={index} />
      ))}
    </div>
  );
}
