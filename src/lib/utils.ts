import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Function for merging CSS classes using clsx and tailwind-merge
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
