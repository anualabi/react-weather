import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

// Function for merging CSS classes using clsx and tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Function for getting the day of the week from a date string using date-fns
export function getDayOfWeek(date: Date): string {
  return format(date, "EEEE");
}
