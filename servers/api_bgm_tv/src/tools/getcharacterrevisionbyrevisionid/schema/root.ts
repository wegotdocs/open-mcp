import { z } from "zod"

export const inputParamsSchema = {
  "revision_id": z.number().int().gte(1).describe("版本 ID")
}