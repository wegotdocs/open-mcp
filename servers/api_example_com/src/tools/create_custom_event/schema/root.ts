import { z } from "zod"

export const inputParamsSchema = {
  "caseId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "date": z.number().int(),
  "endDate": z.number().int().optional(),
  "title": z.string().min(1).max(128),
  "description": z.string().max(1048576).optional()
}