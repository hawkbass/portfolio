import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getImagePath(path: string): string {
  // For GitHub Pages deployment, we need to include the base path
  if (process.env.NODE_ENV === 'production') {
    return `/portfolio${path}`
  }
  return path
}
