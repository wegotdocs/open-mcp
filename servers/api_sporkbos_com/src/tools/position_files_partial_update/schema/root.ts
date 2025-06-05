import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this position file."),
  "b_id": z.number().int().readonly().optional(),
  "file": z.string().url().optional(),
  "position": z.number().int().readonly().optional(),
  "name": z.string().max(255).optional(),
  "size": z.string().readonly().optional()
}