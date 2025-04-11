import { z } from "zod"

export const inputParams = {
  "person_id": z.string(),
  "name": z.string().min(1).describe("Full name of this person").optional(),
  "address": z.string().optional(),
  "birth": z.string().date().describe("Date of birth, in format YYYY-MM-DD, or Unix timestamp").optional()
}