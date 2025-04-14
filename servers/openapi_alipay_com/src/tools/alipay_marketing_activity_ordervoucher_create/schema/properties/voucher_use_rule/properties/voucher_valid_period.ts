import { z } from "zod"

export const inputParams = {
  "type": z.string().describe("券有效期类型").optional(),
  "valid_begin_time": z.string().describe("券可使用的开始时间。格式为：yyyy-MM-dd HH:mm:ss").optional(),
  "valid_days_after_receive": z.number().int().describe("券生效后N天内可以使用。可以配合wait_days_after_receive字段使用。").optional(),
  "valid_end_time": z.string().describe("券可使用的结束时间。格式为yyyy-MM-dd HH:mm:ss").optional(),
  "wait_days_after_receive": z.number().int().describe("用户领券后需要等待N天，券才可以生效。如果该字段填入0或者不填写，则用户领券后立刻生效。").optional()
}