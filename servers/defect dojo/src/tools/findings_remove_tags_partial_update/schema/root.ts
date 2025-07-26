import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this finding."),
  "tags": z.array(z.string().min(1)).optional()
}