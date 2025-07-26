import { z } from "zod"

export const inputParamsSchema = {
  "id": z.number().int().describe("A unique integer value identifying this tool_ type."),
  "name": z.string().min(1).max(200),
  "description": z.string().max(2000).nullable().optional()
}