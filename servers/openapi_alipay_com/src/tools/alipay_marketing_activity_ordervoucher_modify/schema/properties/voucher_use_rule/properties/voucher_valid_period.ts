import { z } from "zod"

export const inputParams = {
  "valid_begin_time": z.string().describe("券可使用的开始时间。格式为：yyyy-MM-dd HH:mm:ss。").optional(),
  "valid_days_after_receive": z.number().int().describe("券生效后 N 天内可以使用。").optional(),
  "valid_end_time": z.string().describe("券可使用的结束时间。格式为yyyy-MM-dd HH:mm:ss。").optional(),
  "wait_days_after_receive": z.number().int().describe("用户领券后需要等待 N 天，券才可以生效。").optional()
}