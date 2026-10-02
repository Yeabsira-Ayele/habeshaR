import { z } from "zod";

// Accepts +251 9XX XXX XXX, 251 9XX XXX XXX, 09XX XXX XXX or 9XX XXX XXX
export const phoneSchema = z
  .string()
  .trim()
  .refine(
    (value) => /^(\+?251|0)?9\d{8}$/.test(value.replace(/[\s-]/g, "")),
    "Enter a valid phone number, e.g. +251 911 234 567"
  );
