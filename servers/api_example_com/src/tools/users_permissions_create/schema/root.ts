import { z } from "zod"

export const inputParamsSchema = {
  "name": z.string().min(1).max(100),
  "description": z.string().max(200).optional(),
  "enabled": z.boolean().optional(),
  "object_types": z.array(z.string()),
  "actions": z.array(z.string().min(1).max(30)).describe("The list of actions granted by this permission"),
  "constraints": z.any().nullable().describe("Queryset filter matching the applicable objects of the selected type(s)").optional(),
  "groups": z.array(z.number().int()).optional(),
  "users": z.array(z.number().int()).optional()
}