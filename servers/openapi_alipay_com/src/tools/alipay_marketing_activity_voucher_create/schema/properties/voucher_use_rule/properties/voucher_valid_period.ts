import { z } from "zod"

export const inputParams = {
  "type": z.string().describe("券有效期类型").optional(),
  "valid_begin_time": z.string().describe("券可使用的开始时间。\t\t格式为：yyyy-MM-dd HH:mm:ss\t\t限制：\ttype为ABSOLUTE时该字段必填。").optional(),
  "valid_days_after_receive": z.number().int().describe("券生效后N天内可以使用。\t\t可以配合wait_days_after_receive字段使用。\t\t限制：\t1.type为RELATIVE时必填。\t2.valid_days_after_receive必须大于0。").optional(),
  "valid_end_time": z.string().describe("券可使用的结束时间。\t\t格式为yyyy-MM-dd HH:mm:ss\t\t限制：\t1、type为ABSOLUTE必填。\t2、券可使用的结束时间valid_end_time必须大于券的发放结束时间publish_end_time").optional(),
  "wait_days_after_receive": z.number().int().describe("用户领券后需要等待N天，券才可以生效。默认用户领券后立刻生效。\t\t限制：\t1、type为RELATIVE时可选。").optional()
}