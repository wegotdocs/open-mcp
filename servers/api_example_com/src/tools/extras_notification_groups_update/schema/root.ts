import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this notification group."),
  "name": z.string().min(1).max(100),
  "description": z.string().max(200).optional(),
  "groups": z.array(z.number().int()).optional(),
  "users": z.array(z.number().int()).optional()
}