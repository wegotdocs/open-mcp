import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("设置了用户名之后无法使用 UID。"),
  "character_id": z.number().int().gte(1).describe("角色 ID")
}