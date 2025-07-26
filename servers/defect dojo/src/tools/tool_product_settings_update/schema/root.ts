import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this tool_ product_ settings."),
  "setting_url": z.string().min(1),
  "product": z.number().int(),
  "name": z.string().min(1).max(200),
  "description": z.string().max(2000).nullable().optional(),
  "url": z.string().max(2000).nullable().optional(),
  "tool_project_id": z.string().max(200).nullable().optional(),
  "tool_configuration": z.number().int()
}