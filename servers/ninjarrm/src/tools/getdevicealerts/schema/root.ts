import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "lang": z.string().describe("Language tag").optional(),
  "tz": z.string().describe("Time Zone").optional()
}