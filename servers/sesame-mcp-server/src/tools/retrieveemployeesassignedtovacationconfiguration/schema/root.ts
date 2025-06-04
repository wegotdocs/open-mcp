import { z } from "zod"

export const inputParamsSchema = {
  "vacationConfigurationId": z.string().uuid().describe("Vacation Configuration ID"),
  "year": z.number().describe("year of the configuration").optional(),
  "limit": z.number().int().describe("Limit contract types").optional(),
  "page": z.number().int().describe("Request a specific page").optional()
}