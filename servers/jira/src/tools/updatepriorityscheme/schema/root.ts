import { z } from "zod"

export const inputParamsSchema = {
  "schemeId": z.number().int().describe("The ID of the priority scheme."),
  "defaultPriorityId": z.number().int().describe("The default priority of the scheme.").optional(),
  "description": z.string().max(4000).describe("The description of the priority scheme.").optional(),
  "mappings": z.string().optional(),
  "name": z.string().max(255).describe("The name of the priority scheme. Must be unique.").optional(),
  "priorities": z.string().optional(),
  "projects": z.string().optional()
}