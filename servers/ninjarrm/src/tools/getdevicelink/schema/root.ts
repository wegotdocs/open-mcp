import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("Device identifier"),
  "redirect": z.boolean().describe("Return redirect response").optional()
}