import { z } from "zod"

export const inputParamsSchema = {
  "jobType": z.string().describe("Job Type filter").optional(),
  "df": z.string().describe("Device filter").optional(),
  "lang": z.string().describe("Language tag").optional(),
  "tz": z.string().describe("Time Zone").optional()
}