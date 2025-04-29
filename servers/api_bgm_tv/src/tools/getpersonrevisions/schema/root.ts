import { z } from "zod"

export const inputParamsSchema = {
  "person_id": z.number().int().gte(1).describe("角色 ID"),
  "limit": z.number().int().gte(1).lte(50).describe("分页参数").optional(),
  "offset": z.number().int().gte(0).describe("分页参数").optional()
}