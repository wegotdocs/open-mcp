import { z } from "zod"

export const inputParams = {
  "valid_days_after_receive": z.number().int().describe("券生效后N天内可以使用。 限制： type为RELATIVE时可修改。 valid_days_after_receive必须大于0。  修改该时间，只允许延长，不允许缩短。").optional(),
  "valid_end_time": z.string().describe("券可使用的结束时间。 格式为yyyy-MM-dd HH:mm:ss 限制： type为ABSOLUTE可修改。 券可使用的结束时间valid_end_time 必须大于 券的发放结束时间 publish_end_time 修改券可使用的结束时间，只能延长，不允许缩短。").optional()
}