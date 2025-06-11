import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "lang": z.string().describe("Language").optional()
}