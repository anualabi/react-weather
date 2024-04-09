export type LocationAPIResponse = {
  Key: string;
  Type: string;
  Rank: number;
  LocalizedName: string;
  EnglishName: string;
  PrimaryPostalCode: string;
  Region: { ID: string; LocalizedName: string; EnglishName: string };
  Country: {
    ID: string;
    LocalizedName: string;
    EnglishName: string;
  };
};

export type TemperatureUnit = "C" | "F";

export type DailyForecast = {
  Date: Date;
  EpochDate: number;
  Temperature: {
    Minimum: {
      Value: number;
      Unit: TemperatureUnit;
      UnitType: number;
    };
    Maximum: {
      Value: number;
      Unit: TemperatureUnit;
      UnitType: number;
    };
  };
  Day: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  };
  Night: {
    Icon: number;
    IconPhrase: string;
    HasPrecipitation: boolean;
  };
};

export type DailyForecastAPIResponse = {
  Headline: {
    EffectiveDate: Date;
    EffectiveEpochDate: number;
    Severity: number;
    Text: string;
    Category: string;
    EndDate: Date;
    EndEpochDate: number;
  };
  DailyForecasts: DailyForecast[];
};
