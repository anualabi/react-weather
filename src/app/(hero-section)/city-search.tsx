import { Container, Input, Label } from "@/components/ui";

export default function CitySearchInput({ minSearchLength = 3 }) {
  return (
    <Container className="max-w-xl mx-auto flex flex-col justify-center">
      <Label
        htmlFor="city-search"
        className="capitalize mb-1 text-lg font-normal text-accent md:mb-2 xl:mb-3"
      >
        City Name
      </Label>
      <Input
        id="city-search"
        type="search"
        placeholder="Enter city name"
        aria-label="Search for a city"
      />
    </Container>
  );
}
