import { z } from "zod"

export const inputParamsSchema = {
  "username": z.string().describe("设置了用户名之后无法使用 UID。"),
  "type": z.string().describe("枚举值 {small|large|medium}")
}