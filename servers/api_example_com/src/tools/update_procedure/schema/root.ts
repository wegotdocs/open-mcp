import { z } from "zod"

export const inputParamsSchema = {
  "procedureId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "description": z.string().max(1048576).optional(),
  "occurDate": z.number().int().optional(),
  "patternId": z.string().min(1).max(128).optional(),
  "tactic": z.string().min(1).max(32).optional()
}