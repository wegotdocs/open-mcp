import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().nullable().describe("The employer's name").optional(),
  "address": z.string().optional(),
  "tax_id": z.string().nullable().describe("The employer's tax id").optional(),
  "url": z.string().nullable().describe("The URL for the employer's public website").optional()
}