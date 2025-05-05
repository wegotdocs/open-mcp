import { z } from "zod"

export const inputParamsSchema = {
  "ids": z.array(z.string().describe("The _id of the entity or its 'name' (depends of the entity)")),
  "title": z.string().min(1).max(128).optional(),
  "group": z.string().min(1).max(64).optional(),
  "description": z.string().max(1048576).optional(),
  "status": z.string().min(1).max(16).optional(),
  "flag": z.boolean().optional(),
  "startDate": z.number().int().optional(),
  "endDate": z.number().int().optional(),
  "order": z.number().int().optional(),
  "dueDate": z.number().int().optional(),
  "assignee": z.string().min(1).max(128).optional(),
  "mandatory": z.boolean().optional()
}