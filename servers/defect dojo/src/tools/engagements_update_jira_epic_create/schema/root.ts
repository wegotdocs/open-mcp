import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this engagement."),
  "epic_name": z.string().min(1).max(200).optional(),
  "epic_priority": z.string().min(1).nullable().optional()
}