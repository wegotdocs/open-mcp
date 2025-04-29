import { z } from "zod"

export const inputParamsSchema = {
  "index_id": z.number().int().gte(1).describe("目录 ID")
}