import { z } from "zod"

export const inputParams = {
  "app_no": z.string().describe("待解绑小程序的app_id").optional(),
  "acc_no": z.string().describe("待解绑账号PID").optional()
}