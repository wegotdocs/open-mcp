import { z } from "zod"

export const inputParams = {
  "target_appid": z.string().describe("小程序id").optional(),
  "apply_no": z.string().describe("审核工单id，提报接口的返回值").optional()
}