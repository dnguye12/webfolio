import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getYearDisplay = (startYear: number) => {
  const currentYear = new Date().getFullYear();
  if (startYear < 1900 || startYear > currentYear) {
    throw new Error('Invalid start year');
  }
  return startYear === currentYear ? startYear : `${startYear}-${currentYear}`;
};