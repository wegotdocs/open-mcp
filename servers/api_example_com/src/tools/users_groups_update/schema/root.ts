import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this group."),
  "name": z.string().min(1).max(150),
  "description": z.string().max(200).optional(),
  "permissions": z.array(z.number().int()).optional()
}