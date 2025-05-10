import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional(),
  "template": z.string().describe("模板").optional(),
  "template_id": z.string().describe("模板id").optional()
}