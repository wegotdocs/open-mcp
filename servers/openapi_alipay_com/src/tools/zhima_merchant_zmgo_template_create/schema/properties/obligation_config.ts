import { z } from "zod"

export const inputParams = {
  "benefit_url": z.string().describe("芝麻GO管理页做任务按钮对应链接").optional(),
  "obligation_amount": z.string().describe("完成任务所需的最少额度，当obligation_template取值为：OBTL002时必传").optional(),
  "obligation_template": z.string().describe("承诺模式下，义务的类型，包含次数类型和金额类型：\t    OBTL001(\"OBTL001\", \"在x时间内完成n次\"),\t    OBTL002(\"OBTL002\", \"在x时间内达到n元金额\")").optional(),
  "obligation_times": z.string().describe("完成任务所需的最少次数，当obligation_template取值为：OBTL001时必填").optional(),
  "promise_type_desc": z.string().describe("任务描述").optional(),
  "task_progress_redirect_schema": z.string().describe("芝麻GO管理页任务进度重定向链接").optional()
}