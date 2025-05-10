import { z } from "zod"

export const inputParamsSchema = {
  "character_id": z.number().int().gte(1).describe("角色 ID")
}