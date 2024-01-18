"use client";
import { useHandshaked } from "./useHandshaked";

export function PageClient() {
  const M = useHandshaked();
  return (
    <div>
      <M.Toggle />
      <M.CardVertical />
      <M.Carousel />
    </div>
  );
}

// Ignore Framer Module Warnings
const backup = console.error;
console.error = function filterWarnings(msg) {
  const supressedWarnings = ["Support for defaultProps"];

  // sometimes msg is not a string
  if (!supressedWarnings.some((entry) => msg.includes?.(entry))) {
    backup.apply(console, arguments);
  }
};
