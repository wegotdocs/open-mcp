import { z } from "zod"

export const inputParams = {
  "app_auth_token": z.string().describe("应用授权令牌").optional()
}