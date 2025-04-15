import { z } from "zod"

export const inputParams = {
  "discount_amount": z.string().describe("商户回传的优惠金额，如用户享受的红包金额，单位元").optional(),
  "discount_desc": z.string().describe("商户数据回传的优惠信息的名称。").optional(),
  "task_amount": z.string().describe("用户和商户发生交易的交易单金额，单位元。").optional(),
  "task_desc": z.string().describe("任务描述").optional(),
  "task_times": z.number().int().describe("当为次数型任务时必须传。").optional()
}