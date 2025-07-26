import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this finding."),
  "name": z.string().min(1).max(120),
  "value": z.string().min(1).max(300)
}