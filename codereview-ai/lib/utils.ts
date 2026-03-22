import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

export function formatTimestamp(date: Date): string {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
}

export function detectLanguage(code: string): string {
  if (code.includes("function") || code.includes("const") || code.includes("let")) {
    return "javascript";
  }
  if (code.includes("def ") || code.includes("import ")) {
    return "python";
  }
  if (code.includes("public class") || code.includes("System.out")) {
    return "java";
  }
  if (code.includes("<?php")) {
    return "php";
  }
  return "javascript";
}
