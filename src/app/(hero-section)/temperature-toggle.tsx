import TemperatureScale from "./temperature-scale";

export default function TemperatureToggle() {
  return (
    <div className="flex flex-col space-y-2.5">
      <TemperatureScale unit="C" />
      <TemperatureScale unit="F" />
    </div>
  );
}
