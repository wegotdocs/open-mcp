import { z } from "zod"

export const inputParams = {
  "acc_no": z.string().describe("待绑定账号PID").optional(),
  "app_no": z.string().describe("待绑定小程序的app_id").optional()
}