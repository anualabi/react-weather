"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

import { Container, Input, Label } from "@/components/ui";

export default function CitySearchInput({ minSearchLength = 3 }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("city", term);
    } else {
      params.delete("city");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <Container className="mx-auto flex max-w-xl flex-col justify-center">
      <Label
        htmlFor="city-search"
        className="mb-1 text-lg font-normal capitalize text-accent md:mb-2 xl:mb-3"
      >
        City Name
      </Label>
      <Input
        id="city-search"
        type="search"
        placeholder="Enter city name"
        aria-label="Search for a city"
        onChange={(e) => {
          if (e.target.value.length >= minSearchLength)
            handleSearch(e.target.value);
        }}
        defaultValue={searchParams.get("city")?.toString()}
      />
    </Container>
  );
}
