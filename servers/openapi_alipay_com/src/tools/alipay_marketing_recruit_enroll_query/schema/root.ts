import { z } from "zod"

export const inputParams = {
  "out_biz_no": z.string().describe("外部操作流水号，创建招商报名时传入。由商家/ISV 自定义，仅支持字母、数字、下划线且需保证每次操作唯一。").optional(),
  "enroll_id": z.string().describe("报名ID，此参数和out_biz_no至少传一个，优先取enroll_id").optional()
}