import { z } from "zod"

export const inputParams = {
  "mini_app_id": z.string().describe("业务小程序id").optional(),
  "app_origin": z.string().describe("业务来源").optional()
}