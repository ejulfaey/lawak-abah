import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const generateGuestUserId = (): string => {
  const randomString = Math.random().toString(36).substring(2, 15);
  return `guest_${randomString}`;
};