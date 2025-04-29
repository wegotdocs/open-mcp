import { z } from "zod"

export const inputParamsSchema = {
  "index_id": z.number().int().gte(1).describe("目录 ID"),
  "title": z.string().optional(),
  "description": z.string().optional()
}