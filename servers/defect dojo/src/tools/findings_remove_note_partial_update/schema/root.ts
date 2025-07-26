import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this finding."),
  "note_id": z.number().int().optional()
}