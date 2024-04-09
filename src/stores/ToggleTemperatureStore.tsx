import { create } from "zustand";

import { TemperatureUnit } from "@/lib/types";

type State = {
  temperatureUnit: TemperatureUnit;
  temperatureValue: number | null;
};

type Actions = {
  toggleTemperature: () => void;
  resetTemperatureUnit: () => void;
  setTemperatureValue: (value: number | null) => void;
};

export const useToggleTemperatureStore = create<State & Actions>()((set) => ({
  temperatureUnit: "F",
  temperatureValue: null,
  resetTemperatureUnit: () => set({ temperatureUnit: "F" }),
  setTemperatureValue: (value: number | null) =>
    set({ temperatureValue: value }),
  toggleTemperature: () =>
    set((state) => {
      if (state.temperatureValue === null) {
        return {};
      }

      const newUnit = state.temperatureUnit === "C" ? "F" : "C";

      const newValue =
        newUnit === "C"
          ? (state.temperatureValue - 32) * (5 / 9) // F to C conversion
          : state.temperatureValue * (9 / 5) + 32; // C to F conversion

      return {
        temperatureUnit: newUnit,
        temperatureValue: Number(newValue.toFixed(0)),
      };
    }),
}));
