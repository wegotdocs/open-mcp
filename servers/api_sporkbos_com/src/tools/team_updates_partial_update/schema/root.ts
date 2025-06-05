import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this team update."),
  "b_id": z.number().int().readonly().optional(),
  "team": z.number().int().optional(),
  "note": z.string().optional(),
  "created_by": z.string().optional(),
  "created_at": z.string().datetime({ offset: true }).readonly().optional()
}