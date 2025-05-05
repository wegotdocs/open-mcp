import { z } from "zod"

export const inputParamsSchema = {
  "alertId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "patternId": z.string().min(1).max(128).describe("Id of the technique in the catalog"),
  "occurDate": z.number().int(),
  "tactic": z.string().min(1).max(32).describe("Name of the tactic, useful if the technique belongs to several tactics").optional(),
  "description": z.string().max(1048576).optional()
}