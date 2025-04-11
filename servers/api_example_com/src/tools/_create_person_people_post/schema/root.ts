import { z } from "zod"

export const inputParams = {
  "name": z.string().min(1).describe("Full name of this person"),
  "address": z.string(),
  "birth": z.string().date().describe("Date of birth, in format YYYY-MM-DD, or Unix timestamp").optional()
}