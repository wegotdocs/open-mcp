import { z } from "zod"

export const inputParamsSchema = {
  "sourceType": z.string().describe("Alert Source filter").optional(),
  "df": z.string().describe("Device filter").optional(),
  "lang": z.string().describe("Language tag").optional(),
  "tz": z.string().describe("Time Zone").optional()
}