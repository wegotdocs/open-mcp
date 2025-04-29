import { z } from "zod"

export const inputParamsSchema = {
  "character_id": z.number().int().gte(1).describe("角色 ID"),
  "type": z.string().describe("枚举值 {small|grid|large|medium}")
}