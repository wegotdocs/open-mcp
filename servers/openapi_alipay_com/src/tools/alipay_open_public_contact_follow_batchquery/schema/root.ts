import { z } from "zod"

export const inputParams = {
  "auth_token": z.string().describe("用户授权令牌").optional()
}