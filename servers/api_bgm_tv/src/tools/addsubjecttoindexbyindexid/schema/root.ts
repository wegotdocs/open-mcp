import { z } from "zod"

export const inputParamsSchema = {
  "index_id": z.number().int().gte(1).describe("目录 ID"),
  "subject_id": z.number().int().optional(),
  "sort": z.number().int().describe("排序条件，越小越靠前").optional(),
  "comment": z.string().optional()
}