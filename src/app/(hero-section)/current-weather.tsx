import { Container } from "@/components/ui";
import CityDisplay from "./city-display";
import TemperatureInfo from "./temperature-info";
import TemperatureToggle from "./temperature-toggle";
import TemperatureValue from "./temperature-value";

export default async function CurrentWeather() {
  return (
    <Container className="h-full flex flex-col items-center justify-center">
      <CityDisplay cityName="Amsterdam" countryId="NL" />
      <div className="flex items-center mb-7">
        <TemperatureValue value={66} />
        <TemperatureToggle />
      </div>
      <TemperatureInfo date="Thursday" iconPhrase="Light rain" />
    </Container>
  );
}
