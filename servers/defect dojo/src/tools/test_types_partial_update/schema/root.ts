import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this test_ type."),
  "tags": z.array(z.string().min(1)).optional(),
  "name": z.string().min(1).max(200).optional(),
  "static_tool": z.boolean().optional(),
  "dynamic_tool": z.boolean().optional(),
  "active": z.boolean().optional()
}