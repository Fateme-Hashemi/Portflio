import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

/**
 * This function is a utility for handling Tailwind CSS class names in a React component.
 *
 * @param {ClassValue[]} inputs - An array of class values. 
 * ClassValue is a type that can represent
 a CSS class in various formats (string, array, object, etc.).
 *
 * @returns {void} The function returns a string of class names.
 * It merges the class values using clsx and twMerge.
 * clsx is a utility for constructing className strings conditionally. 
 * twMerge is a utility for merging Tailwind CSS class names.
 *
 **/
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
