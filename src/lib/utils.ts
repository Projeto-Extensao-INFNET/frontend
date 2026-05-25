import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combine multiple `ClassValue` inputs into a single normalized, Tailwind-compatible className string.
 *
 * @param inputs - One or more class values (strings, arrays, objects, etc.) to be merged
 * @returns The resulting className string with conflicts resolved according to Tailwind rules
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
