import { z } from "zod"

export const inputParamsSchema = {
  "subject_id": z.number().int().gte(1).describe("条目 ID")
}