import { z } from "zod"

export const inputParams = {
  "defaultPriorityId": z.number().int().describe("The ID of the default priority for the priority scheme."),
  "description": z.string().max(4000).describe("The description of the priority scheme.").optional(),
  "mappings": z.string().optional(),
  "name": z.string().max(255).describe("The name of the priority scheme. Must be unique."),
  "priorityIds": z.array(z.number().int()).describe("The IDs of priorities in the scheme."),
  "projectIds": z.array(z.number().int()).describe("The IDs of projects that will use the priority scheme.").optional()
}