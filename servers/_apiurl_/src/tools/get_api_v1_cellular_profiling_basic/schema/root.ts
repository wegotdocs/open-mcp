import { z } from "zod"

export const inputParamsSchema = {
  "search": z.number().int().describe("Must be starts with 628").optional()
}