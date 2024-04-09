import { DailyForecastAPIResponse, LocationAPIResponse } from "./types";

const API_KEY = process.env.ACCUWEATHER_API_KEY;
const API_URL = process.env.ACCUWEATHER_API_URL;

async function fetchFromAPI<T>(endpoint: string): Promise<T> {
  const response = await fetch(endpoint);

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`${error.Message}`);
  }

  return response.json();
}

export function getCity(city: string): Promise<LocationAPIResponse[]> {
  return fetchFromAPI(
    `${API_URL}/locations/v1/cities/search?apikey=${API_KEY}&q=${city}`
  );
}

export function getDailyForecast(
  cityKey: string,
  days: number = 1
): Promise<DailyForecastAPIResponse> {
  if (![1, 5].includes(days)) throw new Error("Unsupported forecast duration");
  return fetchFromAPI(
    `${API_URL}/forecasts/v1/daily/${days}day/${cityKey}?apikey=${API_KEY}`
  );
}
