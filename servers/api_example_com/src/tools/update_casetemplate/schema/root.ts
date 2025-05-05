import { z } from "zod"

export const inputParamsSchema = {
  "caseTemplateNameOrId": z.string().describe("The _id of the entity or its 'name' (depends of the entity)"),
  "name": z.string().min(1).max(128).optional(),
  "displayName": z.string().min(1).max(64).optional(),
  "titlePrefix": z.string().optional(),
  "description": z.string().max(1048576).optional(),
  "severity": z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "tags": z.array(z.string().min(1).max(128)).optional(),
  "flag": z.boolean().optional(),
  "tlp": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3), z.literal(4)]).optional(),
  "pap": z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]).optional(),
  "summary": z.string().max(1048576).optional(),
  "customFields": z.record(z.any()).optional(),
  "tasks": z.array(z.object({ "title": z.string().min(1).max(128), "group": z.string().min(1).max(64).optional(), "description": z.string().max(1048576).optional(), "status": z.string().min(1).max(16).optional(), "flag": z.boolean().optional(), "startDate": z.number().int().optional(), "endDate": z.number().int().optional(), "order": z.number().int().optional(), "dueDate": z.number().int().optional(), "assignee": z.string().min(1).max(128).optional(), "mandatory": z.boolean().optional() })).optional()
}