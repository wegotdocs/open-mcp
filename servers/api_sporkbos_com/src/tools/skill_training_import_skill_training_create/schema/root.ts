import { z } from "zod"

export const inputParamsSchema = {
  "team": z.number().int().describe("Team ID required for import"),
  "file": z.string().url()
}